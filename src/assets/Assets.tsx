// Services Page START

interface Section {
    backgroundImage?: string; 
    section: string;
    title?: string; 
    heading?: string;
    content?: string;
    image?: string;
    buttonText?: string;
    learnMoreLink?: string;
    intro?: string;
    reads?: Array<{
      title: string;
      content: string;
      image: string;
      link: string;
    }>;
  }

type ServiceContent = Section[];


const servicesData: Record<string, ServiceContent> = {
    service1: [
      {
        section: "Section 1",
        heading: "Service 1", // Only the heading for h1
        backgroundImage: "/4.jpg", // Background image for Section 1
      },
      {
        section: "Section 2",
        heading: "We reimagine the way the world moves for the better",
        content: "Movement is what we power. It’s our lifeblood. It runs through our veins...",
        image: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
      },
      {
        section: "Section 3",
        title: "A letter from our CEO",
        content: "Read about our team’s commitment...",
        buttonText: "Read More!"
      },
      {
        section: "Section 4",
        title: "Sustainability 1",
        content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
        image: "/1.jpg",
        learnMoreLink: "#"
      },
      {
        section: "Section 5",
        title: "Sustainability",
        content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
        image: "/4.jpg",
        learnMoreLink: "#"
      },
      {
        section: "Section 6",
        title: "Our Top Reads",
        intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        reads: [
          {
            title: "d",
            content: "We’re building a culture within Bajrang Motor...",
            image: "/2.jpg",
            link: "#"
          },
          {
            title: "e",
            content: "We’re Bajrang Motor...",
            image: "/2.jpg",
            link: "#"
          },
          {
            title: "f",
            content: "fffff We’re building a culture within Bajrang Motor...",
            image: "/1.jpg",
            link: "#"
          }
        ],
        buttonText: "Read All!"
      }
    ],
  
  
  service2: [
    {
      section: "Section 1",
      heading: "Service 2", // Only the heading for h1
      backgroundImage: "/4.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "We reimagine the way the world Just for test",
      content: "Movement is what we power. It’s our lifeblood. It runs through our veins...",
      image: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!"
    },
    {
      section: "Section 4",
      title: "Sustainability 2",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/1.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 5",
      title: "Sustainability",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/4.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 6",
      title: "Our Top Reads",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      reads: [
        {
          title: "a",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "b",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "c",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/1.jpg",
          link: "#"
        }
      ],
      buttonText: "Read All!"
    },
  ],
  service3: [
    {
      section: "Section 1",
      heading: "Service 3", // Only the heading for h1
      backgroundImage: "/4.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "This is a third section i Want to test",
      content: "Movement is what we power. It’s our lifeblood. It runs through our veins...",
      image: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!"
    },
    {
      section: "Section 4",
      title: "Sustainability 3",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/1.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 5",
      title: "Sustainability",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/4.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 6",
      title: "Our Top Reads",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      reads: [
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/1.jpg",
          link: "#"
        }
      ],
      buttonText: "Read All!"
    }
  ],
  
  service4: [
    {
      section: "Section 1",
      heading: "Service 4", // Only the heading for h1
      backgroundImage: "/4.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "This is a 4th Service page i Want to test",
      content: "Movement is what we power. It’s our lifeblood. It runs through our veins...",
      image: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!"
    },
    {
      section: "Section 4",
      title: "Sustainability",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/1.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 5",
      title: "Sustainability",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/4.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 6",
      title: "Our Top Reads",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      reads: [
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/1.jpg",
          link: "#"
        }
      ],
      buttonText: "Read All!"
    }
  ],
  
  service5: [
    {
      section: "Section 1",
      heading: "Service 5", // Only the heading for h1
      backgroundImage: "/4.jpg", // Background image for Section 1
    },
    {
      section: "Section 2",
      heading: "This is a 5th Service page i Want to test",
      content: "Movement is what we power. It’s our lifeblood. It runs through our veins...",
      image: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg"
    },
    {
      section: "Section 3",
      title: "A letter from our CEO",
      content: "Read about our team’s commitment...",
      buttonText: "Read More!"
    },
    {
      section: "Section 4",
      title: "Sustainability",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/1.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 5",
      title: "Sustainability",
      content: "Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040...",
      image: "/4.jpg",
      learnMoreLink: "#"
    },
    {
      section: "Section 6",
      title: "Our Top Reads",
      intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      reads: [
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/2.jpg",
          link: "#"
        },
        {
          title: "Who's driving Bajrang Motors",
          content: "We’re building a culture within Bajrang Motor...",
          image: "/1.jpg",
          link: "#"
        }
      ],
      buttonText: "Read All!"
    }
  ],
  }

  export default servicesData;

  // Services Page END