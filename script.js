/**
 * ============================================================
 *  سراج السنة - التطبيق الديني المتكامل للأذكار والأدعية
 * ============================================================
 * جميع الأذكار مأخوذة من القرآن الكريم والسنة النبوية الثابتة
 * المصادر: حصن المسلم، صحيح البخاري، صحيح مسلم، سنن أبي داود
 * ============================================================
 */

// ======================== بيانات الأذكار ========================

const AZKAR_DATA = {
  // ========== أذكار الصباح ==========
  morning: [
    {
      id: 'm1',
      text: '﴿ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾ (آية الكرسي)',
      count: 1,
      source: 'سورة البقرة 255'
    },
    {
      id: 'm2',
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم ﴿ قُلْ هُوَ اللَّهُ أَحَدٌ ﴾ ﴿ اللَّهُ الصَّمَدُ ﴾ ﴿ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴾ ﴿ وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ ﴾',
      count: 3,
      source: 'سورة الإخلاص'
    },
    {
      id: 'm3',
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم ﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴾ ﴿ مِن شَرِّ مَا خَلَقَ ﴾ ﴿ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴾ ﴿ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴾ ﴿ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴾',
      count: 3,
      source: 'سورة الفلق'
    },
    {
      id: 'm4',
      text: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم ﴿ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴾ ﴿ مَلِكِ النَّاسِ ﴾ ﴿ إِلَهِ النَّاسِ ﴾ ﴿ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴾ ﴿ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴾ ﴿ مِنَ الْجِنَّةِ وَالنَّاسِ ﴾',
      count: 3,
      source: 'سورة الناس'
    },
    {
      id: 'm5',
      text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ',
      count: 1,
      source: 'أبو داود، ابن ماجه'
    },
    {
      id: 'm6',
      text: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      count: 1,
      source: 'الترمذي، أبو داود'
    },
    {
      id: 'm7',
      text: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ (سيّد الاستغفار)',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'm8',
      text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ',
      count: 3,
      source: 'أبو داود، النسائي'
    },
    {
      id: 'm9',
      text: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
      count: 7,
      source: 'أبو داود، ابن ماجه'
    },
    {
      id: 'm10',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً',
      count: 1,
      source: 'ابن ماجه'
    },
    {
      id: 'm11',
      text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (مائة مرة)',
      count: 100,
      source: 'صحيح مسلم'
    },
    {
      id: 'm12',
      text: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      count: 100,
      source: 'صحيح البخاري'
    },
    {
      id: 'm13',
      text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ',
      count: 3,
      source: 'مسلم، الترمذي'
    },
    {
      id: 'm14',
      text: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      count: 3,
      source: 'أبو داود، ابن ماجه'
    },
    {
      id: 'm15',
      text: 'رَضِيتُ بِاللَّهِ رَبّاً، وَبِالْإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيّاً',
      count: 3,
      source: 'أبو داود'
    },
    {
      id: 'm16',
      text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِيَ كُلَّهُ، وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ',
      count: 1,
      source: 'النسائي، الحاكم'
    },
    {
      id: 'm17',
      text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ',
      count: 10,
      source: 'مسلم، الترمذي'
    },
    {
      id: 'm18',
      text: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      count: 100,
      source: 'صحيح البخاري'
    },
  ],

  // ========== أذكار المساء ==========
  evening: [
    {
      id: 'e1',
      text: 'آية الكرسي - ﴿ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ ... ﴾',
      count: 1,
      source: 'سورة البقرة 255'
    },
    {
      id: 'e2',
      text: 'سورة الإخلاص + المعوذتين (الإخلاص + الفلق + الناس)',
      count: 3,
      source: 'القرآن الكريم'
    },
    {
      id: 'e3',
      text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا',
      count: 1,
      source: 'أبو داود'
    },
    {
      id: 'e4',
      text: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',
      count: 1,
      source: 'الترمذي'
    },
    {
      id: 'e5',
      text: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ... (سيد الاستغفار)',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'e6',
      text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ',
      count: 3,
      source: 'أبو داود'
    },
    {
      id: 'e7',
      text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      count: 3,
      source: 'مسلم'
    },
    {
      id: 'e8',
      text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ',
      count: 10,
      source: 'مسلم'
    },
    {
      id: 'e9',
      text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'e10',
      text: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ',
      count: 1,
      source: 'أبو داود، الترمذي'
    },
    {
      id: 'e11',
      text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (مائة مرة)',
      count: 100,
      source: 'صحيح مسلم'
    },
    {
      id: 'e12',
      text: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      count: 100,
      source: 'صحيح البخاري'
    },
    {
      id: 'e13',
      text: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      count: 100,
      source: 'صحيح البخاري'
    },
    {
      id: 'e14',
      text: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      count: 3,
      source: 'أبو داود'
    },
    {
      id: 'e15',
      text: 'رَضِيتُ بِاللَّهِ رَبّاً، وَبِالْإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيّاً',
      count: 3,
      source: 'أبو داود'
    },
  ],

  // ========== أذكار بعد الصلاة ==========
  prayer: [
    {
      id: 'p1',
      text: 'أَسْتَغْفِرُ اللَّهَ (ثلاث مرات) . اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ',
      count: 1,
      source: 'صحيح مسلم'
    },
    {
      id: 'p2',
      text: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'p3',
      text: 'سُبْحَانَ اللَّهِ (33 مرة) . الْحَمْدُ لِلَّهِ (33 مرة) . اللَّهُ أَكْبَرُ (33 مرة) . ثُمَّ يُخْتَمُ بِقَوْلِ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      count: 33,
      source: 'صحيح مسلم',
      isCombined: true
    },
    {
      id: 'p4',
      text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (33 مرة)',
      count: 33,
      source: 'مسلم'
    },
    {
      id: 'p5',
      text: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ',
      count: 1,
      source: 'أبو داود'
    },
    {
      id: 'p6',
      text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ الْقَبْرِ',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'p7',
      text: 'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لاَ إِلَهَ إِلاَّ أَنْتَ',
      count: 1,
      source: 'صحيح مسلم'
    },
    {
      id: 'p8',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً',
      count: 1,
      source: 'ابن ماجه'
    },
    {
      id: 'p9',
      text: 'آية الكرسي - ﴿ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ ... ﴾',
      count: 1,
      source: 'من قرأها دبر كل صلاة لم يمنعه من الجنة إلا الموت'
    },
    {
      id: 'p10',
      text: 'سورة الإخلاص + المعوذتين (بعد كل صلاة)',
      count: 1,
      source: 'أبو داود'
    },
  ],

  // ========== أدعية مباركة ==========
  supplications: [
    {
      id: 's1',
      text: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      count: 1,
      source: 'سورة البقرة 201'
    },
    {
      id: 's2',
      text: 'رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ',
      count: 1,
      source: 'سورة آل عمران 8'
    },
    {
      id: 's3',
      text: 'رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي',
      count: 1,
      source: 'سورة طه 25-26'
    },
    {
      id: 's4',
      text: 'رَبِّ زِدْنِي عِلْماً',
      count: 1,
      source: 'سورة طه 114'
    },
    {
      id: 's5',
      text: 'لاَ إِلَهَ إِلاَّ أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ (دعاء يونس)',
      count: 1,
      source: 'سورة الأنبياء 87'
    },
    {
      id: 's6',
      text: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      count: 1,
      source: 'سورة الأعراف 23'
    },
    {
      id: 's7',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى، وَالتُّقَى، وَالْعَفَافَ، وَالْغِنَى',
      count: 1,
      source: 'صحيح مسلم'
    },
    {
      id: 's8',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ',
      count: 1,
      source: 'الترمذي'
    },
    {
      id: 's9',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ، وَأَعُوذُ بِكَ مِنَ النَّارِ',
      count: 3,
      source: 'أبو داود'
    },
    {
      id: 's10',
      text: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي إِلَيْهَا مَعَادِي، وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ، وَالْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ',
      count: 1,
      source: 'صحيح مسلم'
    },
  ],

  // ========== أذكار النوم ==========
  beforeSleep: [
    {
      id: 'ns1',
      text: 'آية الكرسي - ﴿ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ ... ﴾',
      count: 1,
      source: 'من قرأها في ليلة لم يزل عليه من الله حافظ'
    },
    {
      id: 'ns2',
      text: 'سورة الإخلاص + المعوذتين (ثلاث مرات)',
      count: 3,
      source: 'صحيح البخاري'
    },
    {
      id: 'ns3',
      text: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
      count: 3,
      source: 'أبو داود'
    },
    {
      id: 'ns4',
      text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'ns5',
      text: 'اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لاَ مَلْجَأَ وَلاَ مَنْجَا مِنْكَ إِلاَّ إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'ns6',
      text: 'سُبْحَانَ اللَّهِ (33) . الْحَمْدُ لِلَّهِ (33) . اللَّهُ أَكْبَرُ (34)',
      count: 33,
      source: 'صحيح البخاري'
    },
    {
      id: 'ns7',
      text: 'اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، مُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ ذِي شَرٍّ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنِّي الدَّيْنَ وَأَغْنِنِي مِنَ الْفَقْرِ',
      count: 1,
      source: 'صحيح مسلم'
    },
  ],

  wakeUp: [
    {
      id: 'w1',
      text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُورُ',
      count: 1,
      source: 'صحيح البخاري'
    },
    {
      id: 'w2',
      text: 'الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ',
      count: 1,
      source: 'الترمذي'
    },
    {
      id: 'w3',
      text: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
      count: 1,
      source: 'ابن ماجه'
    },
    {
      id: 'w4',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً',
      count: 1,
      source: 'ابن ماجه'
    },
  ]
};


// ======================== منطق التطبيق ========================

document.addEventListener('DOMContentLoaded', () => {
  // ---- التخزين المحلي ----
  const STORAGE_KEY = 'siraj_counter';

  function getCounts() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveCounts(id, count) {
    const data = getCounts();
    data[id] = count;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getInitialCount(id, total) {
    const saved = getCounts();
    return saved[id] !== undefined ? saved[id] : total;
  }

  // ---- بناء بطاقات الذكر ----
  function buildDhikrCard(dhikr) {
    const initialCount = getInitialCount(dhikr.id, dhikr.count);
    const remaining = dhikr.isCombined ? dhikr.count : initialCount;
    const isCompleted = remaining <= 0;
    const displayCount = isCompleted ? 0 : remaining;

    const card = document.createElement('div');
    card.className = 'dhikr-card fade-in';
    card.dataset.id = dhikr.id;
    card.dataset.total = dhikr.count;
    card.dataset.remaining = remaining;

    // النص
    const textDiv = document.createElement('div');
    textDiv.className = 'dhikr-text';
    textDiv.innerHTML = dhikr.text;

    // الفوتر
    const footer = document.createElement('div');
    footer.className = 'dhikr-footer';

    const source = document.createElement('span');
    source.className = 'dhikr-source';
    source.textContent = `📖 ${dhikr.source}`;

    const counterDiv = document.createElement('div');
    counterDiv.className = 'dhikr-counter';

    const label = document.createElement('span');
    label.className = 'dhikr-count-label';

    if (dhikr.isCombined) {
      label.textContent = 'سبّح 33 مرة كلٍ';
    } else {
      label.textContent = `العدد: ${dhikr.count}`;
    }

    const btn = document.createElement('button');
    btn.className = `dhikr-btn ${isCompleted ? 'completed' : ''}`;
    btn.innerHTML = isCompleted
      ? '<i class="fas fa-check-circle"></i> تم'
      : `<i class="fas fa-hand-pointer"></i> ${displayCount}`;

    btn.addEventListener('click', () => {
      const cardEl = btn.closest('.dhikr-card');
      let rem = parseInt(cardEl.dataset.remaining);
      const total = parseInt(cardEl.dataset.total);

      if (rem <= 0) {
        // إعادة تعيين
        rem = total;
        cardEl.dataset.remaining = rem;
        btn.innerHTML = `<i class="fas fa-hand-pointer"></i> ${rem}`;
        btn.classList.remove('completed');
        saveCounts(dhikr.id, rem);
        showBadge(`🔄 أُعيد تعيين "${dhikr.text.slice(0, 30)}..."`);
        return;
      }

      rem -= 1;
      cardEl.dataset.remaining = rem;
      saveCounts(dhikr.id, rem);

      if (rem <= 0) {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> تم';
        btn.classList.add('completed');
        showBadge(`✅ أتممت ذكر "${dhikr.text.slice(0, 30)}..."`);
        // صوت (اختياري) - نغمة نجاح بسيطة
      } else {
        btn.innerHTML = `<i class="fas fa-hand-pointer"></i> ${rem}`;
      }
    });

    counterDiv.appendChild(label);
    counterDiv.appendChild(btn);

    footer.appendChild(source);
    footer.appendChild(counterDiv);

    card.appendChild(textDiv);
    card.appendChild(footer);

    return card;
  }

  // ---- عرض مجموعة أذكار ----
  function renderAzkar(containerId, dataArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    dataArray.forEach(d => {
      container.appendChild(buildDhikrCard(d));
    });
  }

  // ---- البادج المنبثقة ----
  let badgeTimeout = null;

  function showBadge(message) {
    const badge = document.getElementById('counterBadge');
    const text = document.getElementById('counterText');
    if (!badge || !text) return;

    text.textContent = message;
    badge.classList.remove('hidden');

    if (badgeTimeout) clearTimeout(badgeTimeout);
    badgeTimeout = setTimeout(() => {
      badge.classList.add('hidden');
    }, 3000);
  }

  document.getElementById('counterClose')?.addEventListener('click', () => {
    const badge = document.getElementById('counterBadge');
    badge.classList.add('hidden');
    if (badgeTimeout) clearTimeout(badgeTimeout);
  });

  // ---- تهيئة التبويبات ----
  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        const target = document.getElementById(`tab-${btn.dataset.tab}`);
        if (target) {
          target.classList.remove('hidden');
          // إضافة fade-in
          target.querySelectorAll('.dhikr-card').forEach(card => {
            card.style.animation = 'none';
            card.offsetHeight; // reflow
            card.style.animation = 'fadeIn 0.4s ease';
          });
        }
      });
    });
  }

  // ---- منتقي الوقت (صباح / مساء) ----
  function initTimePickers() {
    document.querySelectorAll('.time-picker').forEach(picker => {
      const btns = picker.querySelectorAll('.time-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const parent = picker.parentElement;
          const lists = parent.querySelectorAll('.azkar-list');
          lists.forEach(l => l.classList.add('hidden'));

          const targetId = `${btn.dataset.time}-azkar`;
          const target = document.getElementById(targetId);
          if (target) target.classList.remove('hidden');
        });
      });
    });
  }

  // ---- تصيير كل شيء ----
  renderAzkar('morning-azkar', AZKAR_DATA.morning);
  renderAzkar('evening-azkar', AZKAR_DATA.evening);
  renderAzkar('prayer-azkar', AZKAR_DATA.prayer);
  renderAzkar('supplications-list', AZKAR_DATA.supplications);
  renderAzkar('before-sleep-azkar', AZKAR_DATA.beforeSleep);
  renderAzkar('wake-up-azkar', AZKAR_DATA.wakeUp);

  initTabs();
  initTimePickers();

  console.log('🌙 سراج السنة - التطبيق جاهز!');
});