const coolGray050 = `#f5f7fa`
const coolGray700 = `#3e4c59`
const gray400 = `#cbd5e0`
const gray600 = `#718096`
const blue500 = `#4199e1`
const lightBlue500 = `#2bb0ed`
const indigo400 = `#647acb`
const yellow700 = `#cb6e17`
const red400 = `#ef4e4e`

module.exports = {
  'code[class*="language-"]': {
    fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
    fontSize: `14px`,
    lineHeight: `1.375`,
    direction: `ltr`,
    textAlign: `left`,
    whiteSpace: `pre`,
    wordSpacing: `normal`,
    wordBreak: `normal`,
    MozTabSize: `4`,
    OTabSize: `4`,
    tabSize: `4`,
    WebkitHyphens: `none`,
    MozHyphens: `none`,
    msHyphens: `none`,
    hyphens: `none`,
    background: coolGray050,
    color: coolGray700,
  },
  'pre[class*="language-"]': {
    fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
    fontSize: `14px`,
    lineHeight: `1.375`,
    direction: `ltr`,
    textAlign: `left`,
    whiteSpace: `pre`,
    wordSpacing: `normal`,
    wordBreak: `normal`,
    MozTabSize: `4`,
    OTabSize: `4`,
    tabSize: `4`,
    WebkitHyphens: `none`,
    MozHyphens: `none`,
    msHyphens: `none`,
    hyphens: `none`,
    background: coolGray050,
    color: coolGray700,
    padding: `1em`,
    margin: `.5em 0`,
    overflow: `auto`,
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: `none`,
    background: gray400,
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: `none`,
    background: gray400,
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: `none`,
    background: gray400,
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: `none`,
    background: gray400,
  },
  'pre[class*="language-"]::selection': {
    textShadow: `none`,
    background: gray400,
  },
  'pre[class*="language-"] ::selection': {
    textShadow: `none`,
    background: gray400,
  },
  'code[class*="language-"]::selection': {
    textShadow: `none`,
    background: gray400,
  },
  'code[class*="language-"] ::selection': {
    textShadow: `none`,
    background: gray400,
  },
  ':not(pre) > code[class*="language-"]': {
    padding: `.1em`,
    borderRadius: `.3em`,
  },
  comment: {
    color: gray600,
  },
  prolog: {
    color: gray600,
  },
  doctype: {
    color: gray600,
  },
  cdata: {
    color: gray600,
  },
  punctuation: {
    color: coolGray700,
  },
  namespace: {
    Opacity: `.7`,
  },
  operator: {
    color: yellow700,
  },
  boolean: {
    color: yellow700,
  },
  number: {
    color: yellow700,
  },
  property: {
    color: yellow700,
  },
  tag: {
    color: blue500,
  },
  string: {
    color: lightBlue500,
  },
  selector: {
    color: indigo400,
  },
  'attr-name': {
    color: yellow700,
  },
  entity: {
    color: lightBlue500,
    cursor: `help`,
  },
  url: {
    color: lightBlue500,
  },
  '.language-css .token.string': {
    color: lightBlue500,
  },
  '.style .token.string': {
    color: lightBlue500,
  },
  'attr-value': {
    color: yellow700,
  },
  keyword: {
    color: yellow700,
  },
  control: {
    color: yellow700,
  },
  directive: {
    color: yellow700,
  },
  unit: {
    color: yellow700,
  },
  statement: {
    color: lightBlue500,
  },
  regex: {
    color: lightBlue500,
  },
  atrule: {
    color: lightBlue500,
  },
  placeholder: {
    color: blue500,
  },
  variable: {
    color: blue500,
  },
  deleted: {
    textDecoration: `line-through`,
  },
  inserted: {
    borderBottom: `1px dotted #202746`,
    textDecoration: `none`,
  },
  italic: {
    fontStyle: `italic`,
  },
  important: {
    fontWeight: `bold`,
    color: red400,
  },
  bold: {
    fontWeight: `bold`,
  },
  'pre > code.highlight': {
    Outline: `0.4em solid #c94922`,
    OutlineOffset: `.4em`,
  },
  '.line-numbers .line-numbers-rows': {
    borderRightColor: gray400,
  },
  '.line-numbers-rows > span:before': {
    color: gray600,
  },
  '.line-highlight': {
    background: `linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))`,
  },
}
