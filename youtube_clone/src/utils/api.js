const [youtubeData, setYoutubeData] = useState([]);
const [searchText, setSearchText] = useState("All");

useEffect(() => {
  fetchFromApi("/search?part=snippet", searchText).then((response) => {
    setYoutubeData(response.data.items);
  });
}, [searchText]);

if (!youtubeData.length) {
  return;
}
