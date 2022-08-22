import {x} from '../data/server';

export function getStaticProps() {
  return {
    props: {
      x,
    },
  };
}

export default function Home(props) {
  return <div>{props.x}</div>;
}
