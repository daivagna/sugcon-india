import * as FEAAS from "@sitecore-feaas/clientside/react"

export default function MyBYOCComponent(props) {
    /*your component body*/
    return(
        <>
            <div>this is external react component</div>        
        </>
    )
  }
  
  FEAAS.registerComponent(MyComponent, {
      name: 'MyBYOCComponent',
      description: 'Description of MyComponent.',
      required: [ /* any required props */ ],
      properties: {
          /* your component props */
      },
      ui: {
          /* any ui configuration for the inputs form rendered in the builder */
      }
  })