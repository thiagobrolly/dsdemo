module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../packages/components-ui/src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../packages/components-ui/src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../packages/components-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile: 'templates/stories.mdx.hbs'
      },
      {
        type: 'add',
        path: '../packages/components-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
