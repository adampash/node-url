/* eslint-disable import/no-extraneous-dependencies */
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import uglify from 'rollup-plugin-uglify' // eslint-disable-line import/extensions

export default {
  entry: 'url.js',
  exports: 'default',
  plugins: [
    commonjs({
      ignoreGlobal: true,
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    // uglify(),
  ],
  format: 'cjs',
  moduleName: 'url',
  dest: 'url.web.js', // equivalent to --output
  sourceMap: true,
}
