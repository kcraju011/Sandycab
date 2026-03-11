const { Server } = require('socket.io');
const http = require('http');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Admin connected:', socket.id);

  socket.on('join-admin', () => {
    console.log('Admin joined notification room');
    socket.join('admin-room');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// API endpoint to emit new booking notification
// This can be called from the Next.js API route
const emitNewBooking = (bookingData) => {
  io.to('admin-room').emit('newBooking', bookingData);
  console.log('New booking emitted:', bookingData);
};

// Export for use in other files
module.exports = { io, emitNewBooking };

// Start server if run directly
const PORT = process.env.SOCKET_PORT || 3001;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});

