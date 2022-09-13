import { useEffect, useMemo, useState } from "react";
import { Container, Grid } from "@mui/material";
import { GitHub, Twitter, Facebook }from '@mui/icons-material';

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainFeaturedPost from "./components/MainFeaturedPost";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App(props) {

  const memoizedSections = useMemo(() => [
    {title: "تکنولوژی", url: "/"},
    {title: "طراحی", url: "#"},
    {title: "سیاست", url: "#"},
    {title: "دانش", url: "#"},
    {title: "سلامت", url: "#"},
    {title: "استایل", url: "#"},
    {title: "سفر", url: "#"},
    {title: "عقاید", url: "#"},
    {title: "فرهنگ", url: "#"},
  ], [])

  const memoizedMainFeaturedPost = useMemo(() => 
  ({title: "مباحث ویژه این وبلاگ برای همگان مفید می‌باشد",
    description: "وبلاگ ما مجموعه‌ای از موضوع‌های متنوع و مفید برای همه گروه‌ها می‌باشد",
    image: "/swaroop-b-deshpande-SQQdP7mG-rQ-unsplash.jpg",
    imageText: "گندم‌زار",
    linkText: "مطالعه بیشتر..."
  }), []
  )

  const memoizedFeaturePost = useMemo(() => 
  [{
      title: 'پست ویژه',
      date: '12 آبان',
      description:
        'متن ویژه پست در آبان ماه سال 1400 که ویژه این پست می‌باشد.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'متن عکس',
    },
    {
      title: '2 پست ویژه',
      date: '11 آبان',
      description:
      'متن ویژه پست در آبان ماه سال 1400 که ویژه این پست می‌باشد.',
      image: 'https://source.unsplash.com//random',
      imageLabel: 'متن عکس',
    }], []
  )

  const [postone, setPostone] = useState("")
  const [posttwo, setPosttwo] = useState("")

  useEffect(() => {
    const firstPath = require("./components/BlogPost/blog-post1.md");
    fetch(firstPath)
    .then(response => response.text())
    .then(text => setPostone(text))
    .catch((err) => console.error(err));
  }, [postone])

  useEffect(() => {
    const secondPath = require("./components/BlogPost/blog-post2.md");
    fetch(secondPath)
    .then(response => response.text())
    .then(text => setPosttwo(text))
    .catch((err) => console.error(err));
  }, [posttwo])
  
  const memoizesSidebar = useMemo(() => ({
    title: 'درباره',
    description:
     'توضیحات جامع درباره وبلاگ و مباحث‌ای که در این وبلاگ گذاشته می‌شود.',
    archives: [
      { title: 'فروردین 1401', url: '#' },
      { title: 'اسفند 1400', url: '#' },
      { title: ' دی 1400', url: '#' },
      { title: ' آبان 1400', url: '#' },
      { title: ' مرداد1400', url: '#' },
      { title: 'تیر 1400', url: '#' },
      { title: 'مرداد 1399', url: '#' },
      { title: 'دی 1398', url: '#' },
      { title: 'مرداد 1398', url: '#' },
      { title: 'تیر 1396', url: '#' },
      { title: 'مهر 1396', url: '#' },
    ],
    social: [
      { name: 'گیت‌هاب', icon: GitHub, url: '#'},
      { name: 'توییتر', icon: Twitter, url: '#' },
      { name: 'فیس‌بوک', icon: Facebook, url: '#' },
    ],
  }), [])

  return (
    <>
      <Container maxWidth="lg">
        <Header title="وبلاگ" sections={memoizedSections} />
        <main>
          <MainFeaturedPost post={memoizedMainFeaturedPost} />
          <Grid container spacing={4}>
            {memoizedFeaturePost.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="پست‌های فرمت md" postone={postone} posttwo={posttwo} />
            <Sidebar sidebar={memoizesSidebar} />
          </Grid>
        </main>
      </Container>
      <Footer title="وبلاگ" description="این وبلاگ برای آگاهی رساندن می‌باشد"/>
    </>
  );
}

export default App;