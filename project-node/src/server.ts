import * as http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {

  const url = req.url || '/';
  const method = req.method || 'GET';

  console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);

  // =========================
  // HOME
  // =========================
  if (url === '/' && method === 'GET') {

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
      <h1>Halaman Utama</h1>
      <p>Selamat datang di Node.js + TypeScript</p>
    `);
  }

  // =========================
  // ABOUT
  // =========================
  else if (url === '/about' && method === 'GET') {

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
      <h1>Tentang Kami</h1>
      <p>Ini contoh routing manual sederhana</p>
    `);
  }

  // =========================
  // GET USERS
  // =========================
  else if (url === '/api/users' && method === 'GET') {

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]));
  }

  // =========================
  // POST USERS
  // =========================
  else if (url === '/api/users' && method === 'POST') {

    res.writeHead(201, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify({
      message: 'User berhasil dibuat'
    }));
  }

  // =========================
  // GET PRODUCTS
  // =========================
  else if (url === '/products' && method === 'GET') {

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify([
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mouse' },
      { id: 3, name: 'Keyboard' }
    ]));
  }

  // =========================
  // POST PRODUCTS
  // =========================
  else if (url === '/products' && method === 'POST') {

    res.writeHead(201, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify({
      message: 'Produk berhasil ditambahkan'
    }));
  }

  // =========================
  // DYNAMIC ROUTE
  // =========================
  else if (url.startsWith('/users/') && method === 'GET') {

    const id = url.split('/')[2];

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify({
      id,
      name: `User ${id}`
    }));
  }

  // =========================
  // 404 NOT FOUND
  // =========================
  else {

    res.writeHead(404, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
      <h1>404 - Halaman Tidak Ditemukan</h1>
    `);
  }

});

// =========================
// JALANKAN SERVER
// =========================
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});