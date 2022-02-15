db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('users');
//password: test
db.users.insert({
  name: 'Superuser',
  username: 'test',
  passwordHash: '$2b$10$J7/.SxwOTuoGPN7.0ZHraO3Few8wnRljKVzUobGhe80XR.xJ9hIh.',
});

db.createCollection('blogs');
db.blog.insert({
  title: 'Type wars',
  author: 'Robert C. Martin',
  url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
  likes: 3,
});
db.blog.insert({
  title: 'TDD harms architecture',
  title: 'React patterns',
  author: 'Michael Chan',
  url: 'https://reactpatterns.com/',
  likes: 81,
});
