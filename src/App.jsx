import Card from './components/Card';
import { useGetPostsQuery } from './services/PostsApi';

function App() {
  const { data, isFetching } = useGetPostsQuery();
  if (isFetching) return 'Loading...';

  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default App;
