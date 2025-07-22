import BlogSection from "./BlogSection/Blog";

const Home = () => {
    return (
        <div>
            <div class="rs-banner style9">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="banner-content text-center">
                                <h1 class="title wow fadeinup  my-4">Science Fiction Story</h1>
                               <div className="container pt-12">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div class="btn-part">
                                            <a class=" readon learn-more1 lets-talk learn-more  lets-talk readon w-150px " href="about.html">New</a>
                                        </div>
                                    </div>
                                        <div className="col-lg-3">
                                        <div class="btn-part">
                                            <a class="readon  readon lets-talk learn-more learn-more lets-talk readon w-250px demo2" href="about.html">In Prograss</a>
                                        </div>
                                    </div>
                                        <div className="col-lg-3">
                                        <div class="btn-part">
                                            <a class="readon  readon lets-talk learn-more learn-more lets-talk readon w-250px demo3" href="about.html">Completed </a>
                                        </div>
                                    </div>
                                        <div className="col-lg-3">
                                        <div class="btn-part">
                                            <a class="readon  readon lets-talk learn-more learn-more lets-talk readon w-150px demo1" href="about.html">Clear All</a>
                                        </div>
                                    </div>
                                </div>
</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div>
                    <BlogSection/>
                </div>
            </div>
        </div>
    );
}

export default Home;
