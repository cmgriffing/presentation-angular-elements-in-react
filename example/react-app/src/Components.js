import reactify from 'skatejs-react-integration';

const components = {};

const { meta, elements } = window.myElements;

meta.tags.map(tag => {
  const element = elements[tag];
  components[meta.namesByTag[tag]] = reactify(element);
})
console.log('components keys', Object.keys(components));

export default components;
