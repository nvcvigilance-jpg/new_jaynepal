/**
 * Jay Nepal Traders (जय नेपाल ट्रेडर्स)
 * Pure Vanilla JavaScript Application Engine
 * No React or external frameworks required.
 */

// --- 1. Master Data: Products, Services, Hospitals & Company Info ---
const COMPANY = {
  nameNe: 'जय नेपाल ट्रेडर्स',
  nameEn: 'Jay Nepal Traders',
  taglineNe: 'अस्पताल, ओटी र सर्जिकल उपकरण आपूर्तिकर्ता',
  taglineEn: 'Surgical & Hospital Equipment Supplier',
  ddaReg: 'DDA दर्ता नं: १४२/MED/२०७९',
  ddaRegEn: 'DDA Reg: 142/MED/2079',
  panVat: 'PAN/VAT: ६१५४०९८२१',
  panVatEn: 'PAN/VAT: 615409821',
  isoReg: 'ISO 13485:2016 Certified',
  addressNe: 'त्रिपुरेश्वर, काठमाडौं, नेपाल (हस्पिटल इक्विपमेन्ट जोन)',
  addressEn: 'Tripureshwor, Kathmandu, Nepal (Hospital Equipment Zone)',
  phonePrimary: '+977-9851000000',
  phoneDisplay: '+977 985-1000000',
  phoneLandline: '01-4250000',
  email: 'info@jaynepaltraders.com.np',
  emailOrders: 'orders@jaynepaltraders.com.np',
  whatsapp: '9779851000000',
  hoursNe: 'आइतबार - शुक्रबार: बिहान ९:०० देखि साँझ ७:०० सम्म (शनिबार आकस्मिक कलमा)',
  hoursEn: 'Sun - Fri: 9:00 AM - 7:00 PM (Sat: Emergency on-call)',
};

const CATEGORIES = [
  { id: 'all', nameNe: 'सबै उत्पादनहरू', nameEn: 'All Products' },
  { id: 'surgical-instruments', nameNe: 'सर्जिकल इन्स्ट्रुमेन्ट्स', nameEn: 'Surgical Instruments' },
  { id: 'hospital-furniture', nameNe: 'अस्पताल फर्निचर र बेड', nameEn: 'Hospital Furniture' },
  { id: 'ot-icu-equipment', nameNe: 'ओटी र आइसियू उपकरण', nameEn: 'OT & ICU Equipment' },
  { id: 'patient-monitoring', nameNe: 'डायग्नोस्टिक र मोनिटरिङ', nameEn: 'Diagnostic & Monitoring' },
  { id: 'disposables-consumables', nameNe: 'डिस्पोजेबल र कन्ज्युमेबल्स', nameEn: 'Disposables & Consumables' },
  { id: 'orthopedic-implants', nameNe: 'अर्थोपेडिक र ल्याब', nameEn: 'Orthopedic & Lab' }
];

const PRODUCTS = [
  {
    id: 'prod-1',
    category: 'surgical-instruments',
    sku: 'JNT-SI-101',
    nameNe: 'प्रिमियम मेजर जनरल सर्जरी सेट (५४ पिस)',
    nameEn: 'Major General Surgery Instrument Set (54 Pcs)',
    descNe: 'उच्च गुणस्तरको जर्मन-ग्रेड एआइएसआइ ४२० स्टेनलेस स्टीलबाट बनेको पूर्ण अपरेसन थिएटर सेट। जंग प्रतिरोधी र अटोक्लेभेवल।',
    descEn: 'Comprehensive German-grade AISI 420 stainless steel surgical set for general surgery OT. Autoclavable, corrosion resistant with satin finish.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      '५४ वटा आवश्यक सर्जिकल औजारहरू सहित',
      'सिल्क-स्मूथ साटिन फिनिश (Glare Free)',
      '१३४ डिग्री सेल्सियस सम्म अटोक्लेभेवल',
      '५ वर्षको मटेरियल वारेन्टी'
    ],
    featuresEn: [
      '54 essential surgical instruments with storage tray',
      'Non-reflective satin finish for bright OT lights',
      'Fully autoclavable up to 134°C',
      '5-Year material warranty with replacement support'
    ],
    specs: {
      'Material': 'Medical Grade AISI 420 Stainless Steel',
      'Standard': 'ISO 13485, CE Medical Class I, DDA Nepal Registered',
      'Set Includes': 'Scalpel Handles, Mayo Scissors, Metzenbaum, Forceps, Needle Holders, Retractors',
      'Packaging': 'Heavy-duty Perforated Sterilizing Box with Silicone Mat'
    }
  },
  {
    id: 'prod-2',
    category: 'hospital-furniture',
    sku: 'JNT-HF-201',
    nameNe: 'इलेक्ट्रिक ५-फङ्सन आइसियू बेड (CPR सहित)',
    nameEn: 'Electric 5-Function ICU Hospital Bed with CPR',
    descNe: 'अस्पतालको आइसियू र सीसीयूका लागि डिजाइन गरिएको लिन्याक (Linak) युरोपेली मोटर जडित अत्याधुनिक ५-फङ्सन इलेक्ट्रिक बेड।',
    descEn: 'State-of-the-art 5-function electric critical care bed equipped with heavy-duty Linak motors, integrated nurse control panel, and quick emergency CPR.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: false,
    featuresNe: [
      'लिन्याक (Linak) डेनमार्क मोटर सिस्टम',
      'वान-टच आपतकालीन म्यानुअल र इलेक्ट्रिक सिपिआर',
      'ब्याकरेस्ट, नी-रेस्ट, उचाइ र ट्रेन्डेलेनबर्ग समायोजन',
      'एन्टी-ब्याक्टेरियल एबीएस साइड रेलिङ र ब्याट्री ब्याकअप'
    ],
    featuresEn: [
      'Linak Denmark medical actuator motor system',
      'One-touch dual emergency CPR (Mechanical & Electronic)',
      'Full adjustments: Backrest, Knee-rest, Height, Trendelenburg & Reverse',
      'Split ABS side rails with built-in angle indicators and battery backup'
    ],
    specs: {
      'Safe Working Load': '250 kg',
      'Dimensions': '2180 mm x 1020 mm x 480-780 mm',
      'Castors': '150mm Central Locking Luxury Castors',
      'Mattress': '4-inch High Density Anti-decubitus Medical Waterproof Mattress'
    }
  },
  {
    id: 'prod-3',
    category: 'ot-icu-equipment',
    sku: 'JNT-OT-301',
    nameNe: 'एलईडी डुअल-डोम अपरेसन थिएटर लाइट (छायाँरहित)',
    nameEn: 'Shadowless Dual-Dome Ceiling LED OT Surgical Light',
    descNe: 'जर्मन ओस्राम (OSRAM) एलईडी बल्ब प्रयोग गरिएको उच्च ल्युमिनेन्स छायाँरहित अप्रेशन थिएटर लाइट। प्राकृतिक डे-लाइट स्पेक्ट्रम।',
    descEn: 'High-intensity dual dome ceiling surgical shadowless light powered by German Osram LEDs. Delivers pristine 160,000 + 120,000 Lux illumination.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: false,
    featuresNe: [
      '१,६०,००० + १,२०,००० लक्स उच्च प्रकाश तीव्रता',
      '६०,००० घण्टा भन्दा बढी एलईडी आयु',
      'रङको तापक्रम ३८००K देखि ५०००K सम्म समायोज्य',
      'इन्डोस्कोपिक सर्जरी मोड र निर्बाध ३६० डिग्री रोटेसन'
    ],
    featuresEn: [
      '160,000 + 120,000 Lux ultra-bright illumination with depth penetration',
      '> 60,000 hours continuous LED lifespan',
      'Adjustable Color Temperature (3800K - 5000K, Ra ≥ 96)',
      'Dedicated Endo-surgery mode with smooth 360° spring arm rotation'
    ],
    specs: {
      'Light Field Diameter': '160 - 300 mm',
      'Bulb Technology': 'German OSRAM Medical LEDs',
      'Dome Sizes': '700 mm + 500 mm Dual Dome',
      'Certifications': 'CE, ISO 13485, IEC 60601-2-41'
    }
  },
  {
    id: 'prod-4',
    category: 'patient-monitoring',
    sku: 'JNT-PM-401',
    nameNe: '१२.१ इन्च मल्टिपारा पेसेन्ट मनिटर (ECG, SpO2, NIBP)',
    nameEn: '12.1" Multiparameter Patient Monitor (7-Parameter)',
    descNe: 'आइसियू, सीसीयू, इमर्जेन्सी र पोष्ट-अप वार्डहरूका लागि उच्च शुद्धता भएको ७-प्यारामिटर पेसेन्ट मनिटर।',
    descEn: 'High precision 12.1-inch color TFT multi-para vital signs monitor for ICU, OT, and emergency wards with arrhythmia analysis.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      'ECG, SpO2, NIBP, Respiration, 2-Temp, PR र optional IBP/EtCO2',
      '१२.१ इन्च एन्टि-ग्लेयर हाई रिजोल्युसन डिस्प्ले',
      '४ घण्टा सम्म चल्ने रिचार्जेबल लिथियम ब्याट्री',
      'सेन्ट्रल नर्सिङ स्टेसन (CMS) कनेक्टिभिटी'
    ],
    featuresEn: [
      'Standard 7 Parameters: ECG, SpO2, NIBP, RESP, 2-TEMP, PR, Arrhythmia',
      '12.1" anti-glare high-resolution color display',
      'Up to 4-hour rechargeable lithium battery backup',
      'CMS / LAN network compatible with 120-hour trend review'
    ],
    specs: {
      'Display': '12.1-inch Color TFT LCD with touch screen option',
      'Alarms': '3-Level Audio and Visual Alarms with nurse call',
      'Warranty': '2 Years Replacement Warranty with Local Calibration',
      'Power': '100-240V AC, 50/60Hz with auto-switch'
    }
  },
  {
    id: 'prod-5',
    category: 'disposables-consumables',
    sku: 'JNT-DC-501',
    nameNe: 'पाउडर-फ्री स्टेराइल लेटेक्स सर्जिकल ग्लोब्स (बाकस/५० जोडी)',
    nameEn: 'Powder-Free Sterile Latex Surgical Gloves (Box/50 Pairs)',
    descNe: 'शल्यक्रियाका लागि अधिकतम संवेदनशीलता र सुरक्षा प्रदान गर्ने मेडिकल ग्रेड माइक्रो-टेक्सचर्ड स्टेराइल सर्जिकल पञ्जा।',
    descEn: 'Gamma sterilized, powder-free medical grade latex surgical gloves offering optimal tactile sensitivity and barrier protection.',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      'गामा रेडिएसनद्वारा पूर्णतया स्टेराइलाइज्ड',
      'औंलाको ग्रिपका लागि माइक्रो-टेक्सचर्ड सतह',
      'कम प्रोटिन मात्रा - छालाको एलर्जी न्यूनीकरण',
      'साइजहरू: ६.०, ६.५, ७.०, ७.५ र ८.० उपलब्ध'
    ],
    featuresEn: [
      'Gamma radiation sterilized individual sterile peel packs',
      'Micro-textured surface for wet and dry surgical instrument grip',
      'Low protein content to minimize allergic reactions',
      'Available Sizes: 6.0, 6.5, 7.0, 7.5, 8.0'
    ],
    specs: {
      'Material': 'Natural High-Grade Rubber Latex',
      'Thickness': 'Finger: 0.20 mm, Palm: 0.18 mm',
      'AQL': '1.5 Surgical Grade Pin-hole inspection standard',
      'Packaging': '50 Pairs per Dispenser Box (Bulk cases of 500 pairs)'
    }
  },
  {
    id: 'prod-6',
    category: 'ot-icu-equipment',
    sku: 'JNT-OT-302',
    nameNe: '४०० वाट डिजिटल इलेक्ट्रोसर्जिकल युनिट (क्युटरी मेसिन)',
    nameEn: '400W Digital High-Frequency Electrosurgical Cautery Unit',
    descNe: 'मोनोपोलार र बाइपोलार कट तथा कोआगुलेसन सुविधा भएको माइक्रोप्रोसेसर नियन्त्रित डिजिटल क्युटरी मेसिन।',
    descEn: 'Microprocessor controlled 400W electrosurgical generator with monopolar and bipolar modes for general, laparoscopic, and cardiac surgery.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      '४०० वाट सम्मको शुद्ध कट र ब्लेन्ड पावर',
      'अन्डरवाटर टियुआरपी (TURP) मोड उपलब्ध',
      'पेसेन्ट रिटर्न प्लेट कन्ट्याक्ट क्वालिटी मोनिटरिङ (REM)',
      'फुटस्विच र ह्यान्डस्विच पेन्सिल पूर्ण सेट'
    ],
    featuresEn: [
      '400W maximum pure cut and blend coagulation',
      'Underwater TURP cutting capability for urology procedures',
      'Return Electrode Monitoring (REM) safety system prevents burns',
      'Dual footswitch, reusable bipolar forceps, and monopolar pencils included'
    ],
    specs: {
      'Operating Frequency': '430 kHz - 510 kHz',
      'Modes': 'Pure Cut, Blend 1/2, Coag, Spray, Bipolar Coag',
      'Safety Standard': 'IEC 60601-1, IEC 60601-2-2',
      'Warranty': '2 Years with Onsite Biomedical Service'
    }
  },
  {
    id: 'prod-7',
    category: 'hospital-furniture',
    sku: 'JNT-HF-202',
    nameNe: 'हाइड्रोलिक अपरेसन थिएटर टेबल (रेडियोलुसेन्ट टप)',
    nameEn: 'Hydraulic Multi-Purpose Operating OT Table (X-Ray Radiolucent)',
    descNe: 'सी-आर्म (C-Arm) एक्स-रे सुहाउँदो रेडियोलुसेन्ट टप भएको हेभी-ड्युटी हाइड्रोलिक सर्जिकल टेबल।',
    descEn: 'Heavy duty hydraulic mechanical operation theater table with radiolucent top for full body C-Arm fluoroscopy during surgery.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: false,
    featuresNe: [
      'उच्च गुणस्तरको स्टेनलेस स्टील ३०४ बेस र स्तम्भ',
      'सी-आर्म अनुकूल पारदर्शी टप',
      'किड्नी ब्रिज र हेड/लेग सेक्शन विच्छेद गर्न मिल्ने',
      'खुट्टाले चलाउन मिल्ने स्मूथ हाइड्रोलिक पम्प'
    ],
    featuresEn: [
      'AISI 304 stainless steel base chassis and telescopic column',
      'Full length X-Ray radiolucent table top for C-Arm imaging',
      'Built-in kidney bridge elevation and detachable head/leg sections',
      'Smooth foot-pedal operated hydraulic elevation'
    ],
    specs: {
      'Table Dimensions': '2000 mm x 500 mm',
      'Height Range': '700 mm to 950 mm',
      'Weight Capacity': '200 kg',
      'Trendelenburg': '±25° Tilt'
    }
  },
  {
    id: 'prod-8',
    category: 'patient-monitoring',
    sku: 'JNT-PM-402',
    nameNe: '१२-च्यानल डिजिटल ईसीजी मेसिन (अटो इन्टरप्रिटेसन सहित)',
    nameEn: '12-Channel Digital Electrocardiograph (ECG Machine)',
    descNe: '७ इन्चको रङ्गीन डिस्प्ले र थर्मल प्रिन्टर भएको उच्च शुद्धताको १२-च्यानल ईसीजी मेसिन।',
    descEn: 'Compact 12-channel electrocardiograph with 7-inch color LCD, automatic rhythm diagnosis interpretation, and high-speed thermal printer.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      '१२ वटा लिडको एकैपटक रेकर्डिङ र विश्लेषण',
      'स्वचालित रोग पहिचान (Auto Diagnostic Interpretation)',
      '२१६ मिमी चौडाइको रोल वा जेड-फोल्ड पेपर प्रिन्टिङ',
      'हजारौँ बिरामीको डेटा भण्डारण र USB/PC एक्सपोर्ट'
    ],
    featuresEn: [
      'Simultaneous 12-lead acquisition with digital filtering',
      'Built-in Glasgow ECG algorithm for automated diagnostic interpretation',
      '216mm wide thermal paper roll or Z-fold printing',
      'Internal memory stores over 1,000 cases with USB PDF export'
    ],
    specs: {
      'Display': '7-inch 800x480 Color LCD Screen',
      'Sampling Rate': '10,000 samples/sec per channel',
      'Battery': 'Built-in rechargeable Li-ion, up to 350 ECG printouts',
      'Certification': 'CE, ISO 13485, DDA Nepal Approved'
    }
  },
  {
    id: 'prod-9',
    category: 'disposables-consumables',
    sku: 'JNT-DC-502',
    nameNe: 'स्टेराइल आइभी क्यानुला विथ इन्जेक्सन पोर्ट (१०० पिस बाकस)',
    nameEn: 'Sterile IV Cannula with Injection Port & Wings (Box/100)',
    descNe: 'अस्पतालमा बिरामीलाई तरल पदार्थ र औषधि दिन प्रयोग गरिने एफईपी रेडियोप्याक क्याथेटर सहितको आइभी क्यानुला।',
    descEn: 'Medical grade sterile intravenous cannula with injection port and fixation wings. Kink-resistant FEP radiopaque catheter.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      'सुई घोच्दा कम दुखाइ हुने जापानी स्टेनलेस स्टील निडल',
      'रगतको प्रवाह तुरुन्त हेर्न मिल्ने पारदर्शी फ्ल्यासच्याम्बर',
      'कलर-कोडेड: १८G (हरियो), २०G (गुलाबी), २२G (नीलो), २४G (पहेंलो)',
      'नन-टक्सिक, पाइरोजेन-फ्री र ईटीओ ग्यास स्टेराइलाइज्ड'
    ],
    featuresEn: [
      'Japanese stainless steel needle with ultra-sharp 3-facet back-cut bevel',
      'Clear transparent flashback chamber for fast vein puncture confirmation',
      'Standard color coding: 18G (Green), 20G (Pink), 22G (Blue), 24G (Yellow)',
      'Pyrogen free, non-toxic, sterilized with Ethylene Oxide (EtO)'
    ],
    specs: {
      'Catheter Material': 'PTFE / FEP Radiopaque',
      'Shelf Life': '5 Years Sterile',
      'Packing': '100 pcs per Box (Bulk carton: 1000 pcs)',
      'Compliance': 'ISO 10555-5, CE Medical Device'
    }
  },
  {
    id: 'prod-10',
    category: 'orthopedic-implants',
    sku: 'JNT-OR-601',
    nameNe: 'अर्थोपेडिक ब्याट्री-अपरेटेड बोन ड्रिल र स सिस्टम',
    nameEn: 'Battery-Operated Orthopedic Bone Drill & Sagittal Saw System',
    descNe: 'अर्थोपेडिक तथा ट्रमा सर्जरीका लागि शक्तिशाली, हल्का र १३५ डिग्री सेल्सियस सम्म अटोक्लेभेवल ब्याट्री ड्रिल युनिट।',
    descEn: 'High-torque brushless battery operated bone drill and oscillating saw system for orthopedic trauma and joint replacement surgeries.',
    image: 'https://images.unsplash.com/photo-1583912267670-6575ad4736e8?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      'उच्च टर्क ब्रसलेस मोटर (१,१०० आरपीएम सम्म)',
      'द्रुत गतिको सेजिटेल स (१५,००० ओपीएम)',
      '२ वटा रिचार्जेबल ब्याट्री र फास्ट चार्जिङ डक',
      'ह्यान्डपिस पूर्णतया १३५ डिग्री सेल्सियस सम्म अटोक्लेभेवल'
    ],
    featuresEn: [
      'High-torque brushless motor (Variable 0-1,100 RPM)',
      'High speed sagittal saw attachment (15,000 OPM)',
      'Includes 2 high-capacity Li-ion batteries with sterilizing covers',
      'Entire handpiece is 135°C autoclavable'
    ],
    specs: {
      'Chuck Capacity': '0.8 - 8.0 mm Quick Coupling AO / Jacobs',
      'Noise Level': 'Under 65 dB for quiet OT environment',
      'Warranty': '2 Years on Handpiece & Charger',
      'Sterilization': 'Steam Autoclavable at 134°C'
    }
  },
  {
    id: 'prod-11',
    category: 'ot-icu-equipment',
    sku: 'JNT-OT-303',
    nameNe: 'हेभी-ड्युटी इलेक्ट्रिक सक्सन मेसिन (ड्युअल जार २ x ४ लिटर)',
    nameEn: 'Heavy-Duty Electric Surgical Suction Unit (Dual 2x4L Jars)',
    descNe: 'अपरेसन थिएटर र आइसियूका लागि तेलरहित पिस्टन पम्प भएको उच्च भ्याकुम र उच्च प्रवाह सक्सन मेसिन।',
    descEn: 'Oil-free high-vacuum high-flow surgical suction machine with unbreakable dual 4-liter polycarbonate collection jars for OT.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      'पम्प क्षमता: ८० लिटर/मिनेट सम्म उच्च प्रवाह',
      'ओभरफ्लो प्रोटेक्शन भल्भ र ब्याक्टेरियल फिल्टर',
      'फुट-स्विच र म्यानुअल रेगुलेटरबाट नियन्त्रण',
      'हस्पिटल ह्वील र ब्रेक सहितको मोबाइल ट्रली डिजाइन'
    ],
    featuresEn: [
      'Ultra high flow rate: > 80 Liters/min vacuum displacement',
      'Mechanical overflow protection valve and hydrophobic bacterial filter',
      'Foot-switch and front precision vacuum gauge control',
      'Heavy duty mobile cabinet on anti-static castor wheels with brakes'
    ],
    specs: {
      'Max Vacuum': '≥ 0.09 MPa (680 mmHg)',
      'Jars': '2 x 4000 ml Polycarbonate autoclavable jars',
      'Noise Level': '≤ 55 dB(A)',
      'Voltage': '220V AC, 50Hz, 180VA'
    }
  },
  {
    id: 'prod-12',
    category: 'hospital-furniture',
    sku: 'JNT-HF-203',
    nameNe: 'आकस्मिक क्र्यास कार्ट ट्रली (डिफिब्रिलेटर र अक्सिजन ट्रे सहित)',
    nameEn: 'Emergency Hospital Crash Cart Trolley with Defibrillator Shelf',
    descNe: 'आइसियू, इमर्जेन्सी र वार्डहरूमा जीवनरक्षक औषधि र उपकरण तत्काल ओसारपसार गर्न एबीएस प्लास्टिकको ५-दराज क्र्यास कार्ट।',
    descEn: 'Premium ABS emergency resuscitation crash cart with 5 central-locking drawers, defibrillator swivel tray, CPR board, and oxygen rack.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    urgentAvailable: true,
    featuresNe: [
      'एन्टी-इम्प्याक्ट एबीएस बडी र एल्युमिनियम फ्रेम',
      '५ वटा सेन्ट्रल लकिङ दराजहरू (पार्टिसन सहित)',
      'डिफिब्रिलेटर ट्रे, आइभी पोल र अक्सिजन सिलिन्डर होल्डर',
      'चारै पाङ्ग्रामा सेन्ट्रल ब्रेक र बम्पर प्रोटेक्सन'
    ],
    featuresEn: [
      'High-impact ABS injection-molded body with aluminum columns',
      '5 pull-out modular drawers with color classification and security seals',
      'Swiveling defibrillator shelf, CPR backboard, and O2 tank holder',
      'Luxury silent castors with two perimeter brakes'
    ],
    specs: {
      'Dimensions': '750 mm x 475 mm x 930 mm',
      'Accessories': 'IV Pole, Waste Bins, Sharps Container, Power Cord Socket',
      'Locking': 'One-key central lock + disposable plastic seal holes',
      'Weight': '48 kg'
    }
  }
];

const SERVICES = [
  {
    id: 'modular-ot',
    titleNe: 'मोडुलर अपरेसन थिएटर र ल्यामिनार एयरफ्लो',
    titleEn: 'Modular OT & Laminar Airflow Cleanrooms',
    descNe: 'अन्तर्राष्ट्रिय क्लास १००/१००० स्तरको ल्यामिनार एयरफ्लो (HEPA फिल्ट्रेसन), एन्टी-ब्याक्टेरियल वाल प्यानल र सिङ्गल कन्ट्रोल प्यानल युक्त पूर्ण मोडुलर ओटी डिजाइन तथा निर्माण।',
    descEn: 'Turnkey Class 100/1000 OT cleanrooms with HEPA air filtration, anti-microbial wall claddings, surgical pendants, and centralized digital surgeon control panels.',
    pointsNe: [
      'हेपा (HEPA) एयर फिल्ट्रेसन र टेम्परेचर कन्ट्रोल',
      'स्टेनलेस स्टील वा एन्टी-स्ट्याटिक प्यानल वाल',
      'सिगल/डबल आर्म सर्जिकल तथा एनेस्थेसिया पेन्डेन्ट'
    ],
    pointsEn: [
      'HEPA 99.997% laminar airflow air handling units (AHU)',
      'Hermetically sealing automatic sliding doors',
      'Motorized surgical & anesthesia ceiling pendants'
    ]
  },
  {
    id: 'icu-mgps',
    titleNe: 'आइसियू, सीसीयू र मेडिकल ग्यास पाइपलाइन (MGPS)',
    titleEn: 'ICU Infrastructure & Medical Gas Pipeline (MGPS)',
    descNe: 'अक्सिजन म्यानिफोल्ड, भ्याकुम प्लान्ट र बिरामी बेड हेड प्यानल सहितको मेडिकल ग्यास पाइपलाइन प्रणाली (HTM 02-01 स्ट्यान्डर्ड) जडान।',
    descEn: 'Complete medical gas engineering conforming to HTM 02-01 protocols. Fully automated oxygen manifold banks, vacuum plants, and patient bed head units.',
    pointsNe: [
      'डिजिटल अक्सिजन म्यानिफोल्ड र अलार्म प्यानल',
      'आईसियू बेड हेड प्यानल विथ ग्यास आउटलेट',
      'सुरक्षित पाइपलाइन इन्जिनियरिङ र प्रेसर टेस्टिङ'
    ],
    pointsEn: [
      'Automated digital oxygen manifold changeover systems',
      'Extruded aluminum bedhead units with gas outlets and nurse calls',
      'Full safety pressure testing and DDA certification'
    ]
  },
  {
    id: 'biomedical-amc',
    titleNe: 'बायोमेडिकल मर्मत, क्यालिब्रेसन र वार्षिक सम्भार (AMC)',
    titleEn: 'Biomedical Engineering, AMC & Calibration',
    descNe: 'अस्पतालका भेन्टिलेटर, ओटी लाइट, क्युटरी, मनिटर र एनेस्थेसिया मेसिनको नियमित क्यालिब्रेसन, स्पेयर पार्टस र वार्षिक सम्भार सम्झौता।',
    descEn: 'Preventive maintenance contracts (AMC/CMC), biomedical calibration, and rapid breakdown troubleshooting with factory trained engineers.',
    pointsNe: [
      '२४ घण्टे आकस्मिक बायोमेडिकल अन-कल सपोर्ट',
      'अन्तर्राष्ट्रिय क्यालिब्रेसन टेस्ट रिपोर्ट र स्टिकर',
      'ओरिजिनल स्पेयर पार्टसको सहज उपलब्धता'
    ],
    pointsEn: [
      '24/7 on-call technical engineers for hospital emergencies',
      'Official calibration certificates with NIST-traceable testing tools',
      'Guaranteed genuine OEM spare parts availability'
    ]
  },
  {
    id: 'tender-supply',
    titleNe: 'अस्पताल थोक टेन्डर आपूर्ति र प्रोजेक्ट कन्सलटिङ',
    titleEn: 'Hospital Bulk Tender Supply & Project Consulting',
    descNe: 'नयाँ अस्पताल, मेडिकल कलेज वा स्तरोन्नति हुने स्वास्थ्य संस्थाहरूका लागि टेन्डर स्पेसिफिकेसन निर्माण देखि थोक सामान आपूर्ति सम्म।',
    descEn: 'End-to-end medical equipment procurement for new hospital setups, medical colleges, and provincial healthcare modernization tenders.',
    pointsNe: [
      'सरकारी र निजी टेन्डर स्पेसिफिकेसन सहयोग',
      'आधिकारिक भ्याट बिल र लचकदार भुक्तानी सुविधा',
      'काठमाडौंबाट नेपालका ७७ वटै जिल्लामा डेलिभरी'
    ],
    pointsEn: [
      'Full tender technical specification drafting and compliance',
      '100% Tax/VAT invoiced bulk supply with institutional credit terms',
      'Expedited cargo logistics from Kathmandu to all 77 districts'
    ]
  }
];

const HOSPITALS = [
  { name: 'वीर अस्पताल (Bir Hospital)', location: 'काठमाडौं (Kathmandu)', type: 'केन्द्रीय सरकारी अस्पताल' },
  { name: 'त्रि.वि. शिक्षण अस्पताल (TUTH)', location: 'महाराजगञ्ज (Maharajgunj)', type: 'शिक्षण अस्पताल' },
  { name: 'पाटन स्वास्थ्य विज्ञान प्रतिष्ठान (Patan Hospital)', location: 'ललितपुर (Lalitpur)', type: 'प्रतिष्ठान अस्पताल' },
  { name: 'नेपाल मेडिसिटी अस्पताल (Nepal Mediciti)', location: 'भैंसेपाटी (Lalitpur)', type: 'सुपर स्पेसियालिटी हस्पिटल' },
  { name: 'बी एण्ड बी अस्पताल (B&B Hospital)', location: 'ग्वार्को (Lalitpur)', type: 'अर्थोपेडिक र ट्रमा सेन्टर' },
  { name: 'चितवन मेडिकल कलेज (CMC)', location: 'भरतपुर (Chitwan)', type: 'मेडिकल कलेज तथा अस्पताल' },
  { name: 'विराट मेडिकल कलेज', location: 'विराटनगर (Biratnagar)', type: 'शिक्षण अस्पताल' },
  { name: 'पोखरा स्वास्थ्य विज्ञान प्रतिष्ठान', location: 'पोखरा (Pokhara)', type: 'प्रादेशिक रेफरल अस्पताल' },
  { name: 'लुम्बिनी प्रादेशिक अस्पताल', location: 'बुटवल (Butwal)', type: 'प्रादेशिक अस्पताल' }
];

// --- 2. Application State ---
let currentLang = 'ne'; // 'ne' or 'en'
let currentCategory = 'all';
let searchQuery = '';
let filterUrgent = false;
let cart = []; // [{ id, qty }]

// Load Cart from LocalStorage
try {
  const savedCart = localStorage.getItem('jaynepal_cart_pure');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn('Could not read cart', e);
}

function saveCart() {
  try {
    localStorage.setItem('jaynepal_cart_pure', JSON.stringify(cart));
  } catch (e) {
    console.warn('Could not save cart', e);
  }
  updateCartUI();
}

// --- 3. UI Helpers & Icons (Clean SVG Generators) ---
function iconSvg(name, size = 18, color = 'currentColor') {
  const s = `width="${size}" height="${size}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" viewBox="0 0 24 24"`;
  switch (name) {
    case 'phone':
      return `<svg ${s}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
    case 'mail':
      return `<svg ${s}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
    case 'map-pin':
      return `<svg ${s}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
    case 'clock':
      return `<svg ${s}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    case 'whatsapp':
      return `<svg ${s}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
    case 'cart':
      return `<svg ${s}><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>`;
    case 'check':
      return `<svg ${s}><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    case 'shield':
      return `<svg ${s}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>`;
    case 'truck':
      return `<svg ${s}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>`;
    case 'wrench':
      return `<svg ${s}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
    case 'building':
      return `<svg ${s}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M8 14h.01"></path><path d="M16 14h.01"></path></svg>`;
    case 'arrow-right':
      return `<svg ${s}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;
    case 'star':
      return `<svg ${s} fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    case 'plus':
      return `<svg ${s}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
    case 'minus':
      return `<svg ${s}><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
    case 'trash':
      return `<svg ${s}><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>`;
    case 'x':
      return `<svg ${s}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    case 'chevron-up':
      return `<svg ${s}><polyline points="18 15 12 9 6 15"></polyline></svg>`;
    case 'send':
      return `<svg ${s}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
    case 'external':
      return `<svg ${s}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
    default:
      return `<svg ${s}><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

// Custom Jay Nepal Traders Scalable Vector Logo
function getLogoSvg() {
  return `
  <svg class="logo-symbol" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jntRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" />
        <stop offset="100%" stop-color="#b91c1c" />
      </linearGradient>
      <linearGradient id="jntBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#1d4ed8" />
      </linearGradient>
    </defs>
    <!-- Outer Shield / Circle Container -->
    <rect x="10" y="10" width="180" height="180" rx="36" fill="#0f172a" />
    <rect x="14" y="14" width="172" height="172" rx="32" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
    
    <!-- Medical Cross Left/Top Red Arm -->
    <path d="M72 35 H128 V72 H165 V128 H128 V165 H72 V128 H35 V72 H72 Z" fill="#ffffff" opacity="0.08" />
    
    <!-- Red Left Half Cross -->
    <path d="M75 40 H100 V160 H75 V125 H40 V75 H75 Z" fill="url(#jntRedGrad)" />
    <!-- Blue Right Half Cross -->
    <path d="M100 40 H125 V75 H160 V125 H125 V160 H100 Z" fill="url(#jntBlueGrad)" />

    <!-- Stethoscope Graphic on Red side -->
    <path d="M60 85 C60 105 85 115 100 115" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none" />
    <circle cx="60" cy="80" r="5" fill="#ffffff" />
    
    <!-- Syringe Graphic on Blue side -->
    <line x1="105" y1="95" x2="135" y2="65" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
    <line x1="130" y1="60" x2="140" y2="70" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
    <line x1="135" y1="65" x2="145" y2="55" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />

    <!-- Center Sparkle / Star of Life -->
    <circle cx="100" cy="100" r="14" fill="#ffffff" />
    <path d="M100 90 V110 M90 100 H110" stroke="#0f172a" stroke-width="4" stroke-linecap="round" />
  </svg>
  `;
}

// Show Toast notice
function showToast(msg) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${iconSvg('check', 16, '#10b981')} <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// --- 4. Render Functions ---

function setLanguage(lang) {
  currentLang = lang;
  document.body.className = lang === 'en' ? 'lang-en' : 'lang-ne';
  document.documentElement.lang = lang;
  
  // Update lang button text
  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) {
    langBtn.innerHTML = lang === 'ne' ? '🇬🇧 English' : '🇳🇵 नेपाली';
  }

  // Update dynamic content elements with data-lang-ne / data-lang-en
  document.querySelectorAll('[data-lang-ne]').forEach(el => {
    el.textContent = lang === 'ne' ? el.getAttribute('data-lang-ne') : el.getAttribute('data-lang-en');
  });

  // Re-render categories & products
  renderCategoryTabs();
  renderProducts();
  renderServices();
  renderHospitals();
  updateCartUI();
}

function renderCategoryTabs() {
  const container = document.getElementById('categoryTabsContainer');
  if (!container) return;

  const isNe = currentLang === 'ne';
  container.innerHTML = CATEGORIES.map(cat => `
    <button 
      type="button" 
      class="category-tab ${cat.id === currentCategory ? 'active' : ''}" 
      onclick="selectCategory('${cat.id}')"
    >
      ${isNe ? cat.nameNe : cat.nameEn}
    </button>
  `).join('');
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderProducts();
}

function toggleUrgentFilter() {
  filterUrgent = !filterUrgent;
  const toggleBtn = document.getElementById('btnFilterUrgent');
  if (toggleBtn) {
    toggleBtn.classList.toggle('active', filterUrgent);
  }
  renderProducts();
}

function handleSearchInput(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productCountDisplay');
  if (!grid) return;

  const isNe = currentLang === 'ne';

  // Filter products
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchesUrgent = !filterUrgent || p.urgentAvailable;
    const titleMatch = (p.nameNe + ' ' + p.nameEn + ' ' + p.sku + ' ' + p.descNe + ' ' + p.descEn).toLowerCase().includes(searchQuery);
    return matchesCategory && matchesUrgent && titleMatch;
  });

  if (countEl) {
    countEl.textContent = isNe ? `(कूल ${filtered.length} वटा सामान भेटियो)` : `(Found ${filtered.length} items)`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <p style="font-weight: 700; color: #475569; font-size: 1rem;">
          ${isNe ? 'कुनै सामान भेटिएन। कृपया अन्य शब्द खोजी गर्नुहोस् वा फिल्टर हटाउनुहोस्।' : 'No items matched your query. Please adjust your search or category filter.'}
        </p>
        <button type="button" onclick="resetFilters()" class="btn-primary" style="margin-top: 1rem;">
          ${isNe ? 'सबै सामान हेर्नुहोस्' : 'Reset All Filters'}
        </button>
      </div>
    `;
    return;
  }

  const cartProductIds = new Set(cart.map(c => c.id));

  grid.innerHTML = filtered.map(prod => {
    const isAdded = cartProductIds.has(prod.id);
    const title = isNe ? prod.nameNe : prod.nameEn;
    const desc = isNe ? prod.descNe : prod.descEn;
    const features = isNe ? prod.featuresNe : prod.featuresEn;

    // Single item instant WhatsApp order message
    const waText = isNe
      ? `नमस्ते जय नेपाल ट्रेडर्स, मलाई ${prod.nameNe} (SKU: ${prod.sku}) को अस्पताल दररेट र तत्काल डेलिभरी बारे जानकारी चाहिएको छ।`
      : `Hello Jay Nepal Traders, I would like to inquire about ${prod.nameEn} (SKU: ${prod.sku}).`;

    return `
      <div class="product-card" id="card-${prod.id}">
        <div class="product-thumb-container" onclick="openProductDetail('${prod.id}')">
          <img src="${prod.image}" alt="${title}" class="product-thumb" loading="lazy" />
          <div class="product-badges-overlay">
            <span class="badge-stock">${isNe ? 'स्टक उपलब्ध' : 'In Stock'}</span>
            ${prod.urgentAvailable ? `<span class="badge-urgent">${isNe ? '४-घण्टा डेलिभरी' : '4-Hr Dispatch'}</span>` : ''}
          </div>
        </div>

        <div class="product-body">
          <div class="product-sku">${prod.sku}</div>
          <h3 class="product-name" onclick="openProductDetail('${prod.id}')">${title}</h3>
          <p class="product-desc">${desc}</p>

          <ul class="product-features-list">
            ${features.slice(0, 2).map(f => `
              <li class="feature-bullet">
                ${iconSvg('check', 14, '#059669')}
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <div class="product-actions-footer">
            <button 
              type="button" 
              class="btn-add-quote ${isAdded ? 'added' : ''}" 
              onclick="addToCart('${prod.id}')"
            >
              ${iconSvg(isAdded ? 'check' : 'cart', 15)}
              <span>${isAdded ? (isNe ? 'कोटेशनमा थपियो ✓' : 'Added to Quote ✓') : (isNe ? '+ कोटेशन सूचीमा थप्नुहोस्' : '+ Add to Quotation')}</span>
            </button>

            <div class="product-direct-row">
              <a 
                href="https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(waText)}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-direct-wa"
              >
                ${iconSvg('whatsapp', 13, '#059669')}
                <span>${isNe ? 'WhatsApp अर्डर' : 'WhatsApp'}</span>
              </a>

              <button 
                type="button" 
                class="btn-view-details" 
                onclick="openProductDetail('${prod.id}')"
              >
                <span>${isNe ? 'विवरण हेर्नुहोस्' : 'Details'}</span>
                ${iconSvg('arrow-right', 12)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  filterUrgent = false;
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';
  const toggleBtn = document.getElementById('btnFilterUrgent');
  if (toggleBtn) toggleBtn.classList.remove('active');
  renderCategoryTabs();
  renderProducts();
}

function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  const isNe = currentLang === 'ne';

  container.innerHTML = SERVICES.map(srv => {
    const title = isNe ? srv.titleNe : srv.titleEn;
    const desc = isNe ? srv.descNe : srv.descEn;
    const points = isNe ? srv.pointsNe : srv.pointsEn;

    const waMsg = isNe
      ? `नमस्ते जय नेपाल ट्रेडर्स, मलाई ${srv.titleNe} बारे परामर्श चाहिएको छ।`
      : `Hello Jay Nepal Traders, I would like to consult about ${srv.titleEn}.`;

    return `
      <div class="service-card">
        <div>
          <div class="service-icon-box">
            ${iconSvg('wrench', 24, '#dc2626')}
          </div>
          <h3 class="service-title">${title}</h3>
          <p class="service-desc">${desc}</p>

          <ul class="service-points">
            ${points.map(pt => `
              <li class="service-point">
                ${iconSvg('check', 15, '#059669')}
                <span>${pt}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="service-card-action">
          <button type="button" class="btn-primary" style="padding: 0.45rem 0.95rem; font-size: 0.775rem;" onclick="openQuickRfq('${title}')">
            <span>${isNe ? 'परामर्श लिनुहोस्' : 'Consult Now'}</span>
            ${iconSvg('arrow-right', 13)}
          </button>

          <a 
            href="https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(waMsg)}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-direct-wa"
            style="padding: 0.45rem 0.85rem;"
          >
            ${iconSvg('whatsapp', 14, '#059669')}
            <span>${isNe ? 'ह्वाट्सएप' : 'WhatsApp'}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function renderHospitals() {
  const container = document.getElementById('hospitalsGrid');
  if (!container) return;

  container.innerHTML = HOSPITALS.map(h => `
    <div class="hospital-card">
      <div class="hospital-icon">
        ${iconSvg('building', 18, '#dc2626')}
      </div>
      <div>
        <div class="hospital-name">${h.name}</div>
        <div class="hospital-location">${h.location} • ${h.type}</div>
      </div>
    </div>
  `).join('');
}

// --- 5. Cart & Slide-Over Quotation Drawer Management ---

function addToCart(productId, quantity = 1) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ id: productId, qty: quantity });
  }
  saveCart();
  renderProducts(); // Updates 'added' button state
  showToast(currentLang === 'ne' ? 'सामान कोटेशन सूचीमा थपियो!' : 'Item added to quote list!');
}

function updateCartQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
  }
  saveCart();
  renderProducts();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCart();
  renderProducts();
}

function clearCart() {
  cart = [];
  saveCart();
  renderProducts();
}

function updateCartUI() {
  const isNe = currentLang === 'ne';
  const totalItemsCount = cart.reduce((acc, c) => acc + c.qty, 0);

  // Update Nav Badge
  const navBadge = document.getElementById('navCartCount');
  if (navBadge) {
    navBadge.textContent = totalItemsCount;
    navBadge.style.display = totalItemsCount > 0 ? 'inline-flex' : 'none';
  }

  // Update Floating Cart Button
  const floatCartBtn = document.getElementById('floatingCartBtn');
  const floatCartCount = document.getElementById('floatingCartCount');
  if (floatCartBtn && floatCartCount) {
    floatCartBtn.style.display = totalItemsCount > 0 ? 'inline-flex' : 'none';
    floatCartCount.textContent = totalItemsCount;
  }

  // Update Drawer Content
  const drawerBody = document.getElementById('cartDrawerBody');
  const drawerFooter = document.getElementById('cartDrawerFooter');
  if (!drawerBody) return;

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="cart-empty-state">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">📋</div>
        <h4 style="font-weight: 800; color: #0f172a; margin-bottom: 0.25rem;">
          ${isNe ? 'तपाईंको कोटेशन सूची खाली छ' : 'Your Quote List is Empty'}
        </h4>
        <p style="font-size: 0.8rem; color: #64748b; margin-bottom: 1.25rem;">
          ${isNe ? 'क्याटलगबाट अस्पतालका लागि आवश्यक सर्जिकल वा मेडिकल उपकरणहरू थप्नुहोस्।' : 'Browse the catalog and add products you require institutional quotations for.'}
        </p>
        <button type="button" class="btn-primary" onclick="closeCartDrawer(); scrollToSection('catalog');">
          ${isNe ? 'क्याटलग हेर्नुहोस्' : 'Browse Products'}
        </button>
      </div>
    `;
    if (drawerFooter) drawerFooter.style.display = 'none';
    return;
  }

  if (drawerFooter) drawerFooter.style.display = 'block';

  drawerBody.innerHTML = `
    <ul class="cart-items-list">
      ${cart.map(c => {
        const prod = PRODUCTS.find(p => p.id === c.id);
        if (!prod) return '';
        const title = isNe ? prod.nameNe : prod.nameEn;

        return `
          <li class="cart-item">
            <img src="${prod.image}" alt="${title}" class="cart-item-img" />
            <div class="cart-item-info">
              <div class="cart-item-title">${title}</div>
              <div class="cart-item-sku">${prod.sku}</div>
              <div class="cart-item-controls">
                <button type="button" class="btn-qty" onclick="updateCartQty('${prod.id}', -1)">-</button>
                <span class="qty-val">${c.qty}</span>
                <button type="button" class="btn-qty" onclick="updateCartQty('${prod.id}', 1)">+</button>
                <button type="button" class="btn-remove-item" onclick="removeFromCart('${prod.id}')" title="हटाउनुहोस्">
                  ${iconSvg('trash', 14, '#ef4444')}
                </button>
              </div>
            </div>
          </li>
        `;
      }).join('')}
    </ul>
  `;
}

function openCartDrawer() {
  updateCartUI();
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.remove('open');
}

// Send Quote List via WhatsApp
function sendCartWhatsApp() {
  if (cart.length === 0) return;

  const isNe = currentLang === 'ne';
  const hospitalNameInput = document.getElementById('cartHospitalName');
  const hospitalName = hospitalNameInput && hospitalNameInput.value.trim() ? hospitalNameInput.value.trim() : (isNe ? 'संस्था' : 'Hospital');

  let message = isNe
    ? `*नमस्ते जय नेपाल ट्रेडर्स,*\nहाम्रो संस्था (*${hospitalName}*) का लागि देहाय बमोजिमका सामानहरूको आधिकारिक अस्पताल दररेट र कोटेशन उपलब्ध गराइदिनुहुन अनुरोध छ:\n\n`
    : `*Hello Jay Nepal Traders,*\nWe (*${hospitalName}*) would like to request an official institutional quotation for the following items:\n\n`;

  cart.forEach((c, index) => {
    const prod = PRODUCTS.find(p => p.id === c.id);
    if (prod) {
      const name = isNe ? prod.nameNe : prod.nameEn;
      message += `${index + 1}. *${name}*\n   - SKU: ${prod.sku}\n   - परिमाण (Quantity): ${c.qty}\n\n`;
    }
  });

  message += isNe
    ? `कृपया भ्याट बिल, वारेन्टी र डेलिभरी समय सहितको कोटेशन पठाइदिनुहोला। धन्यवाद।`
    : `Please send an official quotation including VAT tax breakdown, delivery timeline, and warranty terms. Thank you.`;

  window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
}

// Send Quote List via Email
function sendCartEmail() {
  if (cart.length === 0) return;

  const isNe = currentLang === 'ne';
  const hospitalNameInput = document.getElementById('cartHospitalName');
  const hospitalName = hospitalNameInput && hospitalNameInput.value.trim() ? hospitalNameInput.value.trim() : (isNe ? 'अस्पताल' : 'Hospital');

  const subject = `[कोटेशन अनुरोध] अस्पताल उपकरण - ${hospitalName}`;
  let body = `जय नेपाल ट्रेडर्स,\n\nहामीलाई देहाय अनुसारका सामानहरूको आधिकारिक दररेट तथा कोटेशन आवश्यक परेको छ:\n\n`;

  cart.forEach((c, index) => {
    const prod = PRODUCTS.find(p => p.id === c.id);
    if (prod) {
      body += `${index + 1}. ${prod.nameNe} (${prod.nameEn})\n   SKU: ${prod.sku} | Quantity: ${c.qty}\n\n`;
    }
  });

  body += `संस्थाको नाम: ${hospitalName}\nसम्पर्क ठेगाना:\n\nधन्यवाद।`;

  window.location.href = `mailto:${COMPANY.emailOrders}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// --- 6. Product Detail Modal & Quick RFQ Modal ---

function openProductDetail(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const isNe = currentLang === 'ne';
  const title = isNe ? prod.nameNe : prod.nameEn;
  const desc = isNe ? prod.descNe : prod.descEn;
  const features = isNe ? prod.featuresNe : prod.featuresEn;

  const modal = document.getElementById('productDetailModal');
  const content = document.getElementById('productDetailContent');
  if (!modal || !content) return;

  const waMsg = isNe
    ? `नमस्ते जय नेपाल ट्रेडर्स, मलाई ${prod.nameNe} (SKU: ${prod.sku}) बारे थप बुझ्नु परेको छ।`
    : `Hello Jay Nepal Traders, I would like to inquire about ${prod.nameEn} (SKU: ${prod.sku}).`;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;" class="product-modal-grid">
      <div>
        <div style="aspect-ratio: 16/10; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); background: #0f172a;">
          <img src="${prod.image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem;">
          <span class="tag-pill" style="background: #fee2e2; color: #991b1b; font-weight: 800;">DDA Registered</span>
          <span class="tag-pill">ISO 13485</span>
          <span class="tag-pill">CE Certified</span>
          ${prod.urgentAvailable ? '<span class="tag-pill" style="background: #ecfdf5; color: #065f46; font-weight: 700;">Fast 4-Hr Dispatch</span>' : ''}
        </div>
      </div>

      <div>
        <div style="font-family: var(--font-en); font-size: 0.75rem; font-weight: 800; color: var(--primary); margin-bottom: 0.25rem;">
          ${prod.sku}
        </div>
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; line-height: 1.3; margin-bottom: 0.75rem;">
          ${title}
        </h2>
        <p style="font-size: 0.875rem; color: #475569; line-height: 1.6; margin-bottom: 1rem;">
          ${desc}
        </p>

        <h4 style="font-size: 0.85rem; font-weight: 800; color: #0f172a; margin-bottom: 0.4rem;">
          ${isNe ? 'मुख्य विशेषताहरू:' : 'Key Features:'}
        </h4>
        <ul style="list-style: none; margin-bottom: 1.25rem;">
          ${features.map(f => `
            <li style="display: flex; align-items: flex-start; gap: 0.4rem; font-size: 0.8rem; color: #334155; margin-bottom: 0.35rem;">
              ${iconSvg('check', 14, '#059669')}
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <h4 style="font-size: 0.85rem; font-weight: 800; color: #0f172a; margin-bottom: 0.4rem;">
          ${isNe ? 'प्राविधिक विवरण (Specifications):' : 'Technical Specifications:'}
        </h4>
        <table class="spec-table">
          <tbody>
            ${Object.entries(prod.specs).map(([key, val]) => `
              <tr>
                <th>${key}</th>
                <td>${val}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap;">
          <button type="button" class="btn-primary" onclick="addToCart('${prod.id}'); closeProductDetail();">
            ${iconSvg('cart', 16)}
            <span>${isNe ? 'कोटेशन सूचीमा थप्नुहोस्' : 'Add to Quotation'}</span>
          </button>

          <a 
            href="https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(waMsg)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-whatsapp"
          >
            ${iconSvg('whatsapp', 16)}
            <span>${isNe ? 'ह्वाट्सएपमा तत्काल कुरा गर्नुहोस्' : 'WhatsApp Chat'}</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProductDetail() {
  const modal = document.getElementById('productDetailModal');
  if (modal) modal.classList.remove('open');
}

function openQuickRfq(serviceOrProduct = '') {
  const modal = document.getElementById('quickRfqModal');
  const reqInput = document.getElementById('rfqRequirements');
  if (reqInput && serviceOrProduct) {
    reqInput.value = serviceOrProduct;
  }
  if (modal) modal.classList.add('open');
}

function closeQuickRfq() {
  const modal = document.getElementById('quickRfqModal');
  if (modal) modal.classList.remove('open');
}

function handleQuickRfqSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('rfqName').value.trim();
  const phone = document.getElementById('rfqPhone').value.trim();
  const hospital = document.getElementById('rfqHospital').value.trim();
  const requirements = document.getElementById('rfqRequirements').value.trim();

  const isNe = currentLang === 'ne';
  const text = isNe
    ? `*नमस्ते जय नेपाल ट्रेडर्स,*\nद्रुत कोटेशन सोधपुछ (Quick RFQ):\n\nनाम: ${name}\nसंस्था: ${hospital || 'अस्पताल/क्लिनिक'}\nफोन: ${phone}\nमाग गरिएको सामान/सेवा: ${requirements}`
    : `*Hello Jay Nepal Traders,*\nQuick RFQ Inquiry:\n\nName: ${name}\nFacility: ${hospital || 'Hospital/Clinic'}\nPhone: ${phone}\nRequirements: ${requirements}`;

  window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  closeQuickRfq();
  showToast(isNe ? 'सोधपुछ सन्देश तयार भयो!' : 'Inquiry message prepared!');
}

function handleContactFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const hospital = document.getElementById('contactHospital').value.trim();
  const subject = document.getElementById('contactSubject').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  const isNe = currentLang === 'ne';
  const text = isNe
    ? `*सम्पर्क फारम सोधपुछ (Jay Nepal Traders):*\n\nनाम: ${name}\nसंस्था: ${hospital || 'व्यक्तिगत'}\nफोन: ${phone}\nइमेल: ${email}\nविषय: ${subject}\nसन्देश: ${message}`
    : `*Contact Inquiry (Jay Nepal Traders):*\n\nName: ${name}\nFacility: ${hospital || 'Individual'}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  showToast(isNe ? 'सन्देश पठाइयो! धन्यवाद।' : 'Message dispatched! Thank you.');
}

// --- 7. Navigation & Scroll Listeners ---

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileNavDrawer');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Window Scroll Listener for Back to Top Button
window.addEventListener('scroll', () => {
  const btnTop = document.getElementById('btnBackToTop');
  if (btnTop) {
    if (window.scrollY > 400) {
      btnTop.classList.add('show');
    } else {
      btnTop.classList.remove('show');
    }
  }
});

// --- 8. Initialization on Window Load ---
document.addEventListener('DOMContentLoaded', () => {
  // Insert logos
  document.querySelectorAll('.js-brand-logo').forEach(el => {
    el.innerHTML = getLogoSvg();
  });

  // Render initial catalog
  setLanguage('ne');

  // Bind Search Input
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  // Bind Global Esc Key to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeProductDetail();
      closeQuickRfq();
    }
  });
});
