export interface PracticeAreaFaq {
  question: {
    en: string;
    hi: string;
    pa: string;
  };
  answer: {
    en: string;
    hi: string;
    pa: string;
  };
}

export interface PracticeAreaDetailedContent {
  slug: string;
  faqs: PracticeAreaFaq[];
  statutoryContext: {
    en: string;
    hi: string;
    pa: string;
  };
  keySteps: {
    title: { en: string; hi: string; pa: string };
    desc: { en: string; hi: string; pa: string };
  }[];
}

export const PRACTICE_DETAILED_DATA: Record<string, PracticeAreaDetailedContent> = {
  'criminal-defence-bail': {
    slug: 'criminal-defence-bail',
    statutoryContext: {
      en: 'Criminal proceedings in Haryana and Punjab are governed by the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Nyaya Sanhita (BNS). Securing liberty through timely anticipatory or regular bail requires rigorous scrutiny of the FIR, examination of role attribution, and presentation of parity before the Magistrate, Sessions Court, or High Court.',
      hi: 'हरियाणा एवं पंजाब में आपराधिक प्रक्रिया भारतीय नागरिक सुरक्षा संहिता (BNSS) एवं भारतीय न्याय संहिता (BNS) के अंतर्गत संचालित होती है। नियमित या अग्रिम ज़मानत के लिए एफ.आई.आर के आरोपों की सूक्ष्म जांच, भूमिका का परीक्षण एवं सत्र अथवा उच्च न्यायालय के समक्ष प्रक्रियात्मक नियमों का पालन आवश्यक है।',
      pa: 'ਹਰਿਆਣਾ ਅਤੇ ਪੰਜਾਬ ਵਿੱਚ ਫੌਜਦਾਰੀ ਕਾਰਵਾਈ ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ (BNSS) ਅਤੇ ਭਾਰਤੀ ਨਿਆਂ ਸੰਹਿਤਾ (BNS) ਅਧੀਨ ਹੁੰਦੀ ਹੈ। ਸਮੇਂ ਸਿਰ ਅਗਾਊਂ ਜਾਂ ਨਿਯਮਤ ਜ਼ਮਾਨਤ ਲਈ ਐੱਫ.ਆਈ.ਆਰ ਦੀ ਜਾਂਚ, ਦੋਸ਼ਾਂ ਦੀ ਪੜਤਾਲ ਅਤੇ ਸੈਸ਼ਨ ਜਾਂ ਹਾਈ ਕੋਰਟ ਅੱਗੇ ਕਾਨੂੰਨੀ ਦਲੀਲਾਂ ਜ਼ਰੂਰੀ ਹੁੰਦੀਆਂ ਹਨ।',
    },
    keySteps: [
      {
        title: { en: '1. FIR & Charge Scrutiny', hi: '1. एफ.आई.आर एवं आरोपों की जांच', pa: '1. ਐੱਫ.ਆਈ.ਆਰ ਦੀ ਕਾਨੂੰਨੀ ਜਾਂਚ' },
        desc: {
          en: 'Thorough examination of police complaint, offences invoked, and factual allegations.',
          hi: 'पुलिस शिकायत, लगाई गई धाराओं एवं कथित आरोपों का गहन विधिक परीक्षण।',
          pa: 'ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ, ਲਗਾਈਆਂ ਧਾਰਾਵਾਂ ਅਤੇ ਲਗਾਏ ਗਏ ਦੋਸ਼ਾਂ ਦੀ ਡੂੰਘੀ ਪੜਤਾਲ।',
        },
      },
      {
        title: { en: '2. Bail Ground Formulation', hi: '2. ज़मानत के विधिक आधार तैयार करना', pa: '2. ਜ਼ਮਾਨਤ ਦੇ ਕਾਨੂੰਨੀ ਅਧਾਰ ਤਿਆਰ ਕਰਨੇ' },
        desc: {
          en: 'Establishing grounds such as lack of prima facie case, non-custodial necessity, or parity with co-accused.',
          hi: 'प्रथम दृष्टया मामले का अभाव, सह-अभियुक्तों के साथ समानता एवं हिरासत की अनुपयोगिता स्थापित करना।',
          pa: 'ਮੁੱਢਲੇ ਤੱਥਾਂ ਦੀ ਘਾਟ, ਬਰਾਬਰਤਾ ਦਾ ਸਿਧਾਂਤ ਅਤੇ ਹਿਰਾਸਤ ਦੀ ਬੇਲੋੜੀ ਜ਼ਰੂਰਤ ਸਾਬਤ ਕਰਨਾ।',
        },
      },
      {
        title: { en: '3. Urgent Filing & Mentioning', hi: '3. त्वरित फाइलिंग एवं मेंशनिंग', pa: '3. ਫੌਰੀ ਦਾਇਰੀ ਅਤੇ ਸੁਣਵਾਈ' },
        desc: {
          en: 'Drafting petition with supported annexures and listing before the designated Sessions Judge or High Court Bench.',
          hi: 'दस्तावेजों सहित याचिका तैयार कर सत्र न्यायालय अथवा उच्च न्यायालय की संबंधित पीठ के समक्ष सूचीबद्ध कराना।',
          pa: 'ਜ਼ਰੂਰੀ ਦਸਤਾਵੇਜ਼ਾਂ ਸਮੇਤ ਅਰਜ਼ੀ ਤਿਆਰ ਕਰਕੇ ਸੈਸ਼ਨ ਜੱਜ ਜਾਂ ਹਾਈ ਕੋਰਟ ਬੈਂਚ ਅੱਗੇ ਪੇਸ਼ ਕਰਨਾ।',
        },
      },
      {
        title: { en: '4. Dedicated Court Arguments', hi: '4. प्रभावी अदालती बहस', pa: '4. ਅਦਾਲਤ ਵਿੱਚ ਜ਼ੋਰਦਾਰ ਬਹਿਸ' },
        desc: {
          en: 'Presenting statutory precedents and factual points during hearing to secure release.',
          hi: 'रिहाई सुनिश्चित करने हेतु सुनवाई के दौरान कानूनी मिसालों एवं तथ्यात्मक बिंदुओं को प्रस्तुत करना।',
          pa: 'ਰਿਹਾਈ ਲਈ ਕਾਨੂੰਨੀ ਮਿਸਾਲਾਂ ਅਤੇ ਅਸਲ ਤੱਥਾਂ ਨੂੰ ਜੱਜ ਸਾਹਮਣੇ ਦਿਆਨਤਦਾਰੀ ਨਾਲ ਪੇਸ਼ ਕਰਨਾ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What is the primary difference between Anticipatory Bail and Regular Bail?',
          hi: 'अग्रिम ज़मानत और नियमित ज़मानत में मुख्य अंतर क्या है?',
          pa: 'ਅਗਾਊਂ ਜ਼ਮਾਨਤ ਅਤੇ ਨਿਯਮਤ ਜ਼ਮਾਨਤ ਵਿੱਚ ਮੁੱਖ ਫ਼ਰਕ ਕੀ ਹੈ?',
        },
        answer: {
          en: 'Anticipatory bail is applied for before an arrest is made, when there is reasonable apprehension of arrest in a non-bailable offence. Regular bail is sought after an individual has already been arrested or surrendered before the court.',
          hi: 'अग्रिम ज़मानत गिरफ्तारी से पूर्व मांगी जाती है जब गैर-ज़मानती अपराध में गिरफ्तारी की आशंका हो। नियमित ज़मानत व्यक्ति के गिरफ्तार होने या न्यायालय में आत्मसमर्पण करने के बाद ली जाती है।',
          pa: 'ਅਗਾਊਂ ਜ਼ਮਾਨਤ ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੋਂ ਪਹਿਲਾਂ ਲਈ ਜਾਂਦੀ ਹੈ ਜਦੋਂ ਕਿਸੇ ਗੈਰ-ਜ਼ਮਾਨਤੀ ਜੁਰਮ ਵਿੱਚ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਾ ਡਰ ਹੋਵੇ। ਨਿਯਮਤ ਜ਼ਮਾਨਤ ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੋਂ ਬਾਅਦ ਅਦਾਲਤ ਵਿੱਚੋਂ ਲਈ ਜਾਂਦੀ ਹੈ।',
        },
      },
      {
        question: {
          en: 'Can bail be applied directly before the High Court?',
          hi: 'क्या सीधे उच्च न्यायालय में ज़मानत याचिका दाखिल की जा सकती है?',
          pa: 'ਕੀ ਸਿੱਧਾ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਜ਼ਮਾਨਤ ਅਰਜ਼ੀ ਲਗਾਈ ਜਾ ਸਕਦੀ ਹੈ?',
        },
        answer: {
          en: 'Ordinarily, the applicant should first approach the Sessions Court (e.g. Panchkula). However, in special or exceptional circumstances, or upon dismissal by Sessions, petition lies before the Punjab & Haryana High Court.',
          hi: 'सामान्यतः पहले संबंधित सत्र न्यायालय (जैसे पंचकूला) का रुख करना होता है। सत्र न्यायालय से खारिज होने पर अथवा विशेष परिस्थितियों में पंजाब एवं हरियाणा हाईकोर्ट में याचिका दायर होती है।',
          pa: 'ਆਮ ਤੌਰ ਤੇ ਪਹਿਲਾਂ ਸੈਸ਼ਨ ਕੋਰਟ (ਜਿਵੇਂ ਪੰਚਕੂਲਾ) ਪਹੁੰਚ ਕਰਨੀ ਪੈਂਦੀ ਹੈ। ਉਥੋਂ ਰੱਦ ਹੋਣ ਤੇ ਜਾਂ ਖ਼ਾਸ ਹਾਲਾਤਾਂ ਵਿੱਚ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਅਰਜ਼ੀ ਲਗਾਈ ਜਾਂਦੀ ਹੈ।',
        },
      },
    ],
  },

  'civil-litigation': {
    slug: 'civil-litigation',
    statutoryContext: {
      en: 'Civil litigation governs private rights, recovery of dues, declaration of legal character, and injunctions under the Code of Civil Procedure (CPC) and Specific Relief Act. Meticulous drafting of the plaint and adherence to limitation are critical to establishing rights.',
      hi: 'दीवानी मुकदमेबाजी दीवानी प्रक्रिया संहिता (CPC) एवं विशिष्ट अनुतोष अधिनियम के अंतर्गत निजी अधिकारों, धन वसूली एवं निषेधाज्ञा से संबंधित है। वाद-पत्र (Plaint) का सटीक प्रारूपण एवं परिसीमा का पालन सर्वाधिक महत्वपूर्ण है।',
      pa: 'ਦੀਵਾਨੀ ਕੇਸ ਸੀ.ਪੀ.ਸੀ. ਅਤੇ ਸਪੈਸੀਫਿਕ ਰਿਲੀਫ਼ ਐਕਟ ਅਧੀਨ ਹੱਕਾਂ ਦੀ ਰਾਖੀ, ਪੈਸੇ ਦੀ ਵਸੂਲੀ ਅਤੇ ਸਟੇਅ ਆਰਡਰਾਂ ਨਾਲ ਸਬੰਧਤ ਹੁੰਦੇ ਹਨ। ਦਾਅਵਾ ਅਰਜ਼ੀ ਦੀ ਸ਼ੁੱਧਤਾ ਅਤੇ ਕਾਨੂੰਨੀ ਮਿਆਦ ਦਾ ਧਿਆਨ ਰੱਖਣਾ ਜ਼ਰੂਰੀ ਹੁੰਦਾ ਹੈ।',
    },
    keySteps: [
      {
        title: { en: '1. Cause of Action & Limitation', hi: '1. वाद हेतुक एवं परिसीमा जांच', pa: '1. ਕੇਸ ਦਾ ਕਾਰਨ ਅਤੇ ਮਿਆਦ ਜਾਂਚ' },
        desc: {
          en: 'Evaluating statutory period under the Limitation Act and identifying precise cause of action.',
          hi: 'परिसीमा अधिनियम के तहत अवधि का मूल्यांकन एवं वाद के मूल कारण की पहचान।',
          pa: 'ਲਿਮੀਟੇਸ਼ਨ ਐਕਟ ਅਧੀਨ ਸਮੇਂ ਦੀ ਜਾਂਚ ਅਤੇ ਕੇਸ ਬਣਨ ਦੇ ਅਸਲ ਕਾਰਨ ਦੀ ਪਛਾਣ।',
        },
      },
      {
        title: { en: '2. Plaint Drafting & Evidence Indexing', hi: '2. वाद-पत्र ड्राफ्टिंग एवं साक्ष्य सूची', pa: '2. ਦਾਅਵਾ ਤਿਆਰੀ ਅਤੇ ਸਬੂਤ ਸੂਚੀ' },
        desc: {
          en: 'Meticulous drafting of facts, prayers, and annexing all certified documents.',
          hi: 'तथ्यों, अनुतोष (Prayers) एवं प्रमाणित दस्तावेजों को संलग्न कर वाद-पत्र तैयार करना।',
          pa: 'ਤੱਥਾਂ, ਮੰਗਾਂ ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਕਾਗਜ਼ਾਤਾਂ ਨੂੰ ਨੱਥੀ ਕਰਕੇ ਪਲੇਂਟ ਤਿਆਰ ਕਰਨਾ।',
        },
      },
      {
        title: { en: '3. Interim Relief / Injunction Hearing', hi: '3. अंतरिम राहत / स्थगनादेश सुनवाई', pa: '3. ਅੰਤਰਿਮ ਸਟੇਅ ਆਰਡਰ ਬਹਿਸ' },
        desc: {
          en: 'Arguing Order 39 Rules 1 & 2 application for immediate protection of subject matter.',
          hi: 'संपत्ति या विषय-वस्तु की तत्काल सुरक्षा हेतु आदेश 39 नियम 1 व 2 पर बहस।',
          pa: 'ਮਾਮਲੇ ਦੀ ਤੁਰੰਤ ਰਾਖੀ ਲਈ ਆਰਡਰ 39 ਅਧੀਨ ਸਟੇਅ ਲੈਣ ਲਈ ਅਦਾਲਤ ਵਿੱਚ ਬਹਿਸ।',
        },
      },
      {
        title: { en: '4. Evidence & Final Arguments', hi: '4. गवाही एवं अंतिम विधिक बहस', pa: '4. ਗਵਾਹੀਆਂ ਅਤੇ ਅੰਤਿਮ ਬਹਿਸ' },
        desc: {
          en: 'Cross-examination of opposing witnesses and final legal arguments on merits.',
          hi: 'विपक्षी गवाहों की जिरह (Cross-examination) एवं गुणावगुण पर अंतिम विधिक बहस।',
          pa: 'ਦੂਜੀ ਧਿਰ ਦੇ ਗਵਾਹਾਂ ਤੋਂ ਪੁੱਛਗਿੱਛ (ਜਿਰ੍ਹਾ) ਅਤੇ ਕੇਸ ਦੇ ਗੁਣ-ਦੋਸ਼ਾਂ ਤੇ ਆਖ਼ਰੀ ਬਹਿਸ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'How long does an injunction application take to be heard?',
          hi: 'निषेधाज्ञा (Stay) आवेदन पर सुनवाई में कितना समय लगता है?',
          pa: 'ਸਟੇਅ ਆਰਡਰ (ਇਨਜੰਕਸ਼ਨ) ਦੀ ਸੁਣਵਾਈ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?',
        },
        answer: {
          en: 'In urgent matters, an ad-interim ex-parte injunction application is taken up on the very first date of hearing after filing, upon showing grave urgency and irreparable injury.',
          hi: 'अत्यावश्यक मामलों में, गंभीर तात्कालिकता और अपूरणीय क्षति दर्शाने पर फाइलिंग के बाद पहली ही पेशी पर अंतरिम स्थगनादेश आवेदन पर सुनवाई हो सकती है।',
          pa: 'ਜ਼ਰੂਰੀ ਕੇਸਾਂ ਵਿੱਚ ਅਰਜ਼ੀ ਦਾਇਰ ਕਰਨ ਤੋਂ ਬਾਅਦ ਪਹਿਲੀ ਹੀ ਤਾਰੀਖ਼ \'ਤੇ ਅੰਤਰਿਮ ਸਟੇਅ ਸੰਬੰਧੀ ਸੁਣਵਾਈ ਹੋ ਸਕਦੀ ਹੈ।',
        },
      },
    ],
  },

  'property-real-estate': {
    slug: 'property-real-estate',
    statutoryContext: {
      en: 'Real estate and property matters in Kalka, Pinjore, and Panchkula require comprehensive coordination between revenue authorities (Tehsildar) and civil courts. Disputes commonly involve partition of ancestral land, unregistered agreements, encroachment, and landlord-tenant conflicts.',
      hi: 'कालका, पिंजौर एवं पंचकूला में संपत्ति मामलों में राजस्व प्राधिकरणों (तहसीलदार) एवं दीवानी अदालतों के बीच समन्वय आवश्यक होता है। इसमें पैतृक भूमि का बंटवारा, बयाना विवाद, अतिक्रमण एवं किराएदारी विवाद प्रमुख हैं।',
      pa: 'ਕਾਲਕਾ, ਪਿੰਜੌਰ ਅਤੇ ਪੰਚਕੂਲਾ ਵਿੱਚ ਜਾਇਦਾਦ ਦੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਤਹਿਸੀਲ ਅਤੇ ਸਿਵਲ ਅਦਾਲਤਾਂ ਦੋਵਾਂ ਦੇ ਨਿਯਮ ਲਾਗੂ ਹੁੰਦੇ ਹਨ। ਇਸ ਵਿੱਚ ਜੱਦੀ ਜ਼ਮੀਨ ਦੀ ਵੰਡ, ਬਿਆਨਾ ਇਕਰਾਰਨਾਮੇ, ਨਾਜਾਇਜ਼ ਕਬਜ਼ੇ ਅਤੇ ਕਿਰਾਏਦਾਰੀ ਦੇ ਝਗੜੇ ਸ਼ਾਮਲ ਹਨ।',
    },
    keySteps: [
      {
        title: { en: '1. Revenue Record & Title Audit', hi: '1. जमाबंदी व स्वत्व अभिलेख जांच', pa: '1. ਜਮ੍ਹਾਂਬੰਦੀ ਅਤੇ ਟਾਈਟਲ ਪੜਤਾਲ' },
        desc: {
          en: 'Inspecting Jamabandi, Aks Shajra, Mutations, and Registered Deeds at Tehsil.',
          hi: 'तहसील में जमाबंदी, अक्स शजरा, इंतकाल एवं पंजीकृत विलेखों का गहन सत्यापन।',
          pa: 'ਤਹਿਸੀਲ ਵਿੱਚ ਜਮ੍ਹਾਂਬੰਦੀ, ਅਕਸ ਸ਼ਜਰਾ, ਇੰਤਕਾਲ ਅਤੇ ਰਜਿਸਟਰਡ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਜਾਂਚ।',
        },
      },
      {
        title: { en: '2. Partition / Injunction Filing', hi: '2. बंटवारा अथवा स्थगन वाद दाखिल करना', pa: '2. ਵੰਡ ਜਾਂ ਸਟੇਅ ਮੁਕੱਦਮਾ ਦਾਇਰ ਕਰਨਾ' },
        desc: {
          en: 'Filing suit for partition or permanent injunction against dispossession.',
          hi: 'बेदखली के विरुद्ध स्थायी निषेधाज्ञा या पैतृक संपत्ति के बंटवारे हेतु वाद दायर करना।',
          pa: 'ਗੈਰ-ਕਾਨੂੰਨੀ ਕਬਜ਼ੇ ਵਿਰੁੱਧ ਸਟੇਅ ਜਾਂ ਜੱਦੀ ਜਾਇਦਾਦ ਦੀ ਕਾਨੂੰਨੀ ਵੰਡ ਦਾ ਕੇਸ ਦਾਇਰ ਕਰਨਾ।',
        },
      },
      {
        title: { en: '3. Local Commission / Demarcation', hi: '3. लोकल कमिश्नर / निशानदेही रिपोर्ट', pa: '3. ਲੋਕਲ ਕਮਿਸ਼ਨਰ / ਨਿਸ਼ਾਨਦੇਹੀ ਰਿਪੋਰਟ' },
        desc: {
          en: 'Seeking court appointment of revenue officer/kanungo to demarcate disputed land.',
          hi: 'विवादित भूमि की वास्तविक स्थिति एवं निशानदेही हेतु कोर्ट द्वारा कानूनगो की नियुक्ति।',
          pa: 'ਜ਼ਮੀਨ ਦੀ ਅਸਲ ਹੱਦਬੰਦੀ ਲਈ ਅਦਾਲਤ ਰਾਹੀਂ ਮਾਲੀਆ ਅਫ਼ਸਰ ਨਿਯੁਕਤ ਕਰਵਾਉਣਾ।',
        },
      },
      {
        title: { en: '4. Final Partition & Possession', hi: '4. अंतिम डिक्री एवं वास्तविक कब्ज़ा', pa: '4. ਅੰਤਿਮ ਫ਼ੈਸਲਾ ਅਤੇ ਕਬਜ਼ਾ ਦਿਵਾਉਣਾ' },
        desc: {
          en: 'Obtaining final decree and executing warrant of possession through court bailiff.',
          hi: 'अंतिम डिक्री प्राप्त कर कोर्ट बेलीफ के माध्यम से भौतिक कब्ज़ा दिलाना।',
          pa: 'ਅੰਤਿਮ ਡਿਗਰੀ ਹਾਸਲ ਕਰਕੇ ਅਦਾਲਤ ਰਾਹੀਂ ਅਸਲ ਕਬਜ਼ਾ ਦਿਵਾਉਣਾ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What documents should I carry for a property dispute consultation in Kalka?',
          hi: 'कालका में संपत्ति विवाद परामर्श हेतु कौन से दस्तावेज़ साथ लाने चाहिए?',
          pa: 'ਕਾਲਕਾ ਵਿੱਚ ਜਾਇਦਾਦ ਸਬੰਧੀ ਸਲਾਹ ਲਈ ਕਿਹੜੇ ਕਾਗਜ਼ਾਤ ਲੈ ਕੇ ਆਉਣੇ ਚਾਹੀਦੇ ਹਨ?',
        },
        answer: {
          en: 'Carry latest Jamabandi (fard), copy of registered sale deed/agreement to sell, mutation (inteqal) copies, and any notice or court summons received.',
          hi: 'नवीनतम जमाबंदी (फर्द), रजिस्ट्री या बयाना पत्र की प्रति, इंतकाल की नकल तथा प्राप्त हुआ कोई नोटिस अथवा अदालती समन साथ लाएं।',
          pa: 'ਤਾਜ਼ਾ ਜਮ੍ਹਾਂਬੰਦੀ (ਫ਼ਰਦ), ਰਜਿਸਟਰੀ ਜਾਂ ਬਿਆਨਾ ਕਾਪੀ, ਇੰਤਕਾਲ ਅਤੇ ਕੋਈ ਮਿਲਿਆ ਨੋਟਿਸ ਜਾਂ ਅਦਾਲਤੀ ਸੰਮਨ ਲੈ ਕੇ ਆਓ।',
        },
      },
    ],
  },

  'family-matrimonial': {
    slug: 'family-matrimonial',
    statutoryContext: {
      en: 'Matrimonial law in India balances personal law statutes (Hindu Marriage Act, Special Marriage Act) with welfare protections (DV Act, Sec 125 maintenance). Our focus is compassionate, confidential guidance aimed at protecting rights and seeking amicable settlement wherever viable.',
      hi: 'भारत में वैवाहिक कानून व्यक्तिगत विधियों (हिन्दू विवाह अधिनियम) एवं सुरक्षात्मक कानूनों (घरेलू हिंसा अधिनियम, धारा 125 भरण-पोषण) के तहत संचालित होता है। हमारा उद्देश्य अधिकारों की रक्षा करते हुए गोपनीय व संवेदनशील कानूनी सहायता प्रदान करना है।',
      pa: 'ਭਾਰਤ ਵਿੱਚ ਪਰਿਵਾਰਕ ਮਾਮਲੇ ਹਿੰਦੂ ਮੈਰਿਜ ਐਕਟ, ਘਰੇਲੂ ਹਿੰਸਾ ਕਾਨੂੰਨ ਅਤੇ ਖ਼ਰਚੇ ਦੀਆਂ ਧਾਰਾਵਾਂ ਅਧੀਨ ਆਉਂਦੇ ਹਨ। ਸਾਡੀ ਕੋਸ਼ਿਸ਼ ਮੁਵੱਕਿਲ ਦੇ ਹੱਕਾਂ ਦੀ ਰਾਖੀ ਕਰਦੇ ਹੋਏ ਗੁਪਤ ਅਤੇ ਸੰਵੇਦਨਸ਼ੀਲ ਸਲਾਹ ਦੇਣਾ ਹੈ।',
    },
    keySteps: [
      {
        title: { en: '1. Fact & Financial Assessment', hi: '1. तथ्य एवं वित्तीय स्थिति का आंकलन', pa: '1. ਤੱਥਾਂ ਅਤੇ ਵਿੱਤੀ ਹਾਲਾਤਾਂ ਦੀ ਜਾਂਚ' },
        desc: {
          en: 'Evaluating domestic history, maintenance requirements, and child custody needs.',
          hi: 'घरेलू इतिहास, भरण-पोषण आवश्यकता एवं बाल अभिरक्षा (Custody) की स्थिति का विश्लेषण।',
          pa: 'ਪਰਿਵਾਰਕ ਹਾਲਾਤਾਂ, ਖ਼ਰਚੇ ਦੀ ਲੋੜ ਅਤੇ ਬੱਚੇ ਦੀ ਕਸਟਡੀ ਸੰਬੰਧੀ ਤੱਥਾਂ ਦੀ ਪੜਤਾਲ।',
        },
      },
      {
        title: { en: '2. Mediation & Conciliation Attempt', hi: '2. मध्यस्थता एवं सुलह प्रयास', pa: '2. ਵਿਚੋਲਗੀ ਅਤੇ ਸਮਝੌਤੇ ਦੀ ਕੋਸ਼ਿਸ਼' },
        desc: {
          en: 'Exploring mutual consent settlement to avoid protracted, bitter litigation.',
          hi: 'लंबी एवं तनावपूर्ण कानूनी लड़ाई से बचने हेतु आपसी सहमति से समझौते का प्रयास।',
          pa: 'ਲੰਬੇ ਮੁਕੱਦਮਿਆਂ ਤੋਂ ਬਚਣ ਲਈ ਆਪਸੀ ਰਜ਼ਾਮੰਦੀ ਨਾਲ ਗੱਲਬਾਤ ਰਾਹੀਂ ਹੱਲ ਕੱਢਣ ਦੀ ਕੋਸ਼ਿਸ਼।',
        },
      },
      {
        title: { en: '3. Legal Petitions & Reliefs', hi: '3. याचिकाएं एवं अंतरिम राहत', pa: '3. ਕਾਨੂੰਨੀ ਅਰਜ਼ੀਆਂ ਅਤੇ ਫੌਰੀ ਰਾਹਤ' },
        desc: {
          en: 'Filing maintenance petition, domestic violence protection, or divorce petition before Family Court.',
          hi: 'पारिवारिक न्यायालय में भरण-पोषण, सुरक्षा अथवा तलाक संबंधी उचित याचिका दायर करना।',
          pa: 'ਫੈਮਿਲੀ ਕੋਰਟ ਵਿੱਚ ਖ਼ਰਚਾ, ਘਰੇਲੂ ਹਿੰਸਾ ਤੋਂ ਬਚਾਅ ਜਾਂ ਤਲਾਕ ਦੀ ਅਰਜ਼ੀ ਲਗਾਉਣਾ।',
        },
      },
      {
        title: { en: '4. Maintenance Enforcement & Trial', hi: '4. भरण-पोषण वसूली एवं सुनवाई', pa: '4. ਖ਼ਰਚੇ ਦੀ ਵਸੂਲੀ ਅਤੇ ਅਦਾਲਤੀ ਕਾਰਵਾਈ' },
        desc: {
          en: 'Enforcing interim maintenance orders and representing in trial proceedings.',
          hi: 'अंतरिम भरण-पोषण आदेश का प्रभावी क्रियान्वयन एवं सुनवाई में पैरवी।',
          pa: 'ਅੰਤਰਿਮ ਖ਼ਰਚੇ ਦੇ ਹੁਕਮ ਲਾਗੂ ਕਰਵਾਉਣੇ ਅਤੇ ਸੁਣਵਾਈ ਦੌਰਾਨ ਪੂਰਾ ਬਚਾਅ ਕਰਨਾ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'How fast can a mutual consent divorce be processed?',
          hi: 'आपसी सहमति से तलाक में कितना समय लगता है?',
          pa: 'ਆਪਸੀ ਰਜ਼ਾਮੰਦੀ ਨਾਲ ਤਲਾਕ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?',
        },
        answer: {
          en: 'Under Section 13B of the Hindu Marriage Act, there is normally a statutory cooling-off period of 6 months, which can be waived by the court in genuine cases under Supreme Court guidelines (Amardeep Singh judgment).',
          hi: 'धारा 13B के अंतर्गत सामान्यतः 6 माह की प्रतीक्षा अवधि होती है, जिसे विशेष परिस्थितियों में सर्वोच्च न्यायालय के दिशा-निर्देशों के तहत माफ भी कराया जा सकता है।',
          pa: 'ਧਾਰਾ 13B ਅਧੀਨ ਆਮ ਤੌਰ ਤੇ 6 ਮਹੀਨੇ ਦਾ ਸਮਾਂ ਹੁੰਦਾ ਹੈ, ਜਿਸਨੂੰ ਖ਼ਾਸ ਹਾਲਾਤਾਂ ਵਿੱਚ ਅਦਾਲਤ ਰਾਹੀਂ ਮੁਆਫ਼ ਵੀ ਕਰਵਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।',
        },
      },
    ],
  },

  'writ-petitions-constitutional': {
    slug: 'writ-petitions-constitutional',
    statutoryContext: {
      en: 'Writ petitions under Article 226/227 of the Constitution before the Punjab & Haryana High Court at Chandigarh invoke extraordinary constitutional jurisdiction to remedy violations of fundamental rights, arbitrary state action, and unlawful police harassment.',
      hi: 'पंजाब एवं हरियाणा उच्च न्यायालय, चंडीगढ़ के समक्ष अनुच्छेद 226/227 के तहत रिट याचिकाएं मौलिक अधिकारों के हनन, मनमानी प्रशासनिक कार्यवाही एवं पुलिस उत्पीड़न के विरुद्ध असाधारण संवैधानिक उपाय प्रदान करती हैं।',
      pa: 'ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ, ਚੰਡੀਗੜ੍ਹ ਵਿਖੇ ਧਾਰਾ 226/227 ਅਧੀਨ ਰਿੱਟ ਪਟੀਸ਼ਨਾਂ ਮੁੱਢਲੇ ਅਧਿਕਾਰਾਂ ਦੀ ਉਲੰਘਣਾ, ਸਰਕਾਰੀ ਮਨਮਰਜ਼ੀ ਅਤੇ ਪੁਲਿਸ ਪਰੇਸ਼ਾਨੀ ਵਿਰੁੱਧ ਇੱਕ ਤਾਕਤਵਰ ਸੰਵਿਧਾਨਕ ਹੱਲ ਹਨ।',
    },
    keySteps: [
      {
        title: { en: '1. Administrative Failure & Legal Notice', hi: '1. प्रशासनिक विफलता एवं मांग पत्र', pa: '1. ਪ੍ਰਸ਼ਾਸਕੀ ਨਾਕਾਮੀ ਅਤੇ ਮੰਗ ਪੱਤਰ' },
        desc: {
          en: 'Establishing prior demand of justice and exhaustion of statutory remedies.',
          hi: 'अधिकारियों को पूर्व विधिक मांग पत्र (Representation) भेजना और उपेक्षा को प्रमाणित करना।',
          pa: 'ਅਫ਼ਸਰਾਂ ਨੂੰ ਪਹਿਲਾਂ ਕਾਨੂੰਨੀ ਮੰਗ ਪੱਤਰ ਭੇਜਣਾ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਅਣਦੇਖੀ ਨੂੰ ਸਾਬਤ ਕਰਨਾ।',
        },
      },
      {
        title: { en: '2. High Court Writ Drafting', hi: '2. हाईकोर्ट रिट याचिका का प्रारूपण', pa: '2. ਹਾਈ ਕੋਰਟ ਰਿੱਟ ਪਟੀਸ਼ਨ ਦੀ ਤਿਆਰੀ' },
        desc: {
          en: 'Grounding petition in constitutional principles, judicial precedents, and verified affidavits.',
          hi: 'संवैधानिक सिद्धांतों, सुप्रीम कोर्ट के निर्णयों एवं शपथपत्रों के आधार पर याचिका तैयार करना।',
          pa: 'ਸੰਵਿਧਾਨਕ ਅਸੂਲਾਂ, ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਫ਼ੈਸਲਿਆਂ ਅਤੇ ਹਲਫ਼ਨਾਮਿਆਂ ਅਧਾਰਤ ਪਟੀਸ਼ਨ ਬਣਾਉਣਾ।',
        },
      },
      {
        title: { en: '3. Registry Clearance & Listing', hi: '3. रजिस्ट्री जांच एवं कोर्ट में सूचीकरण', pa: '3. ਰਜਿਸਟਰੀ ਪੜਤਾਲ ਅਤੇ ਲਿਸਟਿੰਗ' },
        desc: {
          en: 'Navigating High Court registry requirements and urgent mentioning before the roster Bench.',
          hi: 'हाईकोर्ट रजिस्ट्री की आपत्तियों का निवारण एवं संबंधित रोस्टर बेंच के समक्ष मेंशनिंग।',
          pa: 'ਹਾਈ ਕੋਰਟ ਰਜਿਸਟਰੀ ਦੇ ਇਤਰਾਜ਼ ਦੂਰ ਕਰਕੇ ਸਬੰਧਤ ਰੋਸਟਰ ਬੈਂਚ ਅੱਗੇ ਫੌਰੀ ਸੁਣਵਾਈ ਲਈ ਲਗਾਉਣਾ।',
        },
      },
      {
        title: { en: '4. Motion Hearing & Stay Relief', hi: '4. प्रारंभिक सुनवाई एवं स्थगनादेश', pa: '4. ਮੁੱਢਲੀ ਸੁਣਵਾਈ ਅਤੇ ਸਟੇਅ ਹੁਕਮ' },
        desc: {
          en: 'Advocating for notice of motion, protection of life and liberty, or stay of arbitrary orders.',
          hi: 'नोटिस ऑफ मोशन, जीवन व स्वतंत्रता की सुरक्षा अथवा मनमाने आदेश पर रोक हेतु प्रभावी बहस।',
          pa: 'ਨੋਟਿਸ ਆਫ਼ ਮੋਸ਼ਨ, ਜਾਨ-ਮਾਲ ਦੀ ਰਾਖੀ ਜਾਂ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੁਕਮਾਂ \'ਤੇ ਰੋਕ ਲਈ ਜ਼ੋਰਦਾਰ ਬਹਿਸ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What is a Protection Petition in the Punjab & Haryana High Court?',
          hi: 'पंजाब एवं हरियाणा हाईकोर्ट में प्रोटेक्शन पिटीशन क्या होती है?',
          pa: 'ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਪ੍ਰੋਟੈਕਸ਼ਨ ਪਟੀਸ਼ਨ ਕੀ ਹੁੰਦੀ ਹੈ?',
        },
        answer: {
          en: 'A Protection Petition under Article 226 is filed by individuals (including run-away couples or threatened witnesses) facing imminent threat to their life and personal liberty, directing police protection under Article 21.',
          hi: 'अनुच्छेद 226 के तहत यह याचिका उन व्यक्तियों द्वारा दायर की जाती है जिन्हें अपनी जान और स्वतंत्रता पर गंभीर खतरा हो, ताकि पुलिस को सुरक्षा प्रदान करने का निर्देश दिया जा सके।',
          pa: 'ਧਾਰਾ 226 ਅਧੀਨ ਇਹ ਪਟੀਸ਼ਨ ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਲਗਾਈ ਜਾਂਦੀ ਹੈ ਜਿਨ੍ਹਾਂ ਦੀ ਜਾਨ ਨੂੰ ਖ਼ਤਰਾ ਹੋਵੇ, ਤਾਂ ਜੋ ਹਾਈ ਕੋਰਟ ਪੁਲਿਸ ਨੂੰ ਸੁਰੱਖਿਆ ਦੇਣ ਦਾ ਹੁਕਮ ਦੇਵੇ।',
        },
      },
    ],
  },

  'service-matters': {
    slug: 'service-matters',
    statutoryContext: {
      en: 'Service jurisprudence safeguards government officials, corporation employees, teachers, and police personnel against illegal suspension, arbitrary charge-sheets, withheld pensions, and promotion supersession before the High Court and administrative authorities.',
      hi: 'सेवा कानून सरकारी कर्मचारियों, निगम कर्मियों, शिक्षकों एवं पुलिस कर्मियों को अवैध निलंबन, मनमानी चार्जशीट, रोकी गई पेंशन एवं पदोन्नति में अनदेखी के विरुद्ध उच्च न्यायालय में विधिक सुरक्षा देता है।',
      pa: 'ਸਰਵਿਸ ਕਾਨੂੰਨ ਸਰਕਾਰੀ ਮੁਲਾਜ਼ਮਾਂ, ਅਧਿਆਪਕਾਂ ਅਤੇ ਪੁਲਿਸ ਮੁਲਾਜ਼ਮਾਂ ਨੂੰ ਗੈਰ-ਕਾਨੂੰਨੀ ਮੁਅੱਤਲੀ, ਚਾਰਜਸ਼ੀਟ, ਰੋਕੀ ਹੋਈ ਪੈਨਸ਼ਨ ਅਤੇ ਤਰੱਕੀ ਨਾ ਮਿਲਣ ਵਿਰੁੱਧ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਕਾਨੂੰਨੀ ਇਨਸਾਫ਼ ਦਿਵਾਉਂਦਾ ਹੈ।',
    },
    keySteps: [
      {
        title: { en: '1. Service Rules & Record Review', hi: '1. सेवा नियमावली एवं रिकॉर्ड समीक्षा', pa: '1. ਸਰਵਿਸ ਨਿਯਮਾਂ ਅਤੇ ਰਿਕਾਰਡ ਦੀ ਜਾਂਚ' },
        desc: {
          en: 'Checking departmental service rules (Haryana / Punjab Civil Services Rules) and seniority lists.',
          hi: 'हरियाणा/पंजाब सिविल सेवा नियमावली एवं वरिष्ठता सूचियों का विधिक परीक्षण।',
          pa: 'ਹਰਿਆਣਾ/ਪੰਜਾਬ ਸਿਵਲ ਸਰਵਿਸ ਨਿਯਮਾਂ ਅਤੇ ਸੀਨੀਆਰਤਾ ਸੂਚੀਆਂ ਦੀ ਕਾਨੂੰਨੀ ਜਾਂਚ।',
        },
      },
      {
        title: { en: '2. Statutory Representation', hi: '2. विभागीय अभ्यावेदन (Representation)', pa: '2. ਵਿਭਾਗੀ ਮੰਗ ਪੱਤਰ ਭੇਜਣਾ' },
        desc: {
          en: 'Serving statutory legal demand notice to the competent department authority.',
          hi: 'सक्षम प्रशासनिक अधिकारी को वैधानिक मांग नोटिस भेजना।',
          pa: 'ਸਬੰਧਤ ਉੱਚ ਅਧਿਕਾਰੀ ਨੂੰ ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਜਾਂ ਮੰਗ ਪੱਤਰ ਭੇਜਣਾ।',
        },
      },
      {
        title: { en: '3. Civil Writ Petition in High Court', hi: '3. हाईकोर्ट में सिविल रिट याचिका (CWP)', pa: '3. ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਸਿਵਲ ਰਿੱਟ ਪਟੀਸ਼ਨ (CWP)' },
        desc: {
          en: 'Challenging adverse departmental orders or seeking mandamus for timely release of benefits.',
          hi: 'विभागीय प्रतिकूल आदेश को चुनौती देना अथवा देय लाभों की समयबद्ध अदायगी हेतु परमादेश मांगना।',
          pa: 'ਗਲਤ ਵਿਭਾਗੀ ਹੁਕਮਾਂ ਨੂੰ ਚੁਣੌਤੀ ਦੇਣਾ ਜਾਂ ਪੈਨਸ਼ਨ/ਲਾਭ ਦਿਵਾਉਣ ਲਈ ਹਾਈ ਕੋਰਟ ਪਹੁੰਚਣਾ।',
        },
      },
      {
        title: { en: '4. Implementation of Directions', hi: '4. अदालती निर्देशों का क्रियान्वयन', pa: '4. ਅਦਾਲਤੀ ਹੁਕਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਵਾਉਣੀ' },
        desc: {
          en: 'Pursuing timely compliance and initiating contempt proceedings if orders are defied.',
          hi: 'कोर्ट के निर्देशों का समय पर पालन कराना तथा अवहेलना होने पर अवमानना (Contempt) याचिका दाखिल करना।',
          pa: 'ਹੁਕਮਾਂ ਦੀ ਸਮੇਂ ਸਿਰ ਪਾਲਣਾ ਕਰਵਾਉਣੀ ਅਤੇ ਨਾ ਮੰਨਣ ਤੇ ਕੰਟੈਂਪਟ ਪਟੀਸ਼ਨ ਲਗਾਉਣੀ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can delayed retirement pension be claimed with statutory interest?',
          hi: 'क्या रोकी गई या विलंबित पेंशन पर ब्याज का दावा किया जा सकता है?',
          pa: 'ਕੀ ਦੇਰੀ ਨਾਲ ਮਿਲੀ ਪੈਨਸ਼ਨ \'ਤੇ ਵਿਆਜ ਦਾ ਦਾਅਵਾ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?',
        },
        answer: {
          en: 'Yes. The Punjab & Haryana High Court and Supreme Court have repeatedly held that terminal benefits and gratuity illegally delayed attract penal statutory interest payable by the government.',
          hi: 'हाँ। यदि विभाग बिना किसी कानूनी आधार के सेवानिवृत्ति लाभों में देरी करता है, तो हाईकोर्ट ब्याज सहित भुगतान का आदेश देता है।',
          pa: 'ਹਾਂ, ਜੇਕਰ ਸਰਕਾਰੀ ਵਿਭਾਗ ਬਿਨਾਂ ਵਜ੍ਹਾ ਪੈਨਸ਼ਨ ਜਾਂ ਗ੍ਰੈਚੁਟੀ ਵਿੱਚ ਦੇਰੀ ਕਰਦਾ ਹੈ, ਤਾਂ ਹਾਈ ਕੋਰਟ ਵਿਆਜ ਸਮੇਤ ਭੁਗਤਾਨ ਦਾ ਹੁਕਮ ਦਿੰਦੀ ਹੈ।',
        },
      },
    ],
  },

  'motor-accident-claims': {
    slug: 'motor-accident-claims',
    statutoryContext: {
      en: 'Motor Accident Claims Tribunals (MACT) under the Motor Vehicles Act award statutory compensation for fatal road accidents, severe injuries, and permanent disabilities before tribunals in Panchkula, Chandigarh, and appellate benches of the High Court.',
      hi: 'मोटर वाहन अधिनियम के अंतर्गत मोटर दुर्घटना दावा अधिकरण (MACT) पंचकूला एवं चंडीगढ़ ट्रिब्यूनल तथा हाईकोर्ट में सड़क दुर्घटना पीड़ितों को समुचित क्षतिपूर्ति दिलाने हेतु कार्य करता है।',
      pa: 'ਮੋਟਰ ਵਹੀਕਲ ਐਕਟ ਅਧੀਨ ਐੱਮ.ਏ.ਸੀ.ਟੀ. ਟ੍ਰਿਬਿਊਨਲ ਪੰਚਕੂਲਾ, ਚੰਡੀਗੜ੍ਹ ਅਤੇ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਸੜਕ ਹਾਦਸੇ ਦੇ ਸ਼ਿਕਾਰ ਪਰਿਵਾਰਾਂ ਨੂੰ ਕਾਨੂੰਨੀ ਮੁਆਵਜ਼ਾ ਦਿਵਾਉਣ ਦਾ ਕੰਮ ਕਰਦੀ ਹੈ।',
    },
    keySteps: [
      {
        title: { en: '1. DAR & FIR Collection', hi: '1. एफ.आई.आर एवं DAR रिपोर्ट संग्रह', pa: '1. ਐੱਫ.ਆਈ.ਆਰ ਅਤੇ ਪੁਲਿਸ ਰਿਪੋਰਟ ਇਕੱਠੀ ਕਰਨੀ' },
        desc: {
          en: 'Gathering Detailed Accident Report (DAR), site plan, vehicle insurance, and MLC.',
          hi: 'विस्तृत दुर्घटना रिपोर्ट (DAR), मौका नक्शा, वाहन बीमा पॉलिसी एवं मेडिकल रिकॉर्ड प्राप्त करना।',
          pa: 'ਐੱਫ.ਆਈ.ਆਰ, ਮੌਕੇ ਦਾ ਨਕਸ਼ਾ, ਗੱਡੀ ਦਾ ਬੀਮਾ ਅਤੇ ਡਾਕਟਰੀ ਰਿਕਾਰਡ ਹਾਸਲ ਕਰਨਾ।',
        },
      },
      {
        title: { en: '2. Disability & Income Proof', hi: '2. आय एवं दिव्यांगता प्रमाण पत्र', pa: '2. ਆਮਦਨ ਅਤੇ ਅੰਗਹੀਣਤਾ ਸਰਟੀਫਿਕੇਟ' },
        desc: {
          en: 'Quantifying financial loss based on age multiplier, future prospects, and medical expenditure.',
          hi: 'आयु गुणक (Multiplier), भविष्य की संभावनाओं एवं चिकित्सा व्यय के आधार पर सटीक दावे की गणना।',
          pa: 'ਉਮਰ ਦੇ ਮਲਟੀਪਲਾਇਰ, ਭਵਿੱਖ ਦੀ ਆਮਦਨ ਅਤੇ ਇਲਾਜ ਦੇ ਖ਼ਰਚੇ ਅਨੁਸਾਰ ਮੁਆਵਜ਼ੇ ਦੀ ਗਣਨਾ।',
        },
      },
      {
        title: { en: '3. MACT Petition & Evidence', hi: '3. अधिकरण में दावा याचिका एवं गवाही', pa: '3. ਟ੍ਰਿਬਿਊਨਲ ਵਿੱਚ ਦਾਅਵਾ ਅਤੇ ਗਵਾਹੀ' },
        desc: {
          en: 'Examining treating doctors, eyewitnesses, and proving rash and negligent driving.',
          hi: 'प्रत्यक्षदर्शियों एवं चिकित्सकों के बयान दर्ज कराकर लापरवाही सिद्ध करना।',
          pa: 'ਡਾਕਟਰਾਂ ਅਤੇ ਚਸ਼ਮਦੀਦ ਗਵਾਹਾਂ ਦੇ ਬਿਆਨ ਕਰਵਾ ਕੇ ਲਾਪਰਵਾਹੀ ਸਾਬਤ ਕਰਨੀ।',
        },
      },
      {
        title: { en: '4. Award & Recovery Execution', hi: '4. अवार्ड एवं बीमा कंपनी से वसूली', pa: '4. ਅਵਾਰਡ ਅਤੇ ਬੀਮਾ ਕੰਪਨੀ ਤੋਂ ਵਸੂਲੀ' },
        desc: {
          en: 'Securing award deposit from insurance company or filing High Court appeal for enhancement.',
          hi: 'बीमा कंपनी से चेक प्राप्त कराना अथवा अपर्याप्त राशि होने पर हाईकोर्ट में वृद्धि हेतु अपील दाखिल करना।',
          pa: 'ਬੀਮਾ ਕੰਪਨੀ ਤੋਂ ਮੁਆਵਜ਼ਾ ਲੈਣਾ ਜਾਂ ਘੱਟ ਮੁਆਵਜ਼ਾ ਮਿਲਣ ਤੇ ਹਾਈ ਕੋਰਟ ਵਿੱਚ ਵਾਧੇ ਲਈ ਅਪੀਲ ਕਰਨਾ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Who pays the compensation in a motor accident claim?',
          hi: 'मोटर दुर्घटना दावे में मुआवजा कौन देता है?',
          pa: 'ਮੋਟਰ ਦੁਰਘਟਨਾ ਕੇਸ ਵਿੱਚ ਮੁਆਵਜ਼ਾ ਕੌਣ ਦਿੰਦਾ ਹੈ?',
        },
        answer: {
          en: 'If the offending vehicle has a valid commercial or private insurance policy, the insurance company is liable to indemnify and deposit the awarded compensation.',
          hi: 'यदि दुर्घटना करने वाले वाहन का वैध बीमा है, तो बीमा कंपनी अधिकरण द्वारा तय मुआवजा अदा करने के लिए कानूनी रूप से उत्तरदायी होती है।',
          pa: 'ਜੇਕਰ ਹਾਦਸਾ ਕਰਨ ਵਾਲੀ ਗੱਡੀ ਦਾ ਬੀਮਾ ਹੈ, ਤਾਂ ਬੀਮਾ ਕੰਪਨੀ ਅਦਾਲਤ ਵੱਲੋਂ ਤੈਅ ਕੀਤਾ ਮੁਆਵਜ਼ਾ ਦੇਣ ਦੀ ਜ਼ਿੰਮੇਵਾਰ ਹੁੰਦੀ ਹੈ।',
        },
      },
    ],
  },

  'revenue-tehsil-matters': {
    slug: 'revenue-tehsil-matters',
    statutoryContext: {
      en: 'Revenue proceedings in Kalka and Panchkula Tehsils are governed by the Punjab Land Revenue Act as applicable to Haryana. Key matters include sanctioning of mutation (inteqal), demarcation (nishan-dehi), correction of revenue entries, and appeals before the SDM, Collector, and Commissioner.',
      hi: 'कालका एवं पंचकूला तहसीलों में राजस्व कार्य पंजाब लैंड रेवेन्यू एक्ट (हरियाणा में लागू) के तहत होते हैं। इनमें इंतकाल दर्ज कराना, निशानदेही, जमाबंदी शुद्धि एवं एसडीएम व कलेक्टर कोर्ट में अपीलें प्रमुख हैं।',
      pa: 'ਕਾਲਕਾ ਅਤੇ ਪੰਚਕੂਲਾ ਤਹਿਸੀਲ ਵਿੱਚ ਮਾਲੀਆ ਕੰਮ ਪੰਜਾਬ ਲੈਂਡ ਰੈਵੇਨਿਊ ਐਕਟ ਅਧੀਨ ਹੁੰਦੇ ਹਨ। ਇਸ ਵਿੱਚ ਇੰਤਕਾਲ ਮਨਜ਼ੂਰ ਕਰਵਾਉਣਾ, ਨਿਸ਼ਾਨਦੇਹੀ, ਜਮ੍ਹਾਂਬੰਦੀ ਦਰੁਸਤੀ ਅਤੇ ਐੱਸ.ਡੀ.ਐੱਮ/ਕਲੈਕਟਰ ਅੱਗੇ ਅਪੀਲਾਂ ਸ਼ਾਮਲ ਹਨ।',
    },
    keySteps: [
      {
        title: { en: '1. Tehsil Record Procurement', hi: '1. तहसील रिकॉर्ड एवं फर्द प्राप्ति', pa: '1. ਤਹਿਸੀਲ ਰਿਕਾਰਡ ਅਤੇ ਫ਼ਰਦ ਲੈਣਾ' },
        desc: {
          en: 'Obtaining certified copies of Jamabandi, Inteqal register, and field book.',
          hi: 'पटवारी व कानूनगो से जमाबंदी, इंतकाल रजिस्टर एवं फील्ड बुक की प्रमाणित प्रतियां प्राप्त करना।',
          pa: 'ਪਟਵਾਰੀ ਤੇ ਕਾਨੂੰਨਗੋ ਕੋਲੋਂ ਜਮ੍ਹਾਂਬੰਦੀ, ਇੰਤਕਾਲ ਰਜਿਸਟਰ ਅਤੇ ਫੀਲਡ ਬੁੱਕ ਦੀਆਂ ਕਾਪੀਆਂ ਲੈਣੀਆਂ।',
        },
      },
      {
        title: { en: '2. Application before Tehsildar / SDM', hi: '2. तहसीलदार / एसडीएम के समक्ष आवेदन', pa: '2. ਤਹਿਸੀਲਦਾਰ / ਐੱਸ.ਡੀ.ਐੱਮ ਅੱਗੇ ਅਰਜ਼ੀ' },
        desc: {
          en: 'Drafting statutory application for demarcation or contested mutation.',
          hi: 'निशानदेही अथवा विवादित इंतकाल हेतु विधिक आवेदन प्रस्तुत करना।',
          pa: 'ਨਿਸ਼ਾਨਦੇਹੀ ਜਾਂ ਵਿਵਾਦਤ ਇੰਤਕਾਲ ਲਈ ਕਾਨੂੰਨੀ ਅਰਜ਼ੀ ਪੇਸ਼ ਕਰਨੀ।',
        },
      },
      {
        title: { en: '3. Field Demarcation & Objections', hi: '3. स्थलीय निशानदेही एवं आपत्तियां', pa: '3. ਮੌਕੇ \'ਤੇ ਨਿਸ਼ਾਨਦੇਹੀ ਅਤੇ ਇਤਰਾਜ਼' },
        desc: {
          en: 'Presence during ETS/tape demarcation and filing objections against flawed reports.',
          hi: 'राजस्व अधिकारियों की स्थलीय जांच के समय उपस्थित रहना एवं त्रुटिपूर्ण रिपोर्ट पर आपत्ति दर्ज कराना।',
          pa: 'ਮੌਕੇ \'ਤੇ ਨਿਸ਼ਾਨਦੇਹੀ ਸਮੇਂ ਹਾਜ਼ਰ ਰਹਿਣਾ ਅਤੇ ਗਲਤ ਰਿਪੋਰਟ \'ਤੇ ਕਾਨੂੰਨੀ ਇਤਰਾਜ਼ ਲਗਾਉਣਾ।',
        },
      },
      {
        title: { en: '4. Collector / Commissioner Appeal', hi: '4. कलेक्टर / कमिश्नर के समक्ष अपील', pa: '4. ਕਲੈਕਟਰ / ਕਮਿਸ਼ਨਰ ਅੱਗੇ ਅਪੀਲ' },
        desc: {
          en: 'Filing revenue appeal if rights are prejudiced by arbitrary lower revenue orders.',
          hi: 'निचले राजस्व अधिकारी के प्रतिकूल आदेश के विरुद्ध कलेक्टर के समक्ष राजस्व अपील प्रस्तुत करना।',
          pa: 'ਤਹਿਸੀਲਦਾਰ ਦੇ ਗਲਤ ਫ਼ੈਸਲੇ ਵਿਰੁੱਧ ਕਲੈਕਟਰ ਜਾਂ ਕਮਿਸ਼ਨਰ ਅੱਗੇ ਮਾਲੀਆ ਅਪੀਲ ਦਾਇਰ ਕਰਨੀ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What should be done if a contested mutation (inteqal) is rejected by the Tehsildar in Kalka?',
          hi: 'यदि कालका में तहसीलदार विवादित इंतकाल को खारिज कर दे तो क्या करना चाहिए?',
          pa: 'ਜੇਕਰ ਕਾਲਕਾ ਵਿੱਚ ਤਹਿਸੀਲਦਾਰ ਇੰਤਕਾਲ ਰੱਦ ਕਰ ਦੇਵੇ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
        },
        answer: {
          en: 'An appeal lies under Section 13 of the Land Revenue Act before the Sub-Divisional Magistrate (SDM) / Collector, Panchkula within the statutory period of 30 days.',
          hi: 'लैंड रेवेन्यू एक्ट की धारा 13 के अंतर्गत 30 दिनों के भीतर एसडीएम / कलेक्टर, पंचकूला के समक्ष वैधानिक अपील की जा सकती है।',
          pa: 'ਲੈਂਡ ਰੈਵੇਨਿਊ ਐਕਟ ਦੀ ਧਾਰਾ 13 ਅਧੀਨ 30 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਐੱਸ.ਡੀ.ਐੱਮ/ਕਲੈਕਟਰ ਪੰਚਕੂਲਾ ਅੱਗੇ ਅਪੀਲ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।',
        },
      },
    ],
  },

  'legal-notices-documentation': {
    slug: 'legal-notices-documentation',
    statutoryContext: {
      en: 'A statutory legal notice establishes formal pre-litigation demand, triggers limitation, and creates vital evidentiary foundation for cheque dishonour (Sec 138 NI Act), breach of contract, money recovery, and marital disputes.',
      hi: 'वैधानिक कानूनी नोटिस मुकदमेबाजी से पूर्व मांग स्थापित करता है, परिसीमा की गणना तय करता है तथा चेक बाउंस (धारा 138), अनुबंध उल्लंघन एवं धन वसूली में निर्णायक साक्ष्य बनता है।',
      pa: 'ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਅਦਾਲਤੀ ਕੇਸ ਤੋਂ ਪਹਿਲਾਂ ਮੰਗ ਪੱਤਰ ਹੁੰਦਾ ਹੈ ਜੋ ਚੈੱਕ ਬਾਊਂਸ (ਧਾਰਾ 138), ਸਮਝੌਤਾ ਉਲੰਘਣਾ ਅਤੇ ਪੈਸੇ ਦੀ ਵਸੂਲੀ ਵਿੱਚ ਜ਼ਰੂਰੀ ਸਬੂਤ ਬਣਦਾ ਹੈ।',
    },
    keySteps: [
      {
        title: { en: '1. Timeline & Document Scrutiny', hi: '1. समय-सीमा एवं दस्तावेजों की जांच', pa: '1. ਸਮਾਂ-ਸੀਮਾ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਜਾਂਚ' },
        desc: {
          en: 'Verifying return memo date for cheque bounce (30-day notice rule) or contract breach dates.',
          hi: 'चेक बाउंस में बैंक मेमो की तारीख (30 दिन का नियम) अथवा अनुबंध उल्लंघन की तारीखों का परीक्षण।',
          pa: 'ਚੈੱਕ ਬਾਊਂਸ ਵਿੱਚ ਬੈਂਕ ਮੈਮੋ ਦੀ ਤਾਰੀਖ਼ (30 ਦਿਨਾਂ ਦਾ ਨਿਯਮ) ਅਤੇ ਹੋਰ ਸ਼ਰਤਾਂ ਦੀ ਜਾਂਚ।',
        },
      },
      {
        title: { en: '2. Precision Statutory Drafting', hi: '2. सटीक वैधानिक ड्राफ्टिंग', pa: '2. ਸ਼ੁੱਧ ਕਾਨੂੰਨੀ ਡਰਾਫਟਿੰਗ' },
        desc: {
          en: 'Meticulously articulating underlying liability, consideration, default, and 15-day cure notice.',
          hi: 'वैधानिक दायित्व, लेन-देन, चूक एवं 15 दिन के भुगतान अवसर का स्पष्ट उल्लेख।',
          pa: 'ਦੇਣਦਾਰੀ, ਲੈਣ-ਦੇਣ, ਉਲੰਘਣਾ ਅਤੇ 15 ਦਿਨਾਂ ਦੇ ਸਮੇਂ ਦਾ ਕਾਨੂੰਨੀ ਜ਼ਿਕਰ।',
        },
      },
      {
        title: { en: '3. Speed Post Dispatch & Tracking', hi: '3. स्पीड पोस्ट प्रेषण एवं ट्रैकिंग', pa: '3. ਰਜਿਸਟਰਡ ਡਾਕ ਅਤੇ ਟਰੈਕਿੰਗ' },
        desc: {
          en: 'Dispatch via Registered AD / Speed Post with tracking receipt preservation for court filing.',
          hi: 'रजिस्टर्ड स्पीड पोस्ट द्वारा प्रेषण एवं कोर्ट में साक्ष्य हेतु ट्रैकिंग रिपोर्ट सुरक्षित रखना।',
          pa: 'ਰਜਿਸਟਰਡ ਡਾਕ ਰਾਹੀਂ ਭੇਜਣਾ ਅਤੇ ਅਦਾਲਤ ਲਈ ਡਾਕ ਰਸੀਦ ਤੇ ਟਰੈਕਿੰਗ ਰਿਪੋਰਟ ਸਾਂਭਣੀ।',
        },
      },
      {
        title: { en: '4. Reply Evaluation & Court Action', hi: '4. उत्तर की समीक्षा एवं अदालती कार्यवाही', pa: '4. ਜਵਾਬ ਦੀ ਸਮੀਖਿਆ ਅਤੇ ਕੇਸ ਦਾਇਰ ਕਰਨਾ' },
        desc: {
          en: 'Analyzing opposite party response or initiating criminal/civil complaint upon default.',
          hi: 'विपक्षी के उत्तर का विधिक परीक्षण करना अथवा समय समाप्त होने पर परिवाद दाखिल करना।',
          pa: 'ਦੂਜੀ ਧਿਰ ਦੇ ਜਵਾਬ ਦੀ ਪੜਤਾਲ ਜਾਂ ਮਿਆਦ ਪੁੱਗਣ ਤੇ ਅਦਾਲਤੀ ਕੇਸ ਦਾਇਰ ਕਰਨਾ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What is the mandatory notice period for cheque bounce under Section 138 NI Act?',
          hi: 'धारा 138 चेक बाउंस के तहत कानूनी नोटिस की अनिवार्य समय-सीमा क्या है?',
          pa: 'ਧਾਰਾ 138 ਚੈੱਕ ਬਾਊਂਸ ਅਧੀਨ ਕਾਨੂੰਨੀ ਨੋਟਿਸ ਦੀ ਕੀ ਮਿਆਦ ਹੁੰਦੀ ਹੈ?',
        },
        answer: {
          en: 'Notice must be dispatched within 30 days of receiving the cheque return memo from the bank, giving the drawer 15 days from receipt to pay the amount before a court complaint can be filed.',
          hi: 'बैंक से मेमो प्राप्त होने के 30 दिनों के भीतर नोटिस भेजना अनिवार्य है, जिसमें भुगतान हेतु 15 दिनों का समय दिया जाता है।',
          pa: 'ਬੈਂਕ ਮੈਮੋ ਮਿਲਣ ਦੇ 30 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਨੋਟਿਸ ਭੇਜਣਾ ਲਾਜ਼ਮੀ ਹੈ, ਜਿਸ ਵਿੱਚ ਪੈਸੇ ਦੇਣ ਲਈ 15 ਦਿਨਾਂ ਦਾ ਸਮਾਂ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
        },
      },
    ],
  },

  'drafting-pleadings-legal-opinions': {
    slug: 'drafting-pleadings-legal-opinions',
    statutoryContext: {
      en: 'Precision in legal drafting is the bedrock of successful litigation. We prepare plaints, written statements, replications, special power of attorney (SPA), commercial deeds, and comprehensive written title search opinions for clients in Kalka, Panchkula, and Chandigarh.',
      hi: 'सटीक विधिक ड्राफ्टिंग सफल मुकदमेबाजी की आधारशिला है। हम कालका, पंचकूला एवं चंडीगढ़ के मुवक्किलों हेतु वाद-पत्र, लिखित कथन (जवाबदावा), मुख्तारनामा (SPA/GPA), अनुबंध एवं व्यापक स्वत्व जांच (Title Opinion) तैयार करते हैं।',
      pa: 'ਸ਼ੁੱਧ ਕਾਨੂੰਨੀ ਡਰਾਫਟਿੰਗ ਹਰ ਸਫ਼ਲ ਕੇਸ ਦੀ ਨੀਂਹ ਹੁੰਦੀ ਹੈ। ਅਸੀਂ ਕਾਲਕਾ, ਪੰਚਕੂਲਾ ਅਤੇ ਚੰਡੀਗੜ੍ਹ ਦੇ ਲੋਕਾਂ ਲਈ ਦਾਅਵਾ ਅਰਜ਼ੀਆਂ, ਲਿਖਤੀ ਬਿਆਨ, ਪਾਵਰ ਆਫ਼ ਅਟਾਰਨੀ, ਇਕਰਾਰਨਾਮੇ ਅਤੇ ਟਾਈਟਲ ਰਾਇ ਤਿਆਰ ਕਰਦੇ ਹਾਂ।',
    },
    keySteps: [
      {
        title: { en: '1. Fact & Document Ingestion', hi: '1. तथ्यों एवं दस्तावेजों का संकलन', pa: '1. ਤੱਥਾਂ ਅਤੇ ਕਾਗਜ਼ਾਂ ਦੀ ਇਕੱਤਰਤਾ' },
        desc: {
          en: 'Examining chain of title, prior correspondence, orders, and identifying legal issues.',
          hi: 'स्वामित्व की श्रृंखला, पूर्व पत्राचार, अदालती आदेशों एवं कानूनी बिंदुओं की पड़ताल।',
          pa: 'ਜਾਇਦਾਦ ਦੇ ਪੁਰਾਣੇ ਰਿਕਾਰਡ, ਪੱਤਰ-ਵਿਹਾਰ ਅਤੇ ਕਾਨੂੰਨੀ ਨੁਕਤਿਆਂ ਦੀ ਪੜਤਾਲ।',
        },
      },
      {
        title: { en: '2. Case Law & Statutory Alignment', hi: '2. विधिक मिसालें एवं कानून का तालमेल', pa: '2. ਕਾਨੂੰਨੀ ਮਿਸਾਲਾਂ ਅਤੇ ਨਿਯਮਾਂ ਦਾ ਤਾਲਮੇਲ' },
        desc: {
          en: 'Cross-referencing applicable High Court and Supreme Court rulings.',
          hi: 'संबंधित हाईकोर्ट एवं सुप्रीम कोर्ट के नवीनतम निर्णयों का मिलान व संदर्भ।',
          pa: 'ਸਬੰਧਤ ਹਾਈ ਕੋਰਟ ਅਤੇ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਤਾਜ਼ਾ ਫ਼ੈਸਲਿਆਂ ਦਾ ਹਵਾਲਾ ਦੇਣਾ।',
        },
      },
      {
        title: { en: '3. Drafting & Vetting', hi: '3. सूक्ष्म प्रारूपण एवं सत्यापन', pa: '3. ਬਾਰੀਕੀ ਨਾਲ ਡਰਾਫਟਿੰਗ ਅਤੇ ਜਾਂਚ' },
        desc: {
          en: 'Structured drafting with verified clauses, verified affidavits, and complete prayer clauses.',
          hi: 'स्पष्ट विधिक धाराओं, शपथपत्रों एवं सटीक प्रार्थना (Prayer) खंडों के साथ प्रारूपण।',
          pa: 'ਕਾਨੂੰਨੀ ਨਿਯਮਾਂ, ਹਲਫ਼ਨਾਮਿਆਂ ਅਤੇ ਸਪਸ਼ਟ ਮੰਗਾਂ ਅਨੁਸਾਰ ਦਰਖ਼ਾਸਤ ਤਿਆਰ ਕਰਨੀ।',
        },
      },
      {
        title: { en: '4. Delivery & Execution Guidance', hi: '4. निष्पादन एवं हस्ताक्षर मार्गदर्शन', pa: '4. ਦਸਤਖ਼ਤ ਅਤੇ ਕਾਨੂੰਨੀ ਅਮਲ' },
        desc: {
          en: 'Guiding through notary stamping, attestation, and registry or court filing formalities.',
          hi: 'नोटरी, स्टाम्प ड्यूटी सत्यापन एवं न्यायालय अथवा रजिस्ट्री में निष्पादन का मार्गदर्शन।',
          pa: 'ਨੋਟਰੀ, ਅਸ਼ਟਾਮ ਡਿਊਟੀ ਅਤੇ ਤਹਿਸੀਲ ਜਾਂ ਅਦਾਲਤ ਵਿੱਚ ਕਾਰਵਾਈ ਦਾ ਮਾਰਗਦਰਸ਼ਨ।',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What is a Written Legal Opinion and when is it required?',
          hi: 'लिखित कानूनी राय (Legal Opinion) क्या है और इसकी आवश्यकता कब होती है?',
          pa: 'ਲਿਖਤੀ ਕਾਨੂੰਨੀ ਰਾਇ (Legal Opinion) ਕੀ ਹੁੰਦੀ ਹੈ ਅਤੇ ਇਸਦੀ ਲੋੜ ਕਦੋਂ ਪੈਂਦੀ ਹੈ?',
        },
        answer: {
          en: 'A Written Legal Opinion is a formal document assessing title clarity, litigation risk, or contractual validity before purchasing property, investing, or initiating court proceedings.',
          hi: 'लिखित विधिक राय एक औपचारिक दस्तावेज है जो संपत्ति खरीदने, निवेश करने अथवा मुकदमा शुरू करने से पूर्व स्वामित्व की स्पष्टता एवं कानूनी जोखिम का आंकलन करता है।',
          pa: 'ਲਿਖਤੀ ਕਾਨੂੰਨੀ ਰਾਇ ਇੱਕ ਦਸਤਾਵੇਜ਼ ਹੈ ਜੋ ਜਾਇਦਾਦ ਖ਼ਰੀਦਣ ਜਾਂ ਕੇਸ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਟਾਈਟਲ ਦੀ ਸੱਚਾਈ ਅਤੇ ਕਾਨੂੰਨੀ ਖ਼ਤਰਿਆਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ।',
        },
      },
    ],
  },
};
