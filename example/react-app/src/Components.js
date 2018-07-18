import reactify from 'skatejs-react-integration';

const components = {};

const { meta, elements } = window.myElements;

meta.tags.forEach(tag => {
  const element = elements[tag];
  const component = reactify(element);
  components[meta.namesByTag[tag]] = component;
});

export default components;
