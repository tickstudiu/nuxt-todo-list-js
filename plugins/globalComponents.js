/**
 * Every global components except 3rd-Party should be declared here
 */

 import Vue from 'vue'

 // #region Automatically register every Base components

 const requireComponent = require.context(
   // The relative path of the components folder
   '~/components/bases',
   // Whether or not to look in subfolders
   false,
   // The regular expression used to match base component filenames
   /Base[A-Z]\w+\.(vue|js)$/
 )

 requireComponent.keys().forEach((fileName) => {
   // Get component config
   const componentConfig = requireComponent(fileName)

   // Get PascalCase name of component
   const componentName =
     fileName
       .split('/')
       .pop()
       .replace(/\.\w+$/, '') ?? ''

   // Register component globally
   Vue.component(
     componentName,
     // Look for the component options on `.default`, which will
     // exist if the component was exported with `export default`,
     // otherwise fall back to module's root.
     componentConfig.default || componentConfig
   )
 })

 // #endregionÎ
