export interface ArticleContent {
  slug: string;
  category: {
    en: string;
    hi: string;
    pa: string;
  };
  readTime: string;
  publishDate: string;
  title: {
    en: string;
    hi: string;
    pa: string;
  };
  excerpt: {
    en: string;
    hi: string;
    pa: string;
  };
  content: {
    en: {
      introduction: string;
      sections: { heading: string; text: string; bullets?: string[] }[];
      conclusion: string;
    };
    hi: {
      introduction: string;
      sections: { heading: string; text: string; bullets?: string[] }[];
      conclusion: string;
    };
    pa: {
      introduction: string;
      sections: { heading: string; text: string; bullets?: string[] }[];
      conclusion: string;
    };
  };
}

export const ARTICLES_DATA: ArticleContent[] = [
  {
    slug: 'bail-law-what-to-know',
    category: {
      en: 'Criminal Law',
      hi: 'आपराधिक विधि',
      pa: 'ਫੌਜਦਾਰੀ ਕਾਨੂੰਨ',
    },
    readTime: '6 min read',
    publishDate: 'September 2026',
    title: {
      en: 'Bail in India: Regular, Interim & Anticipatory Bail Explained',
      hi: 'भारत में ज़मानत: नियमित, अंतरिम एवं अग्रिम ज़मानत के मूल नियम',
      pa: 'ਭਾਰਤ ਵਿੱਚ ਜ਼ਮਾਨਤ: ਨਿਯਮਤ, ਅੰਤਰਿਮ ਅਤੇ ਅਗਾਊਂ ਜ਼ਮਾਨਤ ਦੇ ਮੁੱਖ ਨਿਯਮ',
    },
    excerpt: {
      en: 'SAMPLE: REVIEW BEFORE PUBLISHING. A procedural guide to bail jurisprudence under BNSS, key grounds for release, and court tiers from Magistrate to High Court.',
      hi: 'SAMPLE: REVIEW BEFORE PUBLISHING. भारतीय नागरिक सुरक्षा संहिता के अंतर्गत ज़मानत के प्रकार, आवश्यक आधार तथा सत्र व उच्च न्यायालय की प्रक्रिया।',
      pa: 'SAMPLE: REVIEW BEFORE PUBLISHING. ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ ਅਧੀਨ ਜ਼ਮਾਨਤ ਦੀਆਂ ਕਿਸਮਾਂ, ਜ਼ਰੂਰੀ ਅਧਾਰ ਅਤੇ ਅਦਾਲਤੀ ਕਾਰਵਾਈ ਦੀ ਗਾਈਡ।',
    },
    content: {
      en: {
        introduction:
          'Liberty of the individual is guaranteed under Article 21 of the Constitution of India. The principle that "bail is the rule, jail is the exception" continues to govern Indian criminal jurisprudence under the Bharatiya Nagarik Suraksha Sanhita (BNSS). Understanding which type of bail applies to your circumstance is essential before approaching the court.',
        sections: [
          {
            heading: '1. Anticipatory Bail (Apprehension of Arrest)',
            text: 'Anticipatory bail is applied for before an arrest takes place, when an individual has reasonable grounds to believe they may be arrested in connection with a non-bailable offence. The application lies before the Sessions Court or the High Court.',
            bullets: [
              'Requires showing that allegations are motivated, false, or lack direct role.',
              'Applicant must undertake to join police investigation whenever required.',
              'Interim protection from arrest is often granted on the first date of hearing.',
            ],
          },
          {
            heading: '2. Regular Bail (Post-Arrest Release)',
            text: 'When a person has already been arrested by the police or has surrendered before the Magistrate, they must apply for Regular Bail. The court evaluates whether further custodial interrogation is necessary and whether the investigation is substantially complete.',
            bullets: [
              'Key consideration: severity of punishment and nature of accusations.',
              'Absence of flight risk or tampering with prosecution witnesses.',
              'Parity with co-accused who have already been enlarged on bail.',
            ],
          },
          {
            heading: '3. Interim Bail & Default Bail',
            text: 'Interim bail is temporary relief granted for a specified duration pending final adjudication or on medical/compassionate grounds. Default bail (under Section 187 BNSS / erstwhile Sec 167 CrPC) is an indefeasible statutory right if police fail to file the chargesheet within 60 or 90 days.',
          },
        ],
        conclusion:
          'Legal Disclaimer: This explainer is educational in nature. Every criminal matter depends upon the specific facts stated in the FIR and case diary. For urgent bail representation before the Sessions Court Panchkula or Punjab & Haryana High Court, consult an advocate immediately.',
      },
      hi: {
        introduction:
          'भारतीय संविधान का अनुच्छेद 21 प्रत्येक नागरिक की व्यक्तिगत स्वतंत्रता की रक्षा करता है। भारतीय आपराधिक न्यायशास्त्र में यह स्थापित सिद्धांत है कि "ज़मानत एक नियम है और जेल अपवाद"। भारतीय नागरिक सुरक्षा संहिता (BNSS) के अंतर्गत सही ज़मानत उपचार का चयन करना सर्वाधिक महत्वपूर्ण है।',
        sections: [
          {
            heading: '1. अग्रिम ज़मानत (गिरफ्तारी की आशंका होने पर)',
            text: 'जब किसी व्यक्ति को किसी गैर-ज़मानती अपराध में अनुचित रूप से गिरफ्तार किए जाने की आशंका हो, तो वह गिरफ्तारी से पूर्व सत्र न्यायालय अथवा उच्च न्यायालय के समक्ष अग्रिम ज़मानत याचिका दाखिल कर सकता है।',
            bullets: [
              'आरोपों में दुर्भावना अथवा प्रथम दृष्टया मामले का अभाव दर्शाना।',
              'जांच अधिकारी की जांच में सहयोग करने का स्पष्ट वचन देना।',
              'अदालत अक्सर पहली पेशी पर अंतरिम गिरफ्तारी से रोक प्रदान करती है।',
            ],
          },
          {
            heading: '2. नियमित ज़मानत (गिरफ्तारी के बाद रिहाई)',
            text: 'यदि व्यक्ति गिरफ्तार हो चुका है या न्यायिक हिरासत में है, तो नियमित ज़मानत का आवेदन किया जाता है। अदालत यह देखती है कि क्या आगे पुलिस हिरासत की आवश्यकता समाप्त हो चुकी है।',
            bullets: [
              'आरोप की गंभीरता एवं कानून में निर्धारित सजा की अवधि।',
              'मुवक्किल के भागने या गवाहों को प्रभावित करने की संभावना न होना।',
              'समान भूमिका वाले सह-अभियुक्तों को पूर्व में ज़मानत मिली होना।',
            ],
          },
          {
            heading: '3. अंतरिम ज़मानत एवं डिफॉल्ट ज़मानत',
            text: 'अंतरिम ज़मानत निश्चित अवधि या चिकित्सीय आधार पर दी जाती है। डिफॉल्ट ज़मानत तब अनिवार्य अधिकार बन जाती है जब पुलिस निर्धारित 60 या 90 दिनों में आरोप पत्र (चार्जशीट) दाखिल करने में विफल रहती है।',
          },
        ],
        conclusion:
          'विधिक अस्वीकरण: यह लेख केवल सामान्य जानकारी हेतु है। प्रत्येक आपराधिक मामले का परिणाम एफ.आई.आर के तथ्यों पर निर्भर करता है। पंचकूला कोर्ट अथवा पंजाब एवं हरियाणा हाईकोर्ट में ज़मानत पैरवी हेतु तुरंत वकील से परामर्श लें।',
      },
      pa: {
        introduction:
          'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੀ ਧਾਰਾ 21 ਹਰ ਨਾਗਰਿਕ ਦੀ ਨਿੱਜੀ ਆਜ਼ਾਦੀ ਦੀ ਗਾਰੰਟੀ ਦਿੰਦੀ ਹੈ। ਫੌਜਦਾਰੀ ਕਾਨੂੰਨ ਦਾ ਮੁੱਢਲਾ ਅਸੂਲ ਹੈ ਕਿ "ਜ਼ਮਾਨਤ ਇੱਕ ਨਿਯਮ ਹੈ ਅਤੇ ਜੇਲ੍ਹ ਅਪਵਾਦ"। ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ (BNSS) ਅਧੀਨ ਸਹੀ ਸਮੇਂ \'ਤੇ ਜ਼ਮਾਨਤ ਦੀ ਅਰਜ਼ੀ ਲਗਾਉਣਾ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਕਦਮ ਹੈ।',
        sections: [
          {
            heading: '1. ਅਗਾਊਂ ਜ਼ਮਾਨਤ (ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੇ ਡਰ ਵੇਲੇ)',
            text: 'ਜਦੋਂ ਕਿਸੇ ਵਿਅਕਤੀ ਨੂੰ ਸ਼ੱਕ ਹੋਵੇ ਕਿ ਉਸਨੂੰ ਕਿਸੇ ਗੈਰ-ਜ਼ਮਾਨਤੀ ਮਾਮਲੇ ਵਿੱਚ ਗ੍ਰਿਫ਼ਤਾਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਤਾਂ ਉਹ ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੋਂ ਪਹਿਲਾਂ ਸੈਸ਼ਨ ਕੋਰਟ ਜਾਂ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਅਗਾਊਂ ਜ਼ਮਾਨਤ ਲਈ ਜਾ ਸਕਦਾ ਹੈ।',
            bullets: [
              'ਦੋਸ਼ਾਂ ਦੀ ਬੇਬੁਨਿਆਦੀ ਜਾਂ ਸਿਆਸੀ ਰੰਜਿਸ਼ ਸਾਬਤ ਕਰਨੀ।',
              'ਪੁਲਿਸ ਪੜਤਾਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਦੀ ਲਿਖਤੀ ਹਾਮੀ ਭਰਨੀ।',
              'ਪਹਿਲੀ ਹੀ ਤਾਰੀਖ਼ \'ਤੇ ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੋਂ ਅੰਤਰਿਮ ਰਾਹਤ ਮਿਲ ਸਕਦੀ ਹੈ।',
            ],
          },
          {
            heading: '2. ਨਿਯਮਤ ਜ਼ਮਾਨਤ (ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੋਂ ਬਾਅਦ)',
            text: 'ਜੇਕਰ ਪੁਲਿਸ ਨੇ ਵਿਅਕਤੀ ਨੂੰ ਗ੍ਰਿਫ਼ਤਾਰ ਕਰ ਲਿਆ ਹੈ ਤਾਂ ਨਿਯਮਤ ਜ਼ਮਾਨਤ ਦਾਇਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਅਦਾਲਤ ਇਹ ਜਾਂਚਦੀ ਹੈ ਕਿ ਕੀ ਹੋਰ ਪੁਲਿਸ ਪੁੱਛਗਿੱਛ ਦੀ ਲੋੜ ਬਾਕੀ ਹੈ ਜਾਂ ਨਹੀਂ।',
            bullets: [
              'ਲਗਾਈ ਗਈ ਧਾਰਾ ਅਤੇ ਸਜ਼ਾ ਦੀ ਗੰਭੀਰਤਾ।',
              'ਮੁਲਜ਼ਮ ਦੇ ਭੱਜਣ ਜਾਂ ਗਵਾਹਾਂ ਨੂੰ ਡਰਾਉਣ ਦਾ ਕੋਈ ਖ਼ਤਰਾ ਨਾ ਹੋਣਾ।',
              'ਦੂਜੇ ਸਹਿ-ਮੁਲਜ਼ਮਾਂ ਨੂੰ ਪਹਿਲਾਂ ਜ਼ਮਾਨਤ ਮਿਲੀ ਹੋਣਾ।',
            ],
          },
          {
            heading: '3. ਅੰਤਰਿਮ ਜ਼ਮਾਨਤ ਅਤੇ ਡਿਫਾਲਟ ਜ਼ਮਾਨਤ',
            text: 'ਅੰਤਰਿਮ ਜ਼ਮਾਨਤ ਥੋੜ੍ਹੇ ਸਮੇਂ ਜਾਂ ਬਿਮਾਰੀ ਦੇ ਅਧਾਰ ਤੇ ਮਿਲਦੀ ਹੈ। ਜੇਕਰ ਪੁਲਿਸ 60 ਜਾਂ 90 ਦਿਨਾਂ ਵਿੱਚ ਚਲਾਨ (ਚਾਰਜਸ਼ੀਟ) ਪੇਸ਼ ਨਾ ਕਰੇ ਤਾਂ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਡਿਫਾਲਟ ਜ਼ਮਾਨਤ ਪੱਕਾ ਹੱਕ ਬਣ ਜਾਂਦੀ ਹੈ।',
          },
        ],
        conclusion:
          'ਕਾਨੂੰਨੀ ਸੂਚਨਾ: ਇਹ ਲੇਖ ਸਿਰਫ਼ ਆਮ ਸਿੱਖਿਆ ਲਈ ਹੈ। ਹਰ ਫੌਜਦਾਰੀ ਕੇਸ ਦੇ ਤੱਥ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ। ਪੰਚਕੂਲਾ ਅਦਾਲਤ ਜਾਂ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਜ਼ਮਾਨਤ ਲਈ ਤੁਰੰਤ ਵਕੀਲ ਨਾਲ ਸਲਾਹ ਕਰੋ।',
      },
    },
  },

  {
    slug: 'documents-needed-property-registration-kalka-panchkula',
    category: {
      en: 'Property Law',
      hi: 'संपत्ति प्रलेखन',
      pa: 'ਜਾਇਦਾਦ ਦਸਤਾਵੇਜ਼',
    },
    readTime: '7 min read',
    publishDate: 'September 2026',
    title: {
      en: 'Documents Needed for Property Registration in Kalka & Panchkula',
      hi: 'कालका एवं पंचकूला में संपत्ति रजिस्ट्री एवं दस्तावेज़ीकरण हेतु आवश्यक कागज़ात',
      pa: 'ਕਾਲਕਾ ਅਤੇ ਪੰਚਕੂਲਾ ਵਿੱਚ ਜਾਇਦਾਦ ਦੀ ਰਜਿਸਟਰੀ ਲਈ ਜ਼ਰੂਰੀ ਦਸਤਾਵੇਜ਼',
    },
    excerpt: {
      en: 'SAMPLE: REVIEW BEFORE PUBLISHING. A practical checklist of title deeds, fard jamabandi, NOCs, circle rates, and mutation (inteqal) before Haryana sub-registrars.',
      hi: 'SAMPLE: REVIEW BEFORE PUBLISHING. हरियाणा उप-पंजीयक कार्यालयों में बैनामा, फर्द जमाबंदी, एन.ओ.सी. एवं इंतकाल हेतु आवश्यक विधिक दस्तावेज़।',
      pa: 'SAMPLE: REVIEW BEFORE PUBLISHING. ਹਰਿਆਣਾ ਤਹਿਸੀਲ ਵਿੱਚ ਬਿਆਨਾ, ਜਮ੍ਹਾਂਬੰਦੀ, ਐੱਨ.ਓ.ਸੀ. ਅਤੇ ਇੰਤਕਾਲ ਕਰਵਾਉਣ ਲਈ ਜ਼ਰੂਰੀ ਕਾਗਜ਼ਾਤਾਂ ਦੀ ਗਾਈਡ।',
    },
    content: {
      en: {
        introduction:
          'Property transactions in Sub-Tehsil Kalka, Pinjore, and District Panchkula must strictly comply with the Registration Act and Haryana Stamp Rules. A minor omission in title verification or encumbrance scrutiny can lead to prolonged civil litigation.',
        sections: [
          {
            heading: '1. Primary Title & Revenue Records',
            text: 'Before executing a Sale Deed (Bainama), it is critical to trace title ownership back at least 30 years to verify encumbrance-free status.',
            bullets: [
              'Original Prior Title Deeds (Sale Deed, Gift Deed, or Court Decree).',
              'Latest Certified Jamabandi (Fard) issued within the current revenue cycle.',
              'Mutation (Inteqal) sanction order showing seller as recorded owner.',
              'Aks Shajra (cadastral map) verifying boundary lines and khasra numbers.',
            ],
          },
          {
            heading: '2. Regulatory Clearances & NOCs',
            text: 'Depending upon whether the land is agricultural, residential colony, or commercial plot:',
            bullets: [
              'No Dues Certificate (NDC) from Municipal Committee Kalka / Pinjore.',
              'Town & Country Planning (DTCP) NOC under Section 7A (if applicable).',
              'Electricity and water utility bills clearance proof.',
            ],
          },
          {
            heading: '3. Valuation, Stamp Duty & Registration Process',
            text: 'Haryana stamp duty is calculated on the collector rate (circle rate) or consideration amount, whichever is higher. Concessionary stamp duty rates apply for women buyers. Both buyer and seller, along with two independent witnesses, must present original identity cards and biometric authentication before the Sub-Registrar.',
          },
        ],
        conclusion:
          'Disclaimer: This guide is purely informational. In property transactions involving agricultural land, partition issues, or ancestral claims in Kalka and Panchkula, obtaining a written Legal Title Search Report is strongly recommended.',
      },
      hi: {
        introduction:
          'उप-तहसील कालका, पिंजौर एवं जिला पंचकूला में अचल संपत्ति का क्रय-विक्रय पंजीकरण अधिनियम एवं हरियाणा स्टाम्प नियमों के अधीन होता है। स्वामित्व की सूक्ष्म जांच किए बिना रजिस्ट्री कराना भविष्य में दीवानी मुकदमेबाजी को जन्म दे सकता है।',
        sections: [
          {
            heading: '1. मूल स्वामित्व एवं राजस्व अभिलेख',
            text: 'विक्रय विलेख (बैनामा) निष्पादित करने से पहले कम से कम 30 वर्षों के स्वामित्व इतिहास की जांच आवश्यक है:',
            bullets: [
              'पूर्व पंजीकृत विलेख (रजिस्ट्री, दान पत्र या अदालती डिक्री) की मूल प्रति।',
              'तहसीलदार/पटवारी द्वारा जारी नवीनतम प्रमाणित जमाबंदी (फर्द)।',
              'विक्रेता के नाम दर्ज स्वीकृत इंतकाल (Mutation) की प्रति।',
              'खसरा नंबर एवं सीमाओं के मिलान हेतु अक्स शजरा (नक्शा)।',
            ],
          },
          {
            heading: '2. आवश्यक अनापत्ति प्रमाण पत्र (NOC)',
            text: 'भूमि की प्रकृति (कृषि, आवासीय अथवा व्यावसायिक) के अनुसार निम्नलिखित प्रमाण पत्र आवश्यक होते हैं:',
            bullets: [
              'नगर पालिका कालका/पिंजौर से नो ड्यूज सर्टिफिकेट (NDC)।',
              'टाउन एंड कंट्री प्लानिंग (DTCP) धारा 7A के तहत एन.ओ.सी. (जहाँ लागू हो)।',
              'संपत्ति कर एवं विकास शुल्क चुकता रसीद।',
            ],
          },
          {
            heading: '3. स्टाम्प शुल्क एवं उप-पंजीयक के समक्ष निष्पादन',
            text: 'हरियाणा में स्टाम्प शुल्क कलेक्टर रेट (सर्कल रेट) या विक्रय मूल्य, जो भी अधिक हो, पर देय होता है। महिला खरीदारों को स्टाम्प ड्यूटी में विशेष छूट प्राप्त है। उप-पंजीयक के समक्ष क्रेता, विक्रेता तथा दो स्वतंत्र गवाहों की बायोमेट्रिक उपस्थिति अनिवार्य है।',
          },
        ],
        conclusion:
          'अस्वीकरण: यह लेख केवल मार्गदर्शन हेतु है। कालका व पंचकूला में भूमि क्रय से पूर्व किसी भी कानूनी जोखिम से बचने के लिए अधिवक्ता से लिखित टाइटल सर्च रिपोर्ट अवश्य बनवाएं।',
      },
      pa: {
        introduction:
          'ਤਹਿਸੀਲ ਕਾਲਕਾ, ਪਿੰਜੌਰ ਅਤੇ ਪੰਚਕੂਲਾ ਵਿੱਚ ਜ਼ਮੀਨ-ਜਾਇਦਾਦ ਦੀ ਰਜਿਸਟਰੀ ਹਰਿਆਣਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨਿਯਮਾਂ ਅਧੀਨ ਹੁੰਦੀ ਹੈ। ਟਾਈਟਲ ਦੀ ਪੁਖ਼ਤਾ ਜਾਂਚ ਕੀਤੇ ਬਿਨਾਂ ਜ਼ਮੀਨ ਖ਼ਰੀਦਣਾ ਬਾਅਦ ਵਿੱਚ ਦੀਵਾਨੀ ਮੁਕੱਦਮੇਬਾਜ਼ੀ ਦਾ ਕਾਰਨ ਬਣ ਸਕਦਾ ਹੈ।',
        sections: [
          {
            heading: '1. ਮੁੱਢਲਾ ਮਾਲਕੀ ਰਿਕਾਰਡ ਅਤੇ ਫ਼ਰਦ',
            text: 'ਬਿਆਨਾ ਜਾਂ ਰਜਿਸਟਰੀ ਲਿਖਵਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪਿਛਲੇ 30 ਸਾਲਾਂ ਦੇ ਮਾਲਕੀ ਰਿਕਾਰਡ ਦੀ ਪੜਤਾਲ ਜ਼ਰੂਰੀ ਹੈ:',
            bullets: [
              'ਪਿਛਲੀ ਅਸਲ ਰਜਿਸਟਰੀ, ਵਸੀਅਤ ਜਾਂ ਅਦਾਲਤੀ ਫ਼ੈਸਲੇ ਦੀ ਕਾਪੀ।',
              'ਪਟਵਾਰੀ ਵੱਲੋਂ ਤਸਦੀਕਸ਼ੁਦਾ ਤਾਜ਼ਾ ਜਮ੍ਹਾਂਬੰਦੀ (ਫ਼ਰਦ)।',
              'ਵੇਚਣ ਵਾਲੇ ਦੇ ਨਾਂ \'ਤੇ ਮਨਜ਼ੂਰ ਹੋਇਆ ਇੰਤਕਾਲ।',
              'ਖਸਰਾ ਨੰਬਰਾਂ ਅਤੇ ਹੱਦਾਂ ਦੀ ਤਸਦੀਕ ਲਈ ਅਕਸ ਸ਼ਜਰਾ (ਨਕਸ਼ਾ)।',
            ],
          },
          {
            heading: '2. ਸਰਕਾਰੀ ਐੱਨ.ਓ.ਸੀ. ਅਤੇ ਕਲੀਅਰੈਂਸ',
            text: 'ਜ਼ਮੀਨ ਦੀ ਕਿਸਮ ਅਨੁਸਾਰ ਸੰਬੰਧਤ ਸਰਕਾਰੀ ਦਫ਼ਤਰਾਂ ਤੋਂ ਕਲੀਅਰੈਂਸ ਲੈਣੀ ਜ਼ਰੂਰੀ ਹੁੰਦੀ ਹੈ:',
            bullets: [
              'ਮਿਉਂਸਪਲ ਕਮੇਟੀ ਕਾਲਕਾ/ਪਿੰਜੌਰ ਤੋਂ ਨੋ ਡਿਊਜ਼ ਸਰਟੀਫਿਕੇਟ (NDC)।',
              'ਟਾਊਨ ਐਂਡ ਕੰਟਰੀ ਪਲਾਨਿੰਗ (DTCP) ਧਾਰਾ 7A ਅਧੀਨ ਐੱਨ.ਓ.ਸੀ.।',
              'ਪ੍ਰਾਪਰਟੀ ਟੈਕਸ ਅਤੇ ਬਿਜਲੀ ਦੇ ਬਕਾਏ ਦੀ ਕਲੀਅਰੈਂਸ।',
            ],
          },
          {
            heading: '3. ਅਸ਼ਟਾਮ ਡਿਊਟੀ ਅਤੇ ਰਜਿਸਟਰੀ ਦਾ ਅਮਲ',
            text: 'ਸਰਕਲ ਰੇਟ ਅਨੁਸਾਰ ਅਸ਼ਟਾਮ ਡਿਊਟੀ ਭਰੀ ਜਾਂਦੀ ਹੈ। ਔਰਤਾਂ ਦੇ ਨਾਂ \'ਤੇ ਰਜਿਸਟਰੀ ਕਰਵਾਉਣ \'ਤੇ ਸਰਕਾਰੀ ਫੀਸ ਵਿੱਚ ਛੋਟ ਮਿਲਦੀ ਹੈ। ਤਹਿਸੀਲਦਾਰ ਸਾਹਮਣੇ ਦੋਵੇਂ ਧਿਰਾਂ ਅਤੇ ਦੋ ਗਵਾਹਾਂ ਦੀ ਹਾਜ਼ਰੀ ਲਾਜ਼ਮੀ ਹੁੰਦੀ ਹੈ।',
          },
        ],
        conclusion:
          'ਕਾਨੂੰਨੀ ਸੂਚਨਾ: ਇਹ ਲੇਖ ਸਿਰਫ਼ ਆਮ ਜਾਣਕਾਰੀ ਲਈ ਹੈ। ਕਾਲਕਾ ਜਾਂ ਪੰਚਕੂਲਾ ਵਿੱਚ ਜਾਇਦਾਦ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਲਿਖਤੀ ਟਾਈਟਲ ਜਾਂਚ ਰਿਪੋਰਟ ਜ਼ਰੂਰ ਲਵੋ।',
      },
    },
  },

  {
    slug: 'how-legal-notice-works-cheque-bounce-recovery',
    category: {
      en: 'Legal Notices',
      hi: 'विधिक नोटिस',
      pa: 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ',
    },
    readTime: '5 min read',
    publishDate: 'September 2026',
    title: {
      en: 'How a Statutory Legal Notice Works: Timelines & Common Pitfalls',
      hi: 'कानूनी नोटिस की प्रक्रिया: समय-सीमा, प्रारूप एवं महत्वपूर्ण सावधानियां',
      pa: 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਦੀ ਕਾਰਵਾਈ: ਸਮਾਂ-ਸੀਮਾ, ਖਰੜਾ ਅਤੇ ਜ਼ਰੂਰੀ ਸਾਵਧਾਨੀਆਂ',
    },
    excerpt: {
      en: 'SAMPLE: REVIEW BEFORE PUBLISHING. Understanding Section 138 NI Act notices for cheque bounce, demand notices for unpaid debt, and how to respond within statutory periods.',
      hi: 'SAMPLE: REVIEW BEFORE PUBLISHING. चेक बाउंस धारा 138 नोटिस, धन वसूली मांग नोटिस एवं निर्धारित समय-सीमा के भीतर वैधानिक कानूनी उत्तर देने की प्रक्रिया।',
      pa: 'SAMPLE: REVIEW BEFORE PUBLISHING. ਧਾਰਾ 138 ਅਧੀਨ ਚੈੱਕ ਬਾਊਂਸ ਨੋਟਿਸ, ਬਕਾਇਆ ਪੈਸੇ ਦੀ ਮੰਗ ਅਤੇ ਕਾਨੂੰਨੀ ਮਿਆਦ ਵਿੱਚ ਢੁਕਵਾਂ ਜਵਾਬ ਦੇਣ ਦਾ ਤਰੀਕਾ।',
    },
    content: {
      en: {
        introduction:
          'A statutory legal notice is a formal written communication warning the recipient of impending litigation should they fail to rectify a legal breach. In India, notices are not merely procedural formalities—in matters such as Section 138 of the Negotiable Instruments Act, sending a notice within the strict limitation period is a mandatory condition precedent.',
        sections: [
          {
            heading: '1. Section 138 NI Act (Cheque Dishonour Notice)',
            text: 'When a cheque is returned unpaid by the bank with reasons such as "funds insufficient":',
            bullets: [
              'Notice must be issued within 30 days of receiving the return memo.',
              'Drawer must be given exactly 15 days from receipt to pay the amount.',
              'If payment is not made within 15 days, cause of action arises to file a criminal complaint within the subsequent 30 days.',
            ],
          },
          {
            heading: '2. Money Recovery & Breach of Contract Notices',
            text: 'In civil claims, issuing a notice puts the defaulting party on formal notice regarding accrued interest, contractual breaches, and prospective litigation costs under the CPC and Limitation Act.',
          },
          {
            heading: '3. What to Do When You Receive a Legal Notice',
            text: 'Never ignore a legal notice. Failing to respond may be treated by the court as an implied admission of the facts alleged. A well-crafted legal reply drafted by an advocate sets up your formal defence right from the pre-litigation stage.',
          },
        ],
        conclusion:
          'Disclaimer: This article does not constitute legal advice. Statutory timelines under the NI Act and civil law are rigid. If you need to draft or respond to a legal notice in Panchkula or Kalka, seek immediate professional counsel.',
      },
      hi: {
        introduction:
          'कानूनी नोटिस एक औपचारिक लिखित चेतावनी होती है जिसमें विपक्षी को विधिक उल्लंघन सुधारने का अंतिम अवसर दिया जाता है। परक्राम्य लिखत अधिनियम (NI Act) की धारा 138 (चेक बाउंस) जैसे मामलों में निर्धारित समय-सीमा के भीतर नोटिस भेजना मुकदमा दर्ज करने की अनिवार्य शर्त है।',
        sections: [
          {
            heading: '1. धारा 138 एन.आई. एक्ट (चेक बाउंस नोटिस नियम)',
            text: 'जब बैंक द्वारा "खाते में पर्याप्त राशि न होना" (Funds Insufficient) के कारण चेक लौटा दिया जाता है:',
            bullets: [
              'बैंक मेमो प्राप्त होने की तारीख से 30 दिनों के भीतर कानूनी नोटिस भेजना अनिवार्य है।',
              'चेक जारीकर्ता को नोटिस मिलने के बाद राशि चुकाने हेतु 15 दिनों का समय दिया जाता है।',
              'यदि 15 दिनों में भुगतान नहीं होता, तो अगले 30 दिनों में न्यायालय में परिवाद दाखिल करना होता है।',
            ],
          },
          {
            heading: '2. बकाया राशि वसूली एवं संविदा उल्लंघन नोटिस',
            text: 'दीवानी मामलों में मांग नोटिस भेजने से कानूनी ब्याज की गणना शुरू होती है और मुकदमे के खर्चे का दावा मजबूत होता है।',
          },
          {
            heading: '3. यदि आपको कानूनी नोटिस प्राप्त हो तो क्या करें?',
            text: 'कानूनी नोटिस की कभी अनदेखी न करें। उत्तर न देने को अदालत तथ्यों की मौन स्वीकृति मान सकती है। वकील के माध्यम से समय पर सटीक विधिक उत्तर (Reply) भेजना आपके बचाव की पहली मजबूत दीवार है।',
          },
        ],
        conclusion:
          'विधिक अस्वीकरण: यह लेख केवल सामान्य जागरूकता हेतु है। चेक बाउंस एवं वसूली मामलों में समय-सीमा अत्यंत कठोर होती है। नोटिस भेजने या उत्तर देने हेतु तत्काल विधिक परामर्श प्राप्त करें।',
      },
      pa: {
        introduction:
          'ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਇੱਕ ਰਸਮੀ ਚਿਤਾਵਨੀ ਹੁੰਦੀ ਹੈ ਜੋ ਦੂਜੀ ਧਿਰ ਨੂੰ ਅਦਾਲਤ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੀ ਗ਼ਲਤੀ ਸੁਧਾਰਨ ਦਾ ਮੌਕਾ ਦਿੰਦੀ ਹੈ। ਖ਼ਾਸ ਕਰਕੇ ਚੈੱਕ ਬਾਊਂਸ (ਧਾਰਾ 138) ਦੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਸਮੇਂ ਸਿਰ ਨੋਟਿਸ ਭੇਜਣਾ ਅਦਾਲਤੀ ਕੇਸ ਦੀ ਪਹਿਲੀ ਸ਼ਰਤ ਹੈ।',
        sections: [
          {
            heading: '1. ਧਾਰਾ 138 ਅਧੀਨ ਚੈੱਕ ਬਾਊਂਸ ਨੋਟਿਸ',
            text: 'ਜਦੋਂ ਬੈਂਕ ਵੱਲੋਂ ਖਾਤੇ ਵਿੱਚ ਪੈਸੇ ਨਾ ਹੋਣ ਕਾਰਨ ਚੈੱਕ ਵਾਪਸ ਕਰ ਦਿੱਤਾ ਜਾਵੇ:',
            bullets: [
              'ਬੈਂਕ ਮੈਮੋ ਮਿਲਣ ਦੇ 30 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਭੇਜਣਾ ਲਾਜ਼ਮੀ ਹੁੰਦਾ ਹੈ।',
              'ਦੂਜੀ ਧਿਰ ਨੂੰ ਪੈਸੇ ਦੇਣ ਲਈ 15 ਦਿਨਾਂ ਦਾ ਸਮਾਂ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
              'ਜੇਕਰ 15 ਦਿਨਾਂ ਵਿੱਚ ਪੈਸੇ ਨਾ ਮਿਲਣ ਤਾਂ ਅਗਲੇ 30 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਅਦਾਲਤ ਵਿੱਚ ਕੇਸ ਦਾਇਰ ਕਰਨਾ ਪੈਂਦਾ ਹੈ।',
            ],
          },
          {
            heading: '2. ਪੈਸੇ ਦੀ ਵਸੂਲੀ ਅਤੇ ਸਮਝੌਤਾ ਉਲੰਘਣਾ',
            text: 'ਦੀਵਾਨੀ ਕੇਸਾਂ ਵਿੱਚ ਨੋਟਿਸ ਭੇਜਣ ਨਾਲ ਕਾਨੂੰਨੀ ਵਿਆਜ ਦਾ ਦਾਅਵਾ ਪੱਕਾ ਹੁੰਦਾ ਹੈ ਅਤੇ ਅਦਾਲਤ ਵਿੱਚ ਤੁਹਾਡਾ ਪੱਖ ਮਜ਼ਬੂਤ ਹੁੰਦਾ ਹੈ।',
          },
          {
            heading: '3. ਜੇਕਰ ਤੁਹਾਨੂੰ ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਮਿਲੇ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
            text: 'ਨੋਟਿਸ ਨੂੰ ਕਦੇ ਅਣਗੌਲਿਆ ਨਾ ਕਰੋ। ਜਵਾਬ ਨਾ ਦੇਣ ਨਾਲ ਅਦਾਲਤ ਸਮਝ ਸਕਦੀ ਹੈ ਕਿ ਦੋਸ਼ ਸੱਚੇ ਹਨ। ਵਕੀਲ ਰਾਹੀਂ ਸਮੇਂ ਸਿਰ ਢੁਕਵਾਂ ਜਵਾਬ ਭੇਜਣਾ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ।',
          },
        ],
        conclusion:
          'ਕਾਨੂੰਨੀ ਸੂਚਨਾ: ਇਹ ਲੇਖ ਸਿਰਫ਼ ਆਮ ਸਿੱਖਿਆ ਲਈ ਹੈ। ਚੈੱਕ ਬਾਊਂਸ ਦੀਆਂ ਮਿਤੀਆਂ ਬਹੁਤ ਸਖ਼ਤ ਹੁੰਦੀਆਂ ਹਨ। ਨੋਟਿਸ ਭੇਜਣ ਜਾਂ ਜਵਾਬ ਦੇਣ ਲਈ ਤੁਰੰਤ ਵਕੀਲ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
      },
    },
  },
];
