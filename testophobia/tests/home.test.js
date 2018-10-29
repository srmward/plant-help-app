export default {
  name: 'home',
  path: null,
  delay: null,
  actions: [
    {
      type: 'scroll',
      scrollLeft: 4000,
      target: 'body',
      delay: 200,
    },
    {
      type: 'click',
      target: '#infoBtn',
      delay: 100,
    },
  ],
};
