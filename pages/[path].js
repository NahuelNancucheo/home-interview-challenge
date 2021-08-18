export default function Page(props) {
  return <div>HELLO</div>;
}

Page.getInitialProps = async (ctx) => {
/*ctx{query{path}} */
//const {query:{ path }} = ctx
const res = await fetch(`http://localhost:3000/configuration/${ctx.query.path}`)
const json = await res.json()
console.log(json.data)
return {
  data: json.data,
  path: ctx.query.path
}
};