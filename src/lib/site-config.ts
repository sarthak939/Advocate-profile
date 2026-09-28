/**
 * MASTER CLIENT CONFIGURATION: Adv. Upnishad Sharma
 * All client facts, contacts, courts, bar registration, fee schedules,
 * and practice areas are strictly centralized here.
 * DO NOT hard-code client details anywhere else in the project.
 */

export interface CourtDetail {
  id: string;
  name: {
    en: string;
    hi: string;
    pa: string;
  };
  shortName: {
    en: string;
    hi: string;
    pa: string;
  };
  jurisdiction: {
    en: string;
    hi: string;
    pa: string;
  };
  location: {
    en: string;
    hi: string;
    pa: string;
  };
  role: {
    en: string;
    hi: string;
    pa: string;
  };
}

export interface PracticeAreaItem {
  id: string;
  slug: string;
  title: {
    en: string;
    hi: string;
    pa: string;
  };
  shortTitle: {
    en: string;
    hi: string;
    pa: string;
  };
  categoryGroup: 'criminal' | 'civil' | 'family' | 'constitutional' | 'accident_revenue';
  summary: {
    en: string;
    hi: string;
    pa: string;
  };
  mattersHandled: {
    en: string[];
    hi: string[];
    pa: string[];
  };
  icon: string;
}

export const SITE_CONFIG = {
  name: {
    en: 'Adv. Upnishad Sharma',
    hi: 'अधिवक्ता उपनिषद शर्मा',
    pa: 'ਐਡਵੋਕੇਟ ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ',
  },
  shortName: {
    en: 'Upnishad Sharma',
    hi: 'उपनिषद शर्मा',
    pa: 'ਉਪਨਿਸ਼ਦ ਸ਼ਰਮਾ',
  },
  title: {
    en: 'Advocate | Punjab & Haryana High Court, Chandigarh',
    hi: 'अधिवक्ता | पंजाब एवं हरियाणा उच्च न्यायालय, चंडीगढ़',
    pa: 'ਐਡਵੋਕੇਟ | ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ, ਚੰਡੀਗੜ੍ਹ',
  },
  enrolment: {
    barCouncil: {
      en: 'Bar Council of Punjab & Haryana',
      hi: 'बार काउंसिल ऑफ पंजाब एंड हरियाणा',
      pa: 'ਬਾਰ ਕੌਂਸਲ ਆਫ਼ ਪੰਜਾਬ ਐਂਡ ਹਰਿਆਣਾ',
    },
    enrolmentNumber: 'PH/13540/2025',
    yearOfEnrolment: 2025,
  },
  contacts: {
    phone: '+91 70560 99998',
    phoneRaw: '+917056099998',
    landline: '01733-297414',
    landlineRaw: '01733297414',
    email: 'S.upnishad99@gmail.com',
    whatsapp: '+917056099998',
    linkedin: 'https://www.linkedin.com/in/upnishad-sharma-481811227',
    instagram: 'https://www.instagram.com/upnishadsharmaaa',
  },
  chambers: {
    address: {
      en: 'Shop No. 77, Near M.C. Office, Gurbax Colony, Kalka, District Panchkula, Haryana – 133302',
      hi: 'शॉप नं. 77, एम.सी. ऑफिस के पास, गुरबख्श कॉलोनी, कालका, जिला पंचकूला, हरियाणा – 133302',
      pa: 'ਦੁਕਾਨ ਨੰ: 77, ਐਮ.ਸੀ. ਦਫ਼ਤਰ ਦੇ ਨੇੜੇ, ਗੁਰਬਖ਼ਸ਼ ਕਲੋਨੀ, ਕਾਲਕਾ, ਜ਼ਿਲ੍ਹਾ ਪੰਚਕੂਲਾ, ਹਰਿਆਣਾ – 133302',
    },
    shortAddress: {
      en: 'Shop No. 77, Near M.C. Office, Kalka, Distt. Panchkula, Haryana',
      hi: 'शॉप नं. 77, एम.सी. ऑफिस के पास, कालका, जिला पंचकूला, हरियाणा',
      pa: 'ਦੁਕਾਨ ਨੰ: 77, ਐਮ.ਸੀ. ਦਫ਼ਤਰ ਨੇੜੇ, ਕਾਲਕਾ, ਜ਼ਿਲ੍ਹਾ ਪੰਚਕੂਲਾ, ਹਰਿਆਣਾ',
    },
    courtSeat: {
      en: 'Seat No. 15, Sub-Divisional Judicial Court, Kalka',
      hi: 'सीट नं. 15, उप-मंडलीय न्यायिक न्यायालय, कालका',
      pa: 'ਸੀਟ ਨੰ: 15, ਉਪ-ਮੰਡਲ ਜੁਡੀਸ਼ੀਅਲ ਅਦਾਲਤ, ਕਾਲਕਾ',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/rfahgxwwHyqGizZA9',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Shop+no.+77%2C+Advocate+Upnishad+Sharma%2C+near+mc+office%2C+Gurbax+Colony%2C+Kalka%2C+Haryana+133302&t=&z=16&ie=UTF8&iwloc=&output=embed',
    // [FILL: office hours]
    officeHours: {
      en: 'Monday to Saturday: 9:00 AM – 7:00 PM (Prior Appointment Recommended)',
      hi: 'सोमवार से शनिवार: प्रातः 9:00 बजे से सायं 7:00 बजे तक (पूर्व नियुक्ति अनुशंसित)',
      pa: 'ਸੋਮਵਾਰ ਤੋਂ ਸ਼ਨੀਵਾਰ: ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 7:00 ਵਜੇ ਤੱਕ (ਪਹਿਲਾਂ ਸਮਾਂ ਲੈਣਾ ਜ਼ਰੂਰੀ)',
    },
  },
  // [FILL: domain name]
  domain: 'https://www.advupnishadsharma.com',
  // [FILL: logo/monogram]
  monogram: 'US',

  // VERIFIED METRICS ONLY (Per Master Brief: NEVER show years-in-practice, matters-handled, or win-rate)
  verifiedMetrics: [
    {
      value: 3,
      suffix: '',
      label: {
        en: 'Courts of Practice',
        hi: 'न्यायालय अभ्यास',
        pa: 'ਅਭਿਆਸ ਅਦਾਲਤਾਂ',
      },
      sublabel: {
        en: 'High Court, District & Sub-Divisional',
        hi: 'उच्च न्यायालय, जिला व उप-मंडलीय',
        pa: 'ਹਾਈ ਕੋਰਟ, ਜ਼ਿਲ੍ਹਾ ਤੇ ਉਪ-ਮੰਡਲ',
      },
    },
    {
      value: 10,
      suffix: '',
      label: {
        en: 'Practice Areas',
        hi: 'प्रमुख अभ्यास क्षेत्र',
        pa: 'ਪ੍ਰਮੁੱਖ ਅਭਿਆਸ ਖੇਤਰ',
      },
      sublabel: {
        en: 'Civil, Criminal, Writs & Corporate',
        hi: 'फौजदारी, दीवानी, रिट याचिकाएं',
        pa: 'ਫੌਜਦਾਰੀ, ਦੀਵਾਨੀ ਤੇ ਰਿੱਟਾਂ',
      },
    },
    {
      value: 2025,
      suffix: '',
      label: {
        en: 'Enrolled Year',
        hi: 'पंजीकरण वर्ष',
        pa: 'ਨਾਮਜ਼ਦਗੀ ਸਾਲ',
      },
      sublabel: {
        en: 'Bar Council of Punjab & Haryana',
        hi: 'बार काउंसिल ऑफ पंजाब एंड हरियाणा',
        pa: 'ਬਾਰ ਕੌਂਸਲ ਆਫ਼ ਪੰਜਾਬ ਐਂਡ ਹਰਿਆਣਾ',
      },
    },
    {
      value: 3,
      suffix: '',
      label: {
        en: 'Languages',
        hi: 'भाषा समर्थन',
        pa: 'ਭਾਸ਼ਾ ਸਹਾਇਤਾ',
      },
      sublabel: {
        en: 'English, Hindi, Punjabi',
        hi: 'अंग्रेज़ी, हिन्दी, पंजाबी',
        pa: 'ਅੰਗਰੇਜ਼ੀ, ਹਿੰਦੀ, ਪੰਜਾਬੀ',
      },
    },
  ],

  // 3 COURTS OF PRACTICE
  courts: [
    {
      id: 'high-court',
      name: {
        en: 'Punjab & Haryana High Court',
        hi: 'पंजाब एवं हरियाणा उच्च न्यायालय',
        pa: 'ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ',
      },
      shortName: {
        en: 'P&H High Court, Chandigarh',
        hi: 'पंजाब एवं हरियाणा हाईकोर्ट, चंडीगढ़',
        pa: 'ਪੀ&ਐੱਚ ਹਾਈ ਕੋਰਟ, ਚੰਡੀਗੜ੍ਹ',
      },
      jurisdiction: {
        en: 'State of Punjab, Haryana & UT Chandigarh',
        hi: 'पंजाब, हरियाणा एवं यू.टी. चंडीगढ़',
        pa: 'ਪੰਜਾਬ, ਹਰਿਆਣਾ ਅਤੇ ਯੂ.ਟੀ. ਚੰਡੀਗੜ੍ਹ',
      },
      location: {
        en: 'Sector 1, Capitol Complex, Chandigarh',
        hi: 'सेक्टर 1, कैपिटल कॉम्प्लेक्स, चंडीगढ़',
        pa: 'ਸੈਕਟਰ 1, ਕੈਪੀਟਲ ਕੰਪਲੈਕਸ, ਚੰਡੀਗੜ੍ਹ',
      },
      role: {
        en: 'Constitutional writ petitions, criminal appeals, anticipatory bail, revisions, service matters, and appellate civil jurisdiction.',
        hi: 'संवैधानिक रिट याचिकाएं, आपराधिक अपीलें, अग्रिम ज़मानत, रिवीज़न, सर्विस मामले एवं अपीलीय दीवानी अधिकार क्षेत्र।',
        pa: 'ਸੰਵਿਧਾਨਕ ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ, ਫੌਜਦਾਰੀ ਅਪੀਲਾਂ, ਅਗਾਊਂ ਜ਼ਮਾਨਤ, ਨਜ਼ਰਸਾਨੀ, ਸਰਵਿਸ ਮਾਮਲੇ ਅਤੇ ਅਪੀਲੀ ਦੀਵਾਨੀ ਅਧਿਕਾਰ ਖੇਤਰ।',
      },
    },
    {
      id: 'district-panchkula',
      name: {
        en: 'District & Sessions Court, Panchkula',
        hi: 'जिला एवं सत्र न्यायालय, पंचकूला',
        pa: 'ਜ਼ਿਲ੍ਹਾ ਅਤੇ ਸੈਸ਼ਨ ਅਦਾਲਤ, ਪੰਚਕੂਲਾ',
      },
      shortName: {
        en: 'District Court, Panchkula',
        hi: 'जिला न्यायालय, पंचकूला',
        pa: 'ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ, ਪੰਚਕੂਲਾ',
      },
      jurisdiction: {
        en: 'Panchkula District, Haryana',
        hi: 'पंचकूला जिला, हरियाणा',
        pa: 'ਪੰਚਕੂਲਾ ਜ਼ਿਲ੍ਹਾ, ਹਰਿਆਣਾ',
      },
      location: {
        en: 'Sector 1, Panchkula, Haryana',
        hi: 'सेक्टर 1, पंचकूला, हरियाणा',
        pa: 'ਸੈਕਟਰ 1, ਪੰਚਕੂਲਾ, ਹਰਿਆਣਾ',
      },
      role: {
        en: 'Sessions trials, regular bail applications, civil suits, matrimonial and family disputes, MACT claims, and property appeals.',
        hi: 'सत्र विचारण, नियमित ज़मानत याचिकाएं, दीवानी वाद, पारिवारिक एवं वैवाहिक विवाद, मोटर दुर्घटना दावे एवं संपत्ति अपीलें।',
        pa: 'ਸੈਸ਼ਨ ਮੁਕੱਦਮੇ, ਨਿਯਮਤ ਜ਼ਮਾਨਤ ਅਰਜ਼ੀਆਂ, ਦੀਵਾਨੀ ਦਾਅਵੇ, ਪਰਿਵਾਰਕ ਤੇ ਵਿਆਹੁਤਾ ਝਗੜੇ, ਐੱਮ.ਏ.ਸੀ.ਟੀ. ਦਾਅਵੇ ਅਤੇ ਜਾਇਦਾਦ ਅਪੀਲਾਂ।',
      },
    },
    {
      id: 'kalka-court',
      name: {
        en: 'Sub-Divisional Judicial Court, Kalka',
        hi: 'उप-मंडलीय न्यायिक न्यायालय, कालका',
        pa: 'ਉਪ-ਮੰਡਲ ਜੁਡੀਸ਼ੀਅਲ ਅਦਾਲਤ, ਕਾਲਕਾ',
      },
      shortName: {
        en: 'Sub-Divisional Court, Kalka',
        hi: 'कालका न्यायालय (सीट नं. 15)',
        pa: 'ਕਾਲਕਾ ਅਦਾਲਤ (ਸੀਟ ਨੰ: 15)',
      },
      jurisdiction: {
        en: 'Sub-Division Kalka & Pinjore region',
        hi: 'उप-मंडल कालका एवं पिंजौर क्षेत्र',
        pa: 'ਉਪ-ਮੰਡਲ ਕਾਲਕਾ ਅਤੇ ਪਿੰਜੌਰ ਖੇਤਰ',
      },
      location: {
        en: 'Court Complex, Kalka, District Panchkula',
        hi: 'कोर्ट कॉम्प्लेक्स, कालका, जिला पंचकूला',
        pa: 'ਕੋਰਟ ਕੰਪਲੈਕਸ, ਕਾਲਕਾ, ਜ਼ਿਲ੍ਹਾ ਪੰਚਕੂਲਾ',
      },
      role: {
        en: 'Local civil suits, initial criminal proceedings, remand and magistrate bail, revenue cases, and local documentation.',
        hi: 'स्थानीय दीवानी वाद, प्रारंभिक आपराधिक कार्यवाही, रिमांड एवं मजिस्ट्रेट ज़मानत, राजस्व मामले एवं स्थानीय दस्तावेज़ीकरण।',
        pa: 'ਸਥਾਨਕ ਦੀਵਾਨੀ ਮੁਕੱਦਮੇ, ਮੁੱਢਲੀ ਫੌਜਦਾਰੀ ਕਾਰਵਾਈ, ਰਿਮਾਂਡ ਅਤੇ ਮੈਜਿਸਟ੍ਰੇਟ ਜ਼ਮਾਨਤ, ਮਾਲੀਆ ਮਾਮਲੇ ਅਤੇ ਸਥਾਨਕ ਦਸਤਾਵੇਜ਼ੀਕਰਨ।',
      },
    },
  ],

  // 10 PRACTICE AREAS
  practiceAreas: [
    {
      id: 'criminal-bail',
      slug: 'criminal-defence-bail',
      categoryGroup: 'criminal',
      icon: 'Shield',
      title: {
        en: 'Criminal Defence & Bail Matters',
        hi: 'आपराधिक बचाव एवं ज़मानत मामले',
        pa: 'ਫੌਜਦਾਰੀ ਬਚਾਅ ਅਤੇ ਜ਼ਮਾਨਤ ਮਾਮਲੇ',
      },
      shortTitle: {
        en: 'Criminal & Bail',
        hi: 'आपराधिक व ज़मानत',
        pa: 'ਫੌਜਦਾਰੀ ਤੇ ਜ਼ਮਾਨਤ',
      },
      summary: {
        en: 'Legal representation for regular and anticipatory bail applications, FIR quashing, magistrate inquiries, and criminal defence representation.',
        hi: 'नियमित एवं अग्रिम ज़मानत, एफ.आई.आर निरस्तीकरण, मजिस्ट्रेट जांच एवं सत्र न्यायालयों में आपराधिक मुकदमों में विधिक प्रतिनिधित्व।',
        pa: 'ਨਿਯਮਤ ਅਤੇ ਅਗਾਊਂ ਜ਼ਮਾਨਤ, ਐੱਫ.ਆਈ.ਆਰ ਰੱਦ ਕਰਵਾਉਣ, ਮੈਜਿਸਟ੍ਰੇਟ ਪੜਤਾਲ ਅਤੇ ਫੌਜਦਾਰੀ ਕੇਸਾਂ ਵਿੱਚ ਕਾਨੂੰਨੀ ਨੁਮਾਇੰਦਗੀ।',
      },
      mattersHandled: {
        en: [
          'Anticipatory Bail (Sessions & High Court)',
          'Regular Bail & Interim Relief',
          'FIR Quashing & Police Inquiries',
          'Criminal Complaints & Trial Defence',
          'Remand & Police Custody Representation',
        ],
        hi: [
          'अग्रिम ज़मानत (सत्र एवं उच्च न्यायालय)',
          'नियमित ज़मानत एवं अंतरिम राहत',
          'एफ.आई.आर निरस्तीकरण एवं पुलिस जांच',
          'आपराधिक शिकायतें एवं विचारण बचाव',
          'रिमांड एवं हिरासत में विधिक सहायता',
        ],
        pa: [
          'ਅਗਾਊਂ ਜ਼ਮਾਨਤ (ਸੈਸ਼ਨ ਅਤੇ ਹਾਈ ਕੋਰਟ)',
          'ਨਿਯਮਤ ਜ਼ਮਾਨਤ ਅਤੇ ਅੰਤਰਿਮ ਰਾਹਤ',
          'ਐੱਫ.ਆਈ.ਆਰ ਰੱਦ ਕਰਵਾਉਣਾ ਅਤੇ ਪੁਲਿਸ ਪੜਤਾਲ',
          'ਫੌਜਦਾਰੀ ਸ਼ਿਕਾਇਤਾਂ ਅਤੇ ਟ੍ਰਾਇਲ ਬਚਾਅ',
          'ਰਿਮਾਂਡ ਅਤੇ ਪੁਲਿਸ ਹਿਰਾਸਤ ਸਹਾਇਤਾ',
        ],
      },
    },
    {
      id: 'civil-litigation',
      slug: 'civil-litigation',
      categoryGroup: 'civil',
      icon: 'Scale',
      title: {
        en: 'Civil Litigation',
        hi: 'दीवानी मुकदमेबाजी (सिविल लिटिगेशन)',
        pa: 'ਦੀਵਾਨੀ ਮੁਕੱਦਮੇਬਾਜ਼ੀ (ਸਿਵਲ ਕੇਸ)',
      },
      shortTitle: {
        en: 'Civil Litigation',
        hi: 'दीवानी मुकदमेबाजी',
        pa: 'ਦੀਵਾਨੀ ਮੁਕੱਦਮੇਬਾਜ਼ੀ',
      },
      summary: {
        en: 'Comprehensive representation in recovery suits, permanent injunctions, declaration of title, contract disputes, and civil appeals.',
        hi: 'वसूली वाद, स्थायी निषेधाज्ञा (Injunction), स्वत्व घोषणा, संविदा विवाद एवं दीवानी अपीलों में प्रभावी पैरवी।',
        pa: 'ਵਸੂਲੀ ਮੁਕੱਦਮੇ, ਸਟੇਅ ਆਰਡਰ (ਇਨਜੰਕਸ਼ਨ), ਹੱਕ ਦੀ ਘੋਸ਼ਣਾ, ਸਮਝੌਤਾ ਵਿਵਾਦ ਅਤੇ ਦੀਵਾਨੀ ਅਪੀਲਾਂ ਵਿੱਚ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ।',
      },
      mattersHandled: {
        en: [
          'Suits for Permanent & Mandatory Injunction',
          'Money Recovery & Summary Suits',
          'Specific Performance of Contracts',
          'Declaration & Cancellation of Deeds',
          'First & Second Civil Appeals',
        ],
        hi: [
          'स्थायी एवं अनिवार्य निषेधाज्ञा वाद',
          'धन वसूली वाद एवं सारांश वाद',
          'संविदा का विशिष्ट अनुपालन',
          'घोषणा एवं दस्तावेजों का निरस्तीकरण',
          'प्रथम एवं द्वितीय दीवानी अपीलें',
        ],
        pa: [
          'ਪੱਕੀ ਅਤੇ ਲਾਜ਼ਮੀ ਮਨਾਹੀ ਦੇ ਦਾਅਵੇ',
          'ਪੈਸੇ ਦੀ ਵਸੂਲੀ ਦੇ ਮੁਕੱਦਮੇ',
          'ਇਕਰਾਰਨਾਮੇ ਦੀ ਪਾਲਣਾ ਦੇ ਕੇਸ',
          'ਦਸਤਾਵੇਜ਼ ਰੱਦ ਕਰਵਾਉਣ ਦੇ ਦਾਅਵੇ',
          'ਪਹਿਲੀ ਅਤੇ ਦੂਜੀ ਦੀਵਾਨੀ ਅਪੀਲ',
        ],
      },
    },
    {
      id: 'property-real-estate',
      slug: 'property-real-estate',
      categoryGroup: 'civil',
      icon: 'Building2',
      title: {
        en: 'Property & Real Estate',
        hi: 'संपत्ति एवं अचल संपत्ति विवाद',
        pa: 'ਜਾਇਦਾਦ ਅਤੇ ਰੀਅਲ ਅਸਟੇਟ ਮਾਮਲੇ',
      },
      shortTitle: {
        en: 'Property & Real Estate',
        hi: 'संपत्ति विवाद',
        pa: 'ਜਾਇਦਾਦ ਦੇ ਝਗੜੇ',
      },
      summary: {
        en: 'Title search, partition suits, boundary disputes, tenant-landlord conflicts, sale agreement vetting, and registry documentation in Kalka and Panchkula.',
        hi: 'विभाजन वाद (बंटवारा), स्वत्व सत्यापन, सीमा विवाद, किराया विवाद, विक्रय पत्र एवं कालका-पंचकूला में रजिस्ट्री दस्तावेज़।',
        pa: 'ਵੰਡ ਦੇ ਮੁਕੱਦਮੇ, ਟਾਈਟਲ ਜਾਂਚ, ਹੱਦਬੰਦੀ ਦੇ ਝਗੜੇ, ਕਿਰਾਏਦਾਰ-ਮਾਲਕ ਵਿਵਾਦ, ਬਿਆਨਾ ਇਕਰਾਰਨਾਮਾ ਅਤੇ ਕਾਲਕਾ ਰਜਿਸਟਰੀ ਸਹਾਇਤਾ।',
      },
      mattersHandled: {
        en: [
          'Partition Suits & Possession Disputes',
          'Title Verification & Search Reports',
          'Landlord & Tenant Rent Petitions',
          'Sale Agreements & Conveyance Deeds',
          'Illegal Dispossession Actions',
        ],
        hi: [
          'बंटवारा वाद एवं कब्ज़ा विवाद',
          'टाइटल जांच एवं सर्च रिपोर्ट',
          'मकान मालिक व किराएदार संबंधी याचिकाएं',
          'बयाना, इकरारनामा एवं विक्रय विलेख',
          'अवैध बेदखली के विरुद्ध कानूनी कार्यवाही',
        ],
        pa: [
          'ਵੰਡ ਦੇ ਮੁਕੱਦਮੇ ਅਤੇ ਕਬਜ਼ੇ ਦੇ ਝਗੜੇ',
          'ਟਾਈਟਲ ਪੜਤਾਲ ਅਤੇ ਸਰਚ ਰਿਪੋਰਟਾਂ',
          'ਕਿਰਾਏਦਾਰੀ ਝਗੜੇ ਅਤੇ ਬੇਦਖਲੀ ਪਟੀਸ਼ਨਾਂ',
          'ਇਕਰਾਰਨਾਮਾ ਅਤੇ ਵਿਕਰੀ ਦਸਤਾਵੇਜ਼',
          'ਗੈਰ-ਕਾਨੂੰਨੀ ਬੇਦਖ਼ਲੀ ਵਿਰੁੱਧ ਕਾਰਵਾਈ',
        ],
      },
    },
    {
      id: 'family-matrimonial',
      slug: 'family-matrimonial',
      categoryGroup: 'family',
      icon: 'Users',
      title: {
        en: 'Family & Matrimonial Matters',
        hi: 'पारिवारिक एवं वैवाहिक विवाद',
        pa: 'ਪਰਿਵਾਰਕ ਅਤੇ ਵਿਆਹੁਤਾ ਮਾਮਲੇ',
      },
      shortTitle: {
        en: 'Family & Matrimonial',
        hi: 'पारिवारिक मामले',
        pa: 'ਪਰਿਵਾਰਕ ਮਾਮਲੇ',
      },
      summary: {
        en: 'Compassionate handling of divorce proceedings, mutual consent settlements, maintenance petitions, child custody, and domestic violence remedies.',
        hi: 'पारस्परिक सहमति से तलाक, भरण-पोषण (Maintenance), बाल अभिरक्षा (Child Custody) एवं घरेलू हिंसा से संरक्षण की विधिक कार्यवाही।',
        pa: 'ਆਪਸੀ ਸਹਿਮਤੀ ਨਾਲ ਤਲਾਕ, ਗੁਜ਼ਾਰਾ ਭੱਤਾ (ਖ਼ਰਚਾ), ਬੱਚੇ ਦੀ ਹਿਰਾਸਤ (ਕਸਟਡੀ) ਅਤੇ ਘਰੇਲੂ ਹਿੰਸਾ ਕੇਸਾਂ ਵਿੱਚ ਸਹਾਇਤਾ।',
      },
      mattersHandled: {
        en: [
          'Mutual Consent & Contested Divorce',
          'Maintenance under Section 125 CrPC / BNSS',
          'Domestic Violence Act Petitions',
          'Child Custody & Visitation Rights',
          'Restitution of Conjugal Rights',
        ],
        hi: [
          'आपसी सहमति व विवादित तलाक',
          'धारा 125 भरण-पोषण आवेदन',
          'घरेलू हिंसा निवारण अधिनियम मामले',
          'संतान अभिरक्षा एवं मिलने का अधिकार',
          'दांपत्य अधिकारों की पुनर्स्थापना',
        ],
        pa: [
          'ਆਪਸੀ ਰਜ਼ਾਮੰਦੀ ਤੇ ਹੋਰ ਤਲਾਕ ਪਟੀਸ਼ਨਾਂ',
          'ਧਾਰਾ 125 ਅਧੀਨ ਖ਼ਰਚੇ ਦੀਆਂ ਅਰਜ਼ੀਆਂ',
          'ਘਰੇਲੂ ਹਿੰਸਾ ਰੋਕਥਾਮ ਕਾਨੂੰਨ ਅਧੀਨ ਕੇਸ',
          'ਬੱਚੇ ਦੀ ਕਸਟਡੀ ਅਤੇ ਮਿਲਣ ਦੇ ਹੱਕ',
          'ਵਿਆਹੁਤਾ ਸਬੰਧਾਂ ਦੀ ਬਹਾਲੀ',
        ],
      },
    },
    {
      id: 'writs-constitutional',
      slug: 'writ-petitions-constitutional',
      categoryGroup: 'constitutional',
      icon: 'ScrollText',
      title: {
        en: 'Writ Petitions & Constitutional Matters',
        hi: 'रिट याचिकाएं एवं संवैधानिक मामले',
        pa: 'ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ ਅਤੇ ਸੰਵਿਧਾਨਕ ਮਾਮਲੇ',
      },
      shortTitle: {
        en: 'Writs & Constitutional',
        hi: 'रिट याचिकाएं',
        pa: 'ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ',
      },
      summary: {
        en: 'Invoking High Court writ jurisdiction under Article 226/227 for mandamus, certiorari, habeas corpus, and protection of fundamental rights.',
        hi: 'अनुच्छेद 226/227 के अंतर्गत परमादेश (Mandamus), उत्प्रेषण (Certiorari) एवं मौलिक अधिकारों के संरक्षण हेतु उच्च न्यायालय में याचिकाएं।',
        pa: 'ਧਾਰਾ 226/227 ਅਧੀਨ ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਮੁੱਢਲੇ ਅਧਿਕਾਰਾਂ ਦੀ ਰਾਖੀ ਅਤੇ ਸਰਕਾਰੀ ਹੁਕਮਾਂ ਵਿਰੁੱਧ ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ।',
      },
      mattersHandled: {
        en: [
          'Civil Writ Petitions (CWP) in High Court',
          'Life & Liberty Protection Petitions',
          'Quashing Arbitrary Administrative Orders',
          'Enforcement of Statutory Duties',
          'Supervisory Jurisdiction under Art. 227',
        ],
        hi: [
          'उच्च न्यायालय में सिविल रिट याचिकाएं (CWP)',
          'जीवन एवं स्वतंत्रता संरक्षण याचिकाएं',
          'मनमाने प्रशासनिक आदेशों का निरस्तीकरण',
          'वैधानिक कर्तव्यों का प्रवर्तन (Mandamus)',
          'अनुच्छेद 227 के अंतर्गत पर्यवेक्षी याचिकाएं',
        ],
        pa: [
          'ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਸਿਵਲ ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ (CWP)',
          'ਜਾਨ ਤੇ ਮਾਲ ਦੀ ਰਾਖੀ ਲਈ ਪ੍ਰੋਟੈਕਸ਼ਨ ਪਟੀਸ਼ਨਾਂ',
          'ਗੈਰ-ਕਾਨੂੰਨੀ ਸਰਕਾਰੀ ਹੁਕਮ ਰੱਦ ਕਰਵਾਉਣੇ',
          'ਸੰਵਿਧਾਨਕ ਹੱਕਾਂ ਦੀ ਬਹਾਲੀ',
          'ਧਾਰਾ 227 ਅਧੀਨ ਨਿਗਰਾਨੀ ਪਟੀਸ਼ਨਾਂ',
        ],
      },
    },
    {
      id: 'service-matters',
      slug: 'service-matters',
      categoryGroup: 'constitutional',
      icon: 'Briefcase',
      title: {
        en: 'Service Matters',
        hi: 'सेवा एवं सरकारी कर्मचारी मामले',
        pa: 'ਸਰਵਿਸ ਅਤੇ ਮੁਲਾਜ਼ਮ ਮਾਮਲੇ',
      },
      shortTitle: {
        en: 'Service Matters',
        hi: 'सर्विस मामले',
        pa: 'ਸਰਵਿਸ ਮਾਮਲੇ',
      },
      summary: {
        en: 'Protecting rights of government employees, teachers, police personnel in promotion delays, wrongful suspension, seniority disputes, and pension claims.',
        hi: 'पदोन्नति में देरी, गलत निलंबन, वरिष्ठता विवाद, पेंशन एवं सेवा लाभों से वंचित सरकारी कर्मचारियों के अधिकारों की सुरक्षा।',
        pa: 'ਤਰੱਕੀ ਵਿੱਚ ਦੇਰੀ, ਗੈਰ-ਕਾਨੂੰਨੀ ਮੁਅੱਤਲੀ, ਸੀਨੀਆਰਤਾ ਦੇ ਝਗੜੇ, ਪੈਨਸ਼ਨ ਅਤੇ ਸੇਵਾਮੁਕਤੀ ਲਾਭਾਂ ਸੰਬੰਧੀ ਸਰਕਾਰੀ ਮੁਲਾਜ਼ਮਾਂ ਦੇ ਕੇਸ।',
      },
      mattersHandled: {
        en: [
          'Disciplinary Inquiries & Charge Sheets',
          'Wrongful Suspension & Reinstatement',
          'Pay Scale Anomalies & Pension Benefits',
          'Seniority Disputes & Regularization',
          'Promotion Supersession Challenges',
        ],
        hi: [
          'विभागीय जांच एवं आरोप पत्र (चार्जशीट)',
          'गलत निलंबन एवं सेवा बहाली',
          'वेतन विसंगति एवं पेंशनरी लाभ',
          'वरिष्ठता विवाद एवं पक्की नौकरी (नियमितीकरण)',
          'पदोन्नति में अनदेखी को चुनौती',
        ],
        pa: [
          'ਵਿਭਾਗੀ ਜਾਂਚ ਅਤੇ ਚਾਰਜਸ਼ੀਟ ਦਾ ਜਵਾਬ',
          'ਗਲਤ ਮੁਅੱਤਲੀ ਅਤੇ ਨੌਕਰੀ ਬਹਾਲੀ',
          'ਤਨਖਾਹ ਅੰਤਰ ਅਤੇ ਪੈਨਸ਼ਨ ਦੇ ਬਕਾਏ',
          'ਸੀਨੀਆਰਤਾ ਵਿਵਾਦ ਅਤੇ ਪੱਕੇ ਹੋਣ ਦੇ ਕੇਸ',
          'ਤਰੱਕੀ ਤੋਂ ਵਾਂਝੇ ਰੱਖਣ ਵਿਰੁੱਧ ਪਟੀਸ਼ਨਾਂ',
        ],
      },
    },
    {
      id: 'motor-accident-claims',
      slug: 'motor-accident-claims',
      categoryGroup: 'accident_revenue',
      icon: 'CarFront',
      title: {
        en: 'Motor Accident Claims (MACT)',
        hi: 'मोटर दुर्घटना दावा अधिकरण (MACT)',
        pa: 'ਮੋਟਰ ਦੁਰਘਟਨਾ ਮੁਆਵਜ਼ਾ ਦਾਅਵੇ (MACT)',
      },
      shortTitle: {
        en: 'Accident Claims (MACT)',
        hi: 'दुर्घटना दावे (MACT)',
        pa: 'ਹਾਦਸਾ ਮੁਆਵਜ਼ਾ (MACT)',
      },
      summary: {
        en: 'Legal representation for victims and families seeking just statutory compensation in road traffic accidents before MACT tribunals in Panchkula and Chandigarh.',
        hi: 'सड़क दुर्घटना पीड़ितों एवं उनके आश्रितों को उचित कानूनी मुआवजा दिलाने हेतु पंचकूला एवं चंडीगढ़ ट्रिब्यूनल में पैरवी।',
        pa: 'ਸੜਕ ਹਾਦਸੇ ਵਿੱਚ ਜ਼ਖਮੀ ਜਾਂ ਮ੍ਰਿਤਕਾਂ ਦੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਬਣਦਾ ਕਾਨੂੰਨੀ ਮੁਆਵਜ਼ਾ ਦਿਵਾਉਣ ਲਈ ਐੱਮ.ਏ.ਸੀ.ਟੀ. ਟ੍ਰਿਬਿਊਨਲ ਵਿੱਚ ਕੇਸ।',
      },
      mattersHandled: {
        en: [
          'Fatal Accident Compensation Claims',
          'Permanent Disability Compensation',
          'Insurance Company Dispute Resolution',
          'Medical Expense & Earnings Loss Recovery',
          'High Court Appeals for Compensation Enhancement',
        ],
        hi: [
          'घातक दुर्घटना मृत्यु मुआवजा दावे',
          'स्थायी दिव्यांगता क्षतिपूर्ति याचिका',
          'बीमा कंपनियों से विवाद निपटान',
          'चिकित्सा व्यय एवं आय हानि की भरपाई',
          'मुआवजा वृद्धि हेतु उच्च न्यायालय में अपील',
        ],
        pa: [
          'ਹਾਦਸੇ ਵਿੱਚ ਮੌਤ ਦੇ ਮੁਆਵਜ਼ੇ ਦੇ ਦਾਅਵੇ',
          'ਅੰਗਹੀਣਤਾ ਹੋਣ ਤੇ ਮੁਆਵਜ਼ੇ ਦੀ ਮੰਗ',
          'ਬੀਮਾ ਕੰਪਨੀਆਂ ਵਿਰੁੱਧ ਦਾਅਵੇ',
          'ਇਲਾਜ ਦੇ ਖ਼ਰਚੇ ਅਤੇ ਆਮਦਨ ਨੁਕਸਾਨ ਦੀ ਭਰਪਾਈ',
          'ਮੁਆਵਜ਼ਾ ਵਧਾਉਣ ਲਈ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਅਪੀਲ',
        ],
      },
    },
    {
      id: 'revenue-tehsil',
      slug: 'revenue-tehsil-matters',
      categoryGroup: 'accident_revenue',
      icon: 'LandPlot',
      title: {
        en: 'Revenue & Tehsil Matters',
        hi: 'राजस्व एवं तहसील संबंधी मामले',
        pa: 'ਮਾਲੀਆ ਅਤੇ ਤਹਿਸੀਲ ਦੇ ਕੰਮ',
      },
      shortTitle: {
        en: 'Revenue & Tehsil',
        hi: 'राजस्व व तहसील',
        pa: 'ਮਾਲੀਆ ਤੇ ਤਹਿਸੀਲ',
      },
      summary: {
        en: 'Assistance before Kalka and Panchkula Tehsildar, SDM, and Collector courts for mutation (inteqal), demarcation (nishan-dehi), and revenue record corrections.',
        hi: 'कालका व पंचकूला में इंतकाल (Mutation), निशानदेही, जमाबंदी दुरुस्ती एवं उप-मंडल अधिकारी व कलेक्टर के समक्ष राजस्व पैरवी।',
        pa: 'ਕਾਲਕਾ ਤੇ ਪੰਚਕੂਲਾ ਤਹਿਸੀਲ ਵਿੱਚ ਇੰਤਕਾਲ, ਨਿਸ਼ਾਨਦੇਹੀ, ਜਮ੍ਹਾਂਬੰਦੀ ਦਰੁਸਤੀ ਅਤੇ ਐੱਸ.ਡੀ.ਐੱਮ/ਕਲੈਕਟਰ ਕੋਰਟ ਵਿੱਚ ਮਾਲੀਆ ਕੇਸ।',
      },
      mattersHandled: {
        en: [
          'Sanction of Mutation (Inteqal)',
          'Land Demarcation (Nishan-Dehi)',
          'Correction of Jamabandi & Revenue Records',
          'Appeals before Collector & Divisional Commissioner',
          'Tehsil Registry & Documentation Assistance',
        ],
        hi: [
          'इंतकाल (Mutation) दर्ज व स्वीकृत कराना',
          'भूमि निशानदेही आवेदन एवं प्रक्रिया',
          'जमाबंदी एवं राजस्व अभिलेखों में शुद्धि',
          'कलेक्टर एवं कमिश्नर के समक्ष अपील',
          'तहसील रजिस्ट्री एवं सत्यापन सहायता',
        ],
        pa: [
          'ਇੰਤਕਾਲ ਕਰਵਾਉਣਾ ਅਤੇ ਮਨਜ਼ੂਰ ਕਰਵਾਉਣਾ',
          'ਜ਼ਮੀਨ ਦੀ ਨਿਸ਼ਾਨਦੇਹੀ ਦੀ ਕਾਰਵਾਈ',
          'ਜਮ੍ਹਾਂਬੰਦੀ ਅਤੇ ਮਾਲੀਆ ਰਿਕਾਰਡ ਦੀ ਸੋਧ',
          'ਕਲੈਕਟਰ ਅਤੇ ਕਮਿਸ਼ਨਰ ਅੱਗੇ ਅਪੀਲਾਂ',
          'ਤਹਿਸੀਲ ਵਿੱਚ ਰਜਿਸਟਰੀ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਸਹਾਇਤਾ',
        ],
      },
    },
    {
      id: 'legal-notices',
      slug: 'legal-notices-documentation',
      categoryGroup: 'civil',
      icon: 'FileText',
      title: {
        en: 'Legal Notices & Documentation',
        hi: 'कानूनी नोटिस एवं प्रलेखन',
        pa: 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ',
      },
      shortTitle: {
        en: 'Legal Notices',
        hi: 'कानूनी नोटिस',
        pa: 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ',
      },
      summary: {
        en: 'Meticulous drafting and dispatch of statutory legal notices, replies to demand notices, cheque bounce notices (Sec 138 NI Act), and pre-litigation correspondence.',
        hi: 'चेक बाउंस नोटिस (धारा 138), संविदा उल्लंघन, मांग नोटिस का सटीक विधिक प्रारूपण एवं प्रभावी प्रत्युत्तर (Replies)।',
        pa: 'ਚੈੱਕ ਬਾਊਂਸ ਨੋਟਿਸ (ਧਾਰਾ 138), ਇਕਰਾਰਨਾਮੇ ਦੀ ਉਲੰਘਣਾ, ਮੰਗ ਨੋਟਿਸਾਂ ਦਾ ਕਾਨੂੰਨੀ ਖਰੜਾ ਅਤੇ ਢੁਕਵਾਂ ਜਵਾਬ।',
      },
      mattersHandled: {
        en: [
          'Cheque Bounce Notices under Section 138 NI Act',
          'Breach of Contract & Money Demand Notices',
          'Defamation & Malicious Action Notices',
          'Comprehensive Replies to Opposite Party Notices',
          'Pre-Litigation Settlement Correspondence',
        ],
        hi: [
          'एन.आई. एक्ट धारा 138 के तहत चेक बाउंस नोटिस',
          'संविदा भंग एवं बकाया राशि मांग नोटिस',
          'मानहानि एवं अनुचित कार्यवाही संबंधी नोटिस',
          'विपक्षी पक्ष के नोटिस का कानूनी उत्तर (Reply)',
          'मुकदमे से पूर्व समझौते का पत्राचार',
        ],
        pa: [
          'ਧਾਰਾ 138 ਅਧੀਨ ਚੈੱਕ ਬਾਊਂਸ ਕਾਨੂੰਨੀ ਨੋਟਿਸ',
          'ਇਕਰਾਰਨਾਮੇ ਦੀ ਉਲੰਘਣਾ ਅਤੇ ਬਕਾਇਆ ਪੈਸੇ ਦਾ ਨੋਟਿਸ',
          'ਬਦਨਾਮੀ (ਮਾਣਹਾਨੀ) ਵਿਰੁੱਧ ਨੋਟਿਸ',
          'ਵਿਰੋਧੀ ਧਿਰ ਦੇ ਨੋਟਿਸਾਂ ਦਾ ਕਾਨੂੰਨੀ ਜਵਾਬ',
          'ਅਦਾਲਤ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਸਮਝੌਤੇ ਦੀ ਗੱਲਬਾਤ',
        ],
      },
    },
    {
      id: 'drafting-opinions',
      slug: 'drafting-pleadings-legal-opinions',
      categoryGroup: 'civil',
      icon: 'FileSpreadsheet',
      title: {
        en: 'Drafting, Pleadings & Legal Opinions',
        hi: 'ड्राफ्टिंग, अभिवचन एवं विधिक राय',
        pa: 'ਖਰੜਾ ਤਿਆਰੀ (ਡਰਾਫਟਿੰਗ) ਅਤੇ ਕਾਨੂੰਨੀ ਰਾਇ',
      },
      shortTitle: {
        en: 'Drafting & Opinions',
        hi: 'ड्राफ्टिंग व विधिक राय',
        pa: 'ਡਰਾਫਟਿੰਗ ਤੇ ਰਾਇ',
      },
      summary: {
        en: 'Diligent drafting of plaints, written statements, agreements, affidavits, and rendered written legal opinions for individuals and businesses.',
        hi: 'दीवानी वाद-पत्र, लिखित कथन (जवाबदावा), शपथपत्र, अनुबंध एवं स्पष्ट लिखित कानूनी राय (Legal Opinion)।',
        pa: 'ਦਾਅਵਾ ਅਰਜ਼ੀਆਂ (ਪਲੇਂਟਸ), ਲਿਖਤੀ ਬਿਆਨ (ਜਵਾਬਦਾਵਾ), ਹਲਫ਼ਨਾਮੇ, ਇਕਰਾਰਨਾਮੇ ਅਤੇ ਲਿਖਤੀ ਕਾਨੂੰਨੀ ਰਾਇ।',
      },
      mattersHandled: {
        en: [
          'Plaints, Written Statements & Replications',
          'Special Power of Attorney (SPA) & General Deeds',
          'Affidavits, Indemnity Bonds & Undertakings',
          'Written Legal Opinions on Title & Risk',
          'Contract & Commercial Agreement Vetting',
        ],
        hi: [
          'वाद-पत्र (Plaint), लिखित कथन (WS) एवं प्रतिउत्तर',
          'मुख्तारनामा (SPA/GPA) एवं अनुबंध पत्र',
          'शपथपत्र (Affidavit) एवं क्षतिपूर्ति बंधपत्र',
          'स्वत्व एवं कानूनी जोखिम पर लिखित विधिक राय',
          'व्यावसायिक समझौतों की सूक्ष्म विधिक जांच',
        ],
        pa: [
          'ਦਾਅਵਾ ਅਰਜ਼ੀਆਂ, ਲਿਖਤੀ ਬਿਆਨ ਅਤੇ ਜਵਾਬ',
          'ਮੁਖ਼ਤਿਆਰਨਾਮਾ (ਪਾਵਰ ਆਫ਼ ਅਟਾਰਨੀ) ਤੇ ਡੀਡਾਂ',
          'ਹਲਫ਼ਨਾਮੇ ਅਤੇ ਅੰਡਰਟੇਕਿੰਗ ਦਸਤਾਵੇਜ਼',
          'ਜਾਇਦਾਦ ਦੇ ਟਾਈਟਲ ਤੇ ਕਾਨੂੰਨੀ ਰਾਇ',
          'ਇਕਰਾਰਨਾਮਿਆਂ ਦੀ ਕਾਨੂੰਨੀ ਪੜਤਾਲ',
        ],
      },
    },
  ],


  // EDUCATION
  education: {
    degree: 'LL.B (Bachelor of Laws)',
    university: {
      en: 'Punjabi University, Patiala',
      hi: 'पंजाबी विश्वविद्यालय, पटियाला',
      pa: 'ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ',
    },
    batch: '2022 – 2025',
  },

  // GEOGRAPHIC COVERAGE AREAS
  geographicCoverage: [
    {
      en: 'Kalka', hi: 'कालका', pa: 'ਕਾਲਕਾ',
      court: { en: 'Sub-Divisional Judicial Court', hi: 'उप-मंडलीय न्यायिक न्यायालय', pa: 'ਉਪ-ਮੰਡਲ ਜੁਡੀਸ਼ੀਅਲ ਅਦਾਲਤ' },
    },
    {
      en: 'Panchkula', hi: 'पंचकूला', pa: 'ਪੰਚਕੂਲਾ',
      court: { en: 'District & Sessions Court', hi: 'जिला एवं सत्र न्यायालय', pa: 'ਜ਼ਿਲ੍ਹਾ ਅਤੇ ਸੈਸ਼ਨ ਅਦਾਲਤ' },
    },
    {
      en: 'Chandigarh', hi: 'चंडीगढ़', pa: 'ਚੰਡੀਗੜ੍ਹ',
      court: { en: 'Punjab & Haryana High Court', hi: 'पंजाब एवं हरियाणा उच्च न्यायालय', pa: 'ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ' },
    },
    {
      en: 'Mohali', hi: 'मोहाली', pa: 'ਮੋਹਾਲੀ',
      court: { en: 'District & Sessions Court', hi: 'जिला एवं सत्र न्यायालय', pa: 'ਜ਼ਿਲ੍ਹਾ ਅਤੇ ਸੈਸ਼ਨ ਅਦਾਲਤ' },
    },
    {
      en: 'Solan', hi: 'सोलन', pa: 'ਸੋਲਨ',
      court: { en: 'District Court', hi: 'जिला न्यायालय', pa: 'ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ' },
    },
    {
      en: 'Shimla', hi: 'शिमला', pa: 'ਸ਼ਿਮਲਾ',
      court: { en: 'Himachal Pradesh High Court', hi: 'हिमाचल प्रदेश उच्च न्यायालय', pa: 'ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਹਾਈ ਕੋਰਟ' },
    },
  ],


  fees: {
    consultation: [
      {
        duration: '30 Mins',
        amount: '₹500',
        note: {
          en: 'Preliminary document review & procedural guidance',
          hi: 'प्रारंभिक दस्तावेज़ समीक्षा एवं प्रक्रियात्मक मार्गदर्शन',
          pa: 'ਮੁੱਢਲੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਜਾਂਚ ਅਤੇ ਕਾਨੂੰਨੀ ਸਲਾਹ',
        },
      },
      {
        duration: '60 Mins',
        amount: '₹1,000',
        note: {
          en: 'Comprehensive matter evaluation & strategy formulation',
          hi: 'विस्तृत मामला मूल्यांकन एवं कानूनी रणनीति निर्धारण',
          pa: 'ਸਮੁੱਚੇ ਕੇਸ ਦਾ ਮੁਲਾਂਕਣ ਅਤੇ ਕਾਨੂੰਨੀ ਰਣਨੀਤੀ ਤਿਆਰ ਕਰਨਾ',
        },
      },
      {
        duration: 'Urgent / Bail',
        amount: '₹1,500',
        note: {
          en: 'Same-day urgent matter consultation & remand review',
          hi: 'तत्काल परामर्श, अग्रिम / नियमित ज़मानत एवं रिमांड समीक्षा',
          pa: 'ਉਸੇ ਦਿਨ ਜ਼ਰੂਰੀ ਸਲਾਹ, ਜ਼ਮਾਨਤ ਅਤੇ ਰਿਮਾਂਡ ਪੜਤਾਲ',
        },
      },
    ],
    draftingHighlights: [
      { service: 'Legal Notice / Statutory Demand Reply', fee: 'Indicative' },
      { service: 'Plaint / Written Statement / Replication', fee: 'Case-specific' },
      { service: 'Bail Application (District / High Court)', fee: 'Case-specific' },
      { service: 'Writ Petition (Article 226/227)', fee: 'Case-specific' },
      { service: 'Special / General Power of Attorney & Affidavit', fee: 'Indicative' },
    ],
    appearanceHighlights: [
      { court: 'Sub-Divisional Judicial Court, Kalka', fee: 'Per Appearance / Retainer' },
      { court: 'District & Sessions Court, Panchkula', fee: 'Per Appearance / Retainer' },
      { court: 'Punjab & Haryana High Court, Chandigarh', fee: 'Per Appearance / Retainer' },
      { court: 'Tehsil & Revenue Courts (Kalka / Panchkula)', fee: 'Per Hearing' },
    ],
    proBonoPolicy: {
      en: 'Dedicated to upholding access to justice: meritorious matters for underprivileged individuals, defense personnel, and senior citizens with genuine financial hardship are considered for pro-bono representation or subsidized assistance on a case-by-case basis.',
      hi: 'न्याय तक सभी की पहुँच सुनिश्चित करने के लिए: आर्थिक रूप से असमर्थ व्यक्तियों, सेवारत/पूर्व सैनिकों एवं वरिष्ठ नागरिकों के वास्तविक मामलों में प्राथमिकता के आधार पर नि:शुल्क (प्रो-बोनो) या रियायती विधिक सहायता प्रदान की जाती है।',
      pa: 'ਨਿਆਂ ਤੱਕ ਸਾਰਿਆਂ ਦੀ ਪਹੁੰਚ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਵਚਨਬੱਧ: ਆਰਥਿਕ ਪੱਖੋਂ ਕਮਜ਼ੋਰ ਵਿਅਕਤੀਆਂ, ਫੌਜੀ ਜਵਾਨਾਂ ਅਤੇ ਬਜ਼ੁਰਗਾਂ ਦੇ ਵਾਜਬ ਮਾਮਲਿਆਂ ਵਿੱਚ ਮੁਫ਼ਤ (ਪ੍ਰੋ-ਬੋਨੋ) ਜਾਂ ਰਿਆਇਤੀ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
    },
  },

  bciDisclaimer: {
    en: 'As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. This website is solely for informational purposes to provide general information about the advocate, courts of practice, and legal concepts. By entering this website, you acknowledge that you are seeking information voluntarily for your own benefit and that no advocate-client relationship is created.',
    hi: 'बार काउंसिल ऑफ इंडिया के नियमों के अनुसार, अधिवक्ताओं को विज्ञापन करने या कार्य मांगने की अनुमति नहीं है। यह वेबसाइट केवल सूचनात्मक उद्देश्यों के लिए बनाई गई है ताकि अधिवक्ता, उनके अभ्यास न्यायालयों एवं कानूनी अवधारणाओं की सामान्य जानकारी दी जा सके। वेबसाइट में प्रवेश करके आप पुष्टि करते हैं कि आप अपनी स्वेच्छा से सूचना प्राप्त कर रहे हैं और इससे कोई अधिवक्ता-मुवक्किल संबंध स्थापित नहीं होता है।',
    pa: 'ਬਾਰ ਕੌਂਸਲ ਆਫ਼ ਇੰਡੀਆ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਵਕੀਲਾਂ ਲਈ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਜਾਂ ਕੰਮ ਦੀ ਮੰਗ ਕਰਨ ਦੀ ਮਨਾਹੀ ਹੈ। ਇਹ ਵੈੱਬਸਾਈਟ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਦੇ ਮਕਸਦ ਲਈ ਹੈ ਤਾਂ ਜੋ ਵਕੀਲ, ਅਭਿਆਸ ਅਦਾਲਤਾਂ ਅਤੇ ਕਾਨੂੰਨੀ ਨਿਯਮਾਂ ਬਾਰੇ ਆਮ ਜਾਣਕਾਰੀ ਮੁਹੱਈਆ ਕਰਵਾਈ ਜਾ ਸਕੇ। ਇਸ ਵੈੱਬਸਾਈਟ ਵਿੱਚ ਦਾਖਲ ਹੋ ਕੇ ਤੁਸੀਂ ਤਸਦੀਕ ਕਰਦੇ ਹੋ ਕਿ ਤੁਸੀਂ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਜਾਣਕਾਰੀ ਲੈ ਰਹੇ ਹੋ ਅਤੇ ਇਸ ਨਾਲ ਕੋਈ ਵਕੀਲ-ਮੁਵੱਕਿਲ ਰਿਸ਼ਤਾ ਕਾਇਮ ਨਹੀਂ ਹੁੰਦਾ।',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
