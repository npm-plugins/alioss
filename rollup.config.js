import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import common from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'

const moduleNmae = 'alioss'

const file = type => {
  return `lib/${moduleNmae}.${type}.js`
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: file('cjs'),
      format: 'cjs'
    },
    {
      file: file('es'),
      format: 'es'
    },
    {
      file: file('brower'),
      format: 'iife',
      name: moduleNmae
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    common(),
    minify({ comments: false })
  ]
}