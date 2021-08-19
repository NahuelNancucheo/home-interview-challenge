export default function Page({data, path, statusCode}) {
  if(!data) {
    return <div>ERRORRR</div>
  }
  return <div>HELLO this is </div>;
}

Page.getInitialProps = async (ctx) => {
/*ctx{query{path}} */
//const {query:{ path }} = ctx
const res = await fetch(`http://localhost:3000/configuration/${ctx.query.path}`)
const json = await res.json()
//const statusCode = res.status > 200 ? res.status : false;
//console.log('holaaaaaaaaaaaaaaa status',statusCode)
console.log('holaaa data',json.data)
return {
  data: json.data,
  path: ctx.query.path
}
};