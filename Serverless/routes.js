'use strict';
const express = require('express');

const router = express();

router.get('/', (req, res) => {
  console.log(req.path);
  res.render('main', {
    title: 'Homepage',
    active: '',
    head: '../partials/main',
    main: '',
    contacts: '../partials/contacts'
  });
});

router.get('/about', (req, res) => {
  res.render('main', {
    title: 'About',
    active: '#about',
    head: '',
    main: '../partials/about',
    contacts: '../partials/contacts'
  });
});

router.get('/courses', (req, res) => {
  res.render('main', {
    title: 'Courses',
    active: '',
    head: '',
    main: '../partials/courses',
    contacts: '../partials/contacts'
  });
});

router.get('/programming', (req, res) => {
  res.render('main', {
    title: 'Programming',
    active: '#webdev',
    head: '',
    main: '../partials/programming',
    contacts: '../partials/contacts'
  });
});

router.get('/pythoncourse', (req, res) => {
  res.render('main', {
    title: 'Python Course',
    active: '',
    head: '',
    main: '../partials/pythoncourse',
    contacts: '../partials/contacts'
  });
});

router.get('/science', (req, res) => {
  res.render('main', {
    title: 'Science',
    active: 'science',
    head: '',
    main: '../partials/science',
    contacts: '../partials/contacts'
  });
});

router.get('/webdevcourse', (req, res) => {
  res.render('main', {
    title: 'Web Developer Course',
    active: '',
    head: '',
    main: '../partials/webdevcourse',
    contacts: '../partials/contacts'
  });
});

module.exports = router;
