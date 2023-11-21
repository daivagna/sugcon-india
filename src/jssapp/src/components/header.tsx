import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';
// import UsersData from './Users';

export type HeaderProps = {
  fields: {
    logo: Field<string>;
    CenterTitle: Field<string>;
    ContactUsImage: Field<string>;
  };
};
export type userData = {
  fields?: {
    id: Field<string>;
    email: Field<string>;
    firstName: Field<string>;
    lastName: Field<string>;
  };
};
const fetchData = async () => {
  const req = await fetch('https://dummyjson.com/users');
  const data = await req.json();
  //console.log(JSON.stringify(data));
  return { data: data.users };
};
// Inline Content block
export const Default = (props: HeaderProps): JSX.Element => {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);

  console.log('props' + JSON.stringify(props));
  //console.log('logo ' + JSON.stringify(props.fields.logo.value));

  const handleClick = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const users = await fetchData();
    setData(users);
    //console.log('data' + users);
    return users;
  };

  return (
    <>
      <div className="col-span-12 pb-[16px] lg:col-span-3 h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
        <div x-data="{showMenu: false}" className="flex items-center">
          {/* <button x-on:click="showMenu = true">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button> */}
          <div
            x-show="showMenu"
            className="fixed inset-0 w-full h-full bg-white z-50 text-yellow-900"
          >
            <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
              {/* <button x-on:click="showMenu = false" className="absolute top-0 left-0 mt-8 ml-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>{' '} */}
              <button onClick={handleClick}>Click me</button>
              {isLoading && <h2>Loading...</h2>}
              <table>
                <tbody>
                  {' '}
                  {data.data.map((fields: userData) => {
                    console.log(JSON.stringify(fields));
                    //console.log('User id is = ' + JSON.stringify(fields.id));
                    return (
                      <div key="1">test</div>
                      // <UsersData
                      //   key="1"
                      //   {...fields}
                      // />
                    );
                  })}
                </tbody>
              </table>
              <a
                href="/"
                className="text-3xl inline-block border-b-4 border-transparent hover:border-yellow-900"
              >
                Home
              </a>{' '}
              <a
                href="/pages/about-us"
                className="inline-block border-b-4 border-transparent hover:border-yellow-900"
              >
                About
              </a>{' '}
              <a
                href="/blog"
                className="inline-block border-b-4 border-transparent hover:border-yellow-900"
              >
                Blog
              </a>{' '}
              <a
                href="/contact"
                className="inline-block border-b-4 border-transparent hover:border-yellow-900"
              >
                Contact
              </a>
            </div>
            {/* <div className="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a href="/" className="text-white uppercase font-bold text-2xl tracking-widest">
            impulse
          </a>
        </div>
      </div>
    </>
  );
  /*const cta1 = () => {
    return (
      <>
        {props.fields.ctaStyles1.value == 'Primary' && (
          <PrimaryCTA
            primaryWrapperclassNamees={`${themeData.classNamees.primaryWrapperclassNamees}`}
            primaryclassNamees={`${themeData.classNamees.primaryLinkclassNamees}`}
            {...props}
          />
        )}
        {props.fields.ctaStyles1.value == 'Secondary' && (
          <SecondaryCTA
            secondaryWrapperclassNamees={`${themeData.classNamees.secondaryWrapperclassNamees}`}
            secondaryclassNamees={`${themeData.classNamees.secondaryLinkclassNamees}`}
            {...props}
          />
        )}
        {props.fields.ctaStyles1.value == '' && (
          <PrimaryCTA
            primaryWrapperclassNamees={`${themeData.classNamees.primaryWrapperclassNamees}`}
            primaryclassNamees={`${themeData.classNamees.primaryLinkclassNamees}`}
            {...props}
          />
        )}
      </>
    );
  };

  return (
    <>
      <Component
        backgroundVariant={`${props?.theme}`}
        variant="xl"
        dataComponent="general/contentblock"
        backgroundColor="none"
        {...props}
      >
        <div classNameName="col-span-12 pb-[16px] lg:col-span-3">
          <Headline classNamees={`${themeData.classNamees.headlineclassName}`} {...props} />
        </div>
        <div classNameName="col-span-12 lg:col-span-8 lg:col-end-13">
          <BodyCopy classNamees={`lg:text-text-xl ${themeData.classNamees.bodyclassName}`} {...props} />
         
          <div classNameName="cta-wrapper items-center pt-[24px] md:flex">
            {props.fields.cta1?.value.linktype == 'external' ? (
              <>
                {props.fields.cta1?.value?.url && props.fields.cta1?.value?.text && (
                  <div classNameName="mb-[16px] md:mb-[0px] md:mr-[32px]">{cta1()}</div>
                )}
              </>
            ) : (
              <>
                {props.fields.cta1?.value?.href && props.fields.cta1?.value?.text && (
                  <div classNameName="mb-[16px] md:mb-[0px] md:mr-[32px]">{cta1()}</div>
                )}
              </>
            )}
            <TertiaryCTA classNamees={`${themeData.classNamees.tertiaryLinkclassNamees}`} {...props} />
          </div>
        </div>
      </Component>
    </>
  );*/
};

const ContentBlock = (props: HeaderProps): JSX.Element => {
  return <Default {...props} />;
};

export default ContentBlock;
