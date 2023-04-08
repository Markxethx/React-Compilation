import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation"; 
export default function Services() {
  return (
    <>
      <Navigation />
      <div className="container md:p-10 mx-auto py-10  ">
        <div className=" text-center my-8">
          <h3 className="font-bold uppercase text-d1yellow text-xl">Choose your type of service</h3>
        </div>
        <div>
          <h3 className="flex items-center text-md mb-6 md:text-[28px] md:mb-12 ">
            <span className="text-d1yellow mr-4 font-bold">01</span>
            <svg
              width="50"
              height="1"
              viewBox="0 0 50 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="50" y2="0.5" stroke="black" />
            </svg>
            <span className="font-bold ml-4 text-d1bluedark">
              REAL ESTATE DIGITAL PLATFORM
            </span>
          </h3>
        </div>
        <div className="monthly-platform-tier-section row">
          <div className="card col-md-3">
            <div className="package-wrap py-8">
              <h5 className="mb-2 text-md  font-monument  uppercase text-center tracking-tight text-gray-900 ">
                Free Access
                <div className="h-[2px] bg-black mx-auto max-w-[50%] mt-2"></div>
              </h5>
              <h3 className="text-center text-xl font-monument mb-2">Free</h3>
              <p className="font-normal text-center text-gray-700 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
              <div
                className="w-full flex
              mt-3 relative mx-auto"
              >
                <Link to="/platform-registration?type=Free" className="d1btn mx-auto text-white">
                  GET IT FREE
                </Link>
              </div>
            </div>
          </div>
          <div className="card col-md-6 grid md:flex flex-row ">
            <div className="package-wrap p-8">
              <h5 className="mb-2 text-md  font-monument  uppercase text-center tracking-tight text-gray-900 ">
                MONTHLY
                <div className="h-[2px] bg-black mx-auto max-w-[50%] mt-2"></div>
              </h5>
              <h3 className="text-center text-xl font-monument mb-2">P499<span className="text-[16px]">/mo</span></h3>
              <p className="font-normal text-center text-gray-700 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
              <div
                className="w-full flex
              mt-3 relative mx-auto"
              >
                <Link to='/platform-registration?type=MONTHLY SUBSCRIPTION' className="d1btn mx-auto !bg-[#f7803199] text-white uppercase ">
                 Subscribe Now
                </Link>
              </div>
            </div>
            <div className="package-wrap py-8">
              <h5 className="mb-2 text-md  font-monument  uppercase text-center tracking-tight text-gray-900 ">
                ANNUAL
                <div className="h-[2px] bg-black mx-auto max-w-[50%] mt-2"></div>
              </h5>
              <h3 className="text-center text-xl font-monument mb-2">P499<span className="text-[16px]">/mo</span></h3>
              <p className="font-normal text-center text-gray-700 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
              <div
                className="w-full flex
              mt-3 relative mx-auto"
              >
                <Link to='/platform-registration?type=ANNUAL SUBSCRIPTION'  className="d1btn mx-auto  text-white uppercase">
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      <div className="free-vs-subs block md:flex justify-evenly mt-5"> 
          <img src="src/assets/re-platform/FreeAccess.svg" alt="" />
          <h3 className="text-lg text-d1yellow font-bold">VS</h3> 
          <img src="src/assets/re-platform/Subscription.svg" alt="" />
        </div>
      </div>

      <div className="bg-[#F6FCFF] md:p-20 py-10 ">
        <div className="container md:p-20 mx-auto    ">
          <h3 className="flex items-center text-md mb-6 md:text-[28px] md:mb-12 ">
            <span className="text-d1yellow mr-4 font-bold">02</span>
            <svg
              width="50"
              height="1"
              viewBox="0 0 50 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="50" y2="0.5" stroke="black" />
            </svg>
            <span className="font-bold ml-4 text-d1bluedark">
              DIGITAL ASSETS AUDIT
            </span>
          </h3>
          <div className="row flex p-30 sm:p-10 bg-[#fff] rounded-md max-w-[1400px] mx-auto">
            <div className="col-md-5  md:p-14 sm:p-3">
              <h3 className="text-[36px] font-monument">P9,500</h3>
              <p className="text-[20px] font-monument">per user</p>
              <div className="mt-4">
                <ul className="pricing-package text-[20px]">
                  <li>Platform Assessment</li>
                  <li>Personal Branding</li>
                  <li>Content and Content Planning</li>
                  <li>Engagement</li>
                  <li>Ad Execution / Creatives</li>
                  <li>Website Flow / Usability</li>
                  <li>Sentiment Scan</li>
                </ul>
                <div className="mt-4">
                  <Link to="/audit-register" className="d1btn mt-10 font-bold">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-7  md:p-14 sm:p-3">
              <h3 className="mb-2 text-lg text-d1yellow font-monument ">
                PRICING PACKAGE
              </h3>
              <div className="divide-y divide-dashed pricing-package">
                <div className="row py-4">
                  <div className="col-md-6">
                    <h3 className="monument text-[18px]">INDIVIDUAL</h3>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>For below 5</li>
                    </ul>
                  </div>
                </div>
                <div className="row py-4">
                  <div className="col-md-6">
                    <h3 className="monument text-[18px]">GROUP</h3>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li> 5 to 100 </li>
                      <li> 5 to 30 less 10% </li>
                      <li> 31 to 60 less 15% </li>
                      <li> 61 to 100 less 20%</li>
                    </ul>
                  </div>
                </div>
                <div className="row py-4">
                  <div className="col-md-6">
                    <h3 className="monument text-[18px]">CORPORATE</h3>
                    <p>
                      Please <a href="/contact">contact use</a> us regarding
                      package rates for audit of multiple users ranging from 100
                      and above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center w-full mt-5">
            <h3 href="" className="text-xl">
              LEARN MORE
            </h3>
          </div>
          <div className="service-learn-more-wraper md:p-20 p-4">
            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/platform.png" />
              </div>
              <div className="col-md-9">
                <h3>Platform Assessment</h3>
                <p>
                  We will examine all your personal and professional assets
                  including your social media accounts, handles, websites,
                  blogs, mentions, network, and the like. We will then identify
                  your competitive strengths and weaknesses and create
                  personalized strategies based on our research.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/personal-branding.png" />
              </div>
              <div className="col-md-9">
                <h3>Personal Branding</h3>
                <p>
                  We will examine your own personal branding and identity and
                  check whether it is professional, consistent, and aligned with
                  your values.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/contentplanning.png" />
              </div>
              <div className="col-md-9">
                <h3>Content and Content Planning</h3>
                <p>
                  This includes content planning, social media content
                  suggestion and other creative requirements including but not
                  limited to social cards and infographics. We will also
                  benchmark successful brands & personalities and offer insights
                  into your initiatives by analyzing strengths, overcoming your
                  content’s weaknesses, and suggesting ideas to strengthen and
                  boost your digital assets.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/engagement.png" />
              </div>
              <div className="col-md-9">
                <h3>Engagement</h3>
                <p>
                  We will review and measure your conversation and online
                  engagements as well as how you handle your online community.
                  We will then pinpoint areas of improvement and growth so that
                  adjustments can be made. This will also include data-oriented
                  pointers for customizing and diversifying our engagement
                  templates and guidelines on what contents are making positive
                  noise.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/ad.png" />
              </div>
              <div className="col-md-9">
                <h3>Ad Execution / Creatives </h3>
                <p>
                  We will evaluate your ad performance using several standard
                  and in-house KPIs. This includes, among others, but not
                  limited to, ad design and attractiveness, impression,
                  engagement, conversion, and traffic.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/webflow.png" />
              </div>
              <div className="col-md-9">
                <h3>Website Flow / Usability</h3>
                <p>
                  We will examine your website and test how users experience it.
                  This includes a detailed analysis of the design, branding,
                  ease of navigation, completeness of information.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <img src="src/assets/services_learnmore_section/sentiment.png" />
              </div>
              <div className="col-md-9">
                <h3>Sentiment Scan</h3>
                <p>
                  Sentiments will be obtained from different social media
                  platforms such as Facebook, Twitter, Instagram and YouTube as
                  well as in blogs, groups and forums. Sentiments of the people
                  online are categorized according to positive or negative
                  sentiments, and further categorized according to themes. Our
                  analysts then collaborate to extract valuable insights which
                  are later on converted into recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  p-20 special-reseach">
        <h3 className="flex items-center text-md mb-6 md:text-[28px] md:mb-12 ">
          <span className="text-d1yellow mr-4 font-bold">03</span>
          <svg
            width="50"
            height="1"
            viewBox="0 0 50 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="50" y2="0.5" stroke="black" />
          </svg>
          <span className="font-bold ml-4 text-d1bluedark">
            SPECIAL RESEARCH
          </span>
        </h3>
        <div className=" wrap-content-sp">
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/demographic 1.png"
                alt=""
              />
            </div>
            <h3>Demographics</h3>
            <p>Get to know more your market and segments to reach.</p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/research (3) 1.png"
                alt=""
              />
            </div>
            <h3>Complete Scan</h3>
            <p>Know the  "In and Out" of your kingdom</p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/apartment (1) 1.png"
                alt=""
              />
            </div>
            <h3>Real Estate Trends</h3>
            <p>
              What is the next big thing around the block? Get a head start on
              your next move.
            </p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/consumer-behavior 1.png"
                alt=""
              />
            </div>
            <h3>Behavioral Studies</h3>
            <p>Get to know them well.</p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/campaign 1.png"
                alt=""
              />
            </div>
            <h3>Campaign Study</h3>
            <p>Let's look at it. Is it working or not?</p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/brand-image 1.png"
                alt=""
              />
            </div>
            <h3>Brand Equity</h3>
            <p>
              It's a name game. Want to know more why you are so loved? Or hate.
            </p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/engagement 1.png"
                alt=""
              />
            </div>
            <h3>Engagement Audit</h3>
            <p>
              How well do you answer to your clients? A one good conversion can
              be your next big break.
            </p>
          </div>
          <div className="sp-re-content">
            <div className="icon">
              <img
                src="src/assets/services_special_research/knowledge 1.png"
                alt=""
              />
            </div>
            <h3>Special Studies</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </>
  );
}
