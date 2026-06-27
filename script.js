/* ═══════════════════════════════════════════════
   TURBO FAHRSCHULE BERLIN — script.js
   ═══════════════════════════════════════════════ */
'use strict';

let currentLang = 'de';

/* ─── i18n ───────────────────────────────────── */
const i18n = {

/* ════════════════════ DEUTSCH ════════════════════ */
de: {
  dir:'ltr', lang:'de',

  /* Hero */
  heroL1:'Dein Führerschein.', heroL2:'Schnell &amp; sicher.', heroL3:'In deiner Sprache.',
  heroSub:'Über 35 Jahre mitten in Berlin-Moabit. Wir kennen deine Situation — und begleiten dich auf Deutsch, Arabisch oder Englisch bis zum bestandenen Prüfungstag.',
  heroCta1:'Jetzt kostenlos beraten lassen',

  /* Nav */
  navVorteile:'Vorteile', navKlassen:'Klassen', navWarum:'Warum wir?', navBewertungen:'Bewertungen', navFaq:'FAQ',
  hdrCta:'Beratung anfragen',

  /* Lang-Banner */
  lbDe:'Auf Deutsch', lbDeP:'Klar, geduldig, professionell',
  lbAr:'بالعربية', lbArP:'تعليم واضح ومفهوم',
  lbEn:'In English', lbEnP:'Friendly, clear instruction',
  lbCta:'Jetzt anmelden →',

  /* Vorteile */
  vortEyebrow:'Unsere Stärken',
  vortH2:'Mehr als nur Fahrstunden.',
  vortSub:'Wir behandeln jeden Schüler wie einen Menschen, nicht wie eine Nummer. Lerne in deinem Tempo, in deiner Sprache — mit echten Fahrschullehrern aus Berlin.',
  feat1Title:'Erfahrene Berliner Fahrlehrer', feat1Desc:'Über 35 Jahre Unterrichtserfahrung. Geduldig, respektvoll und ehrlich — wir kennen die Berliner Prüfungsrouten in- und auswendig.',
  feat2Title:'Flexible Fahrstunden', feat2Desc:'Montag bis Samstag, morgens bis abends. Wir planen um deinen Job und Alltag herum — nicht umgekehrt.',
  feat3Title:'Theorie-Intensivkurs', feat3Desc:'Prüfungsreif in 7 Werktagen. Kleinstgruppen, strukturierter Lernplan, hohe Bestehensquote — auch auf Arabisch und Englisch.',
  feat4Title:'Echte Mehrsprachigkeit', feat4Desc:'Deutsch, Arabisch und Englisch — von der ersten Stunde bis zur Prüfungsanmeldung. Kein Googleübersetzer, echte Fahrlehrer.',
  feat5Title:'Moderne Fahrzeuge', feat5Desc:'Schalter und Automatik, aktuelle Modelle mit allen Sicherheitsfeatures. Du entscheidest, womit du lernst.',
  feat6Title:'ADAC-Bonus inklusive', feat6Desc:'Gratis ADAC-Mitgliedschaft und Sicherheitstraining für jeden Schüler — ohne Aufpreis, ohne Kleingedrucktes.',

  /* Klassen */
  klassEyebrow:'Führerscheinklassen',
  klassH2:'Welchen Führerschein\nmöchtest du machen?',
  klassBadge:'Beliebteste Wahl',
  klass1Title:'Klasse B', klass1Desc:'Der klassische Berliner PKW-Führerschein — mit Schaltung oder Automatik. Wir kennen die Prüfungsrouten und bereiten dich gezielt vor.',
  klass1Li1:'PKW bis 3,5 t &amp; Anhänger', klass1Li2:'Schaltung &amp; Automatik möglich', klass1Li3:'TÜV-Lern-App inklusive', klass1Li4:'ADAC-Mitgliedschaft gratis',
  klass1Cta:'Jetzt anmelden',
  klass2Title:'B196 Motorrad', klass2Desc:'125 cc ohne extra Prüfung — schnell und günstig mit deinem bestehenden B-Führerschein erweitern.',
  klass2Li1:'Kein neuer Führerschein nötig', klass2Li2:'Ab 25 J. mit 5 J. B-Erfahrung', klass2Li3:'Bis 125 cc / 15 PS',
  klass2Cta:'Mehr erfahren',
  klass3Title:'ASF Aufbauseminar', klass3Desc:'Punkte in der Probezeit? Das ASF-Seminar ist Pflicht — wir führen es diskret, zertifiziert und termintreu durch.',
  klass3Li1:'Zertifizierte Durchführung', klass3Li2:'Kleine Gruppen', klass3Li3:'Schnelle Terminvergabe',
  klass3Cta:'Platz reservieren',
  klass4Title:'Führerschein Umschreibung', klass4Desc:'Ausländischen Führerschein umschreiben? Individuelle Vorbereitung auf Arabisch, Deutsch oder Englisch.',
  klass4Li1:'Individuelle Vorbereitung', klass4Li2:'Theorie &amp; Praxis', klass4Li3:'Mehrsprachig möglich',
  klass4Cta:'Termin anfragen',
  klassHint:'Klasse BE, B197 und weitere auf Anfrage. <a href="#kontakt">Ruf uns an →</a>',

  /* Warum */
  warumEyebrow:'Unser Versprechen',
  warumH2:'Warum über<br>1.000 Berliner<br>uns vertrauen.',
  statSuccessLbl:'Erfolgsquote', statExpLbl:'Jahre Erfahrung', statLangLbl:'Sprachen',
  reason1Title:'Null versteckte Kosten', reason1Desc:'Dein Führerscheinantrag kostet nur die Behördengebühr — kein Aufschlag, kein Feingedrucktes. Versprochen.',
  reason2Title:'Erste Fahrstunde oft diese Woche', reason2Desc:'Kein monatelanges Warten. Wir planen flexibel um deinen Alltag — und melden uns innerhalb von 24 Stunden.',
  reason3Title:'Dein persönlicher Fahrlehrer', reason3Desc:'Kein ständiger Wechsel. Vom ersten Tag bis zur bestandenen Prüfung hast du einen festen Ansprechpartner.',
  reason4Title:'Willkommen aus aller Welt', reason4Desc:'Seit 1985 betreuen wir Schüler aus über 40 Ländern. Deine Herkunft ist bei uns kein Hindernis — sie ist willkommen.',
  warumCta:'Kostenlose Beratung →',
  wcard1Title:'Beste Erfolgsquote in Moabit', wcard1Desc:'94 % unserer Schüler bestehen die Fahrprüfung beim ersten Anlauf — das spricht für sich.',
  wcard2Title:'Echte Mehrsprachigkeit', wcard2Desc:'نتحدث العربية بطلاقة — كل أسئلتك لها إجابة.\nWir sprechen fließend Arabisch — jede Frage hat eine Antwort.',
  wcard3Title:'Mitten in Berlin-Moabit', wcard3Desc:'Bredowstraße 2 — gut erreichbar mit U7, S-Bahn und Bus. Seit 1985 deine Fahrschule im Kiez.',

  /* Reviews */
  reviewEyebrow:'Was unsere Schüler sagen',
  reviewH2:'Echte Erfahrungen.<br>Echte Erfolge.',
  reviewRating:'/ 5 · 214 Google-Bewertungen',

  /* FAQ */
  faqEyebrow:'Häufige Fragen',
  faqH2:'Alles, was du<br>wissen möchtest.',
  faq1Q:'Was kostet der Führerschein?',
  faq1A:'Unsere Preise sind individuell und transparent — ohne versteckte Gebühren. Ruf uns an (030 398 37 537) oder nutze das Kontaktformular, und wir erstellen dir ein persönliches Angebot. Den Führerscheinantrag stellen wir ohne jeden Aufschlag.',
  faq2Q:'Wie lange dauert die Ausbildung?',
  faq2A:'Im Schnitt 3–5 Monate für Klasse B. Mit unserem Theorie-Intensivkurs kannst du die theoretische Prüfung schon nach 7 Werktagen ablegen. Die Fahrstunden passen wir deinem Tempo an.',
  faq3Q:'Kann ich den Unterricht auf Arabisch machen?',
  faq3A:'Ja, absolut! Wir bieten Theorie und Praxis auf Deutsch, العربية (Arabisch) und Englisch an. Du kannst die Theorieprüfung sogar offiziell auf Arabisch ablegen — das ermöglicht der TÜV/Dekra.',
  faq4Q:'Kann ich meinen ausländischen Führerschein umschreiben?',
  faq4A:'Ja! Wir bieten spezielle Vorbereitungskurse für die Umschreibung ausländischer Fahrerlaubnisse an — inklusive gezielter Fahrstunden, Theoriehilfe und Prüfungsvorbereitung. Alles individuell und in deiner Sprache.',
  faq5Q:'Was ist der B196-Kurs und wer kann teilnehmen?',
  faq5A:'Der B196-Erweiterungskurs erlaubt dir, Motorräder bis 125 cc und 15 PS zu fahren — ohne separate Motorradprüfung. Voraussetzungen: Klasse-B-Führerschein, Mindestalter 25 Jahre und mindestens 5 Jahre Fahrerfahrung.',
  faq6Q:'Wie schnell bekomme ich einen Termin?',
  faq6A:'Sehr schnell! Erste Fahrstunden sind häufig noch in derselben Woche möglich. Ruf uns direkt an (030 398 37 537) oder nutze unser Formular — wir melden uns innerhalb von 24 Stunden.',
  faq7Q:'Was kostet das ASF-Aufbauseminar?',
  faq7A:'Das ASF-Seminar ist gesetzlich vorgeschrieben bei Punkten in der Probezeit. Wir führen es zertifiziert, diskret und in kleinen Gruppen durch. Den genauen Preis und den nächsten Termin erfährst du über unser Kontaktformular oder telefonisch.',

  /* Kontakt Info */
  kontaktEyebrow:'Kontakt',
  kontaktH2:'Dein erster Schritt<br>zum Führerschein.',
  kontaktSub:'Füll das Formular aus — wir melden uns innerhalb von 24 Stunden persönlich bei dir. Auf Deutsch, Arabisch oder Englisch.',
  whatsappLabel:'WhatsApp', whatsappSub:'Jederzeit schreiben',
  phoneSubLabel:'Mo–Fr 12–18 Uhr · Sa 11–14 Uhr',
  hoursTitle:'Öffnungszeiten',
  hoursRow1a:'Montag – Freitag', hoursRow1b:'12:00 – 18:00',
  hoursRow2a:'Samstag', hoursRow2b:'11:00 – 14:00',
  hoursRow3a:'Sonntag', hoursRow3b:'Geschlossen',

  /* Formular */
  formTitle:'Kostenlose Beratung anfragen',
  labelName:'Dein Name', labelPhone:'Telefon', labelEmail:'E-Mail',
  labelInterest:'Ich interessiere mich für', labelLang:'Bevorzugte Sprache', labelMsg:'Nachricht (optional)',
  submitBtn:'Jetzt kostenlos anfragen',
  dsgvoText:'Ich habe die <a href="datenschutz.html" class="form-link" target="_blank">Datenschutzerklärung</a> gelesen und stimme zu.',
  successTitle:'Anfrage gesendet!',
  successMsg:'Wir melden uns innerhalb von 24 Stunden bei dir — auf Deutsch, Arabisch oder Englisch.',
  formHint:'* Pflichtfelder · Deine Daten werden vertraulich behandelt.',
  placeholderName:'Max Mustermann', placeholderPhone:'+49 160 …', placeholderEmail:'max@example.de',
  placeholderMsg:'Hast du spezielle Fragen oder Wünsche?',
  errName:'Bitte gib deinen Namen ein (min. 2 Zeichen).', errPhone:'Bitte gib eine gültige Telefonnummer ein.',
  errInterest:'Bitte wähle ein Angebot aus.', errDsgvo:'Bitte stimme der Datenschutzerklärung zu.',
  errSend:'Senden fehlgeschlagen. Bitte ruf uns an oder versuch es erneut.',

  /* Footer */
  footerTagline:'Seit 1985 deine Fahrschule in Berlin-Moabit.<br>Führerschein auf Deutsch, العربية &amp; English.',
  footerNav1:'Führerscheinklassen', footerNav2:'Über uns', footerNav3:'Öffnungszeiten',
  footerCopy:'© 2026 Turbo Fahrschule Berlin · Alle Rechte vorbehalten',
},

/* ════════════════════ ARABISCH ════════════════════ */
ar: {
  dir:'rtl', lang:'ar',

  /* Hero */
  heroL1:'رخصة قيادتك.', heroL2:'سريع وآمن.', heroL3:'بلغتك.',
  heroSub:'أكثر من 35 عامًا في قلب برلين-موابيت. نعرف وضعك جيدًا — ونرافقك بالعربية أو الألمانية أو الإنجليزية حتى تنجح في الاختبار.',
  heroCta1:'احجز استشارة مجانية الآن',

  /* Nav */
  navVorteile:'المزايا', navKlassen:'الفئات', navWarum:'لماذا نحن؟', navBewertungen:'التقييمات', navFaq:'الأسئلة',
  hdrCta:'طلب استشارة',

  /* Lang-Banner */
  lbDe:'Auf Deutsch', lbDeP:'تعليم واضح ومهني',
  lbAr:'بالعربية', lbArP:'تعليم واضح ومفهوم',
  lbEn:'In English', lbEnP:'Friendly, clear instruction',
  lbCta:'سجل الآن →',

  /* Vorteile */
  vortEyebrow:'نقاط قوتنا',
  vortH2:'أكثر من مجرد دروس قيادة.',
  vortSub:'نعامل كل طالب كإنسان، لا كرقم. تعلّم بوتيرتك وبلغتك — مع مدربي قيادة حقيقيين من برلين.',
  feat1Title:'مدربون برلينيون متمرسون', feat1Desc:'أكثر من 35 عامًا من الخبرة التدريسية. صبورون، محترمون وصادقون — نعرف مسارات الاختبار في برلين عن ظهر قلب.',
  feat2Title:'دروس مرنة', feat2Desc:'من الاثنين إلى السبت، صباحًا ومساءً. نخطط حول عملك وحياتك اليومية — لا العكس.',
  feat3Title:'دورة نظرية مكثفة', feat3Desc:'جاهز للامتحان خلال 7 أيام عمل. مجموعات صغيرة، خطة تعلم منظمة، ونسبة نجاح عالية — بالعربية والإنجليزية أيضًا.',
  feat4Title:'تعدد لغوي حقيقي', feat4Desc:'الألمانية والعربية والإنجليزية — من الدرس الأول حتى تسجيل الاختبار. مدربون حقيقيون، لا ترجمة آلية.',
  feat5Title:'مركبات حديثة', feat5Desc:'يدوي وأوتوماتيك، طرازات حديثة بجميع مزايا الأمان. أنت تختار ما تتعلم عليه.',
  feat6Title:'مزايا ADAC مجاناً', feat6Desc:'عضوية ADAC مجانية وتدريب السلامة لكل طالب — بدون رسوم إضافية ولا شروط مخفية.',

  /* Klassen */
  klassEyebrow:'فئات رخصة القيادة',
  klassH2:'أي رخصة\nتريد الحصول عليها؟',
  klassBadge:'الأكثر طلبًا',
  klass1Title:'الفئة B', klass1Desc:'رخصة السيارة الكلاسيكية في برلين — يدوي أو أوتوماتيك. نعرف مسارات الاختبار ونجهزك بشكل مخصص.',
  klass1Li1:'سيارة حتى 3.5 طن &amp; مقطورة', klass1Li2:'يدوي &amp; أوتوماتيك ممكن', klass1Li3:'تطبيق TÜV للتعلم مجاناً', klass1Li4:'عضوية ADAC مجانية',
  klass1Cta:'سجل الآن',
  klass2Title:'B196 دراجة نارية', klass2Desc:'125 سي سي بدون اختبار إضافي — وسّع رخصتك B الحالية بسرعة وبتكلفة منخفضة.',
  klass2Li1:'لا رخصة جديدة مطلوبة', klass2Li2:'من عمر 25 مع 5 سنوات خبرة', klass2Li3:'حتى 125 سي سي / 15 حصان',
  klass2Cta:'اعرف أكثر',
  klass3Title:'دورة ASF التأهيلية', klass3Desc:'نقاط في فترة الاختبار؟ دورة ASF إلزامية — ننفذها باحترافية وسرية وفي الوقت المحدد.',
  klass3Li1:'تنفيذ معتمد', klass3Li2:'مجموعات صغيرة', klass3Li3:'مواعيد سريعة',
  klass3Cta:'احجز مقعدك',
  klass4Title:'تحويل رخصة القيادة', klass4Desc:'تحويل رخصة أجنبية؟ تحضير فردي بالعربية أو الألمانية أو الإنجليزية.',
  klass4Li1:'تحضير فردي', klass4Li2:'نظري &amp; عملي', klass4Li3:'متعدد اللغات',
  klass4Cta:'طلب موعد',
  klassHint:'الفئة BE وB197 وغيرها عند الطلب. <a href="#kontakt">اتصل بنا →</a>',

  /* Warum */
  warumEyebrow:'وعدنا لك',
  warumH2:'لماذا يثق بنا<br>أكثر من 1000<br>برليني.',
  statSuccessLbl:'نسبة النجاح', statExpLbl:'سنة خبرة', statLangLbl:'لغات',
  reason1Title:'صفر تكاليف خفية', reason1Desc:'طلب رخصتك يكلف فقط رسوم الجهة الحكومية — بدون أي إضافات أو شروط مخفية. وعد.',
  reason2Title:'أول درس غالبًا هذا الأسبوع', reason2Desc:'لا انتظار لأشهر. نخطط بمرونة حول يومك — ونرد خلال 24 ساعة.',
  reason3Title:'مدربك الشخصي', reason3Desc:'لا تغيير مستمر. من اليوم الأول حتى اجتياز الاختبار لديك نقطة تواصل ثابتة.',
  reason4Title:'أهلًا بك من كل مكان', reason4Desc:'منذ 1985 ندرّب طلابًا من أكثر من 40 دولة. أصلك ليس عائقًا عندنا — بل نرحب به.',
  warumCta:'استشارة مجانية →',
  wcard1Title:'أعلى نسبة نجاح في موابيت', wcard1Desc:'94% من طلابنا ينجحون في اختبار القيادة من المحاولة الأولى — الأرقام تتكلم.',
  wcard2Title:'تعدد لغوي حقيقي', wcard2Desc:'نتحدث العربية بطلاقة — كل أسئلتك لها إجابة.\nWir sprechen fließend Arabisch — jede Frage hat eine Antwort.',
  wcard3Title:'في قلب برلين-موابيت', wcard3Desc:'Bredowstraße 2 — سهل الوصول بالمترو U7 والقطار والحافلة. مدرستك في الحي منذ 1985.',

  /* Reviews */
  reviewEyebrow:'ماذا يقول طلابنا',
  reviewH2:'تجارب حقيقية.<br>نجاحات حقيقية.',
  reviewRating:'/ 5 · 214 تقييم Google',

  /* FAQ */
  faqEyebrow:'أسئلة شائعة',
  faqH2:'كل ما تريد<br>معرفته.',
  faq1Q:'كم تكلف رخصة القيادة؟',
  faq1A:'أسعارنا فردية وشفافة — بدون رسوم مخفية. اتصل بنا (030 398 37 537) أو استخدم نموذج التواصل وسنعد لك عرضًا شخصيًا. طلب رخصتك بدون أي رسوم إضافية منا.',
  faq2Q:'كم تستغرق مدة التدريب؟',
  faq2A:'في المتوسط 3-5 أشهر للفئة B. مع دورتنا المكثفة في النظري يمكنك اجتياز الاختبار النظري بعد 7 أيام عمل. نكيّف دروس القيادة حسب وتيرتك.',
  faq3Q:'هل يمكنني الدراسة بالعربية؟',
  faq3A:'نعم بالتأكيد! نقدم النظري والعملي بالألمانية والعربية والإنجليزية. يمكنك اجتياز اختبار النظري رسميًا بالعربية أيضًا — هذا ما يتيحه TÜV/Dekra.',
  faq4Q:'هل يمكنني تحويل رخصتي الأجنبية؟',
  faq4A:'نعم! نقدم دورات تحضيرية خاصة لتحويل رخص القيادة الأجنبية — تشمل دروس قيادة مخصصة ومساعدة نظرية وتحضيرًا للاختبار. كل شيء فردي وبلغتك.',
  faq5Q:'ما هي دورة B196 ومن يمكنه المشاركة؟',
  faq5A:'دورة B196 تتيح لك قيادة دراجات نارية حتى 125 سي سي و15 حصان — بدون اختبار دراجة منفصل. الشروط: رخصة الفئة B، عمر 25 سنة على الأقل وخبرة قيادة 5 سنوات.',
  faq6Q:'كم يستغرق الحصول على موعد؟',
  faq6A:'بسرعة كبيرة! أولى دروس القيادة ممكنة في الأسبوع نفسه. اتصل بنا مباشرة (030 398 37 537) أو استخدم نموذجنا — نرد خلال 24 ساعة.',
  faq7Q:'كم تكلف دورة ASF التأهيلية؟',
  faq7A:'دورة ASF مطلوبة قانونيًا عند تراكم النقاط في فترة الاختبار. ننفذها باعتماد رسمي وسرية وفي مجموعات صغيرة. اعرف السعر والموعد القادم عبر نموذج التواصل أو هاتفيًا.',

  /* Kontakt Info */
  kontaktEyebrow:'تواصل معنا',
  kontaktH2:'خطوتك الأولى<br>نحو رخصة القيادة.',
  kontaktSub:'أكمل النموذج — سنتواصل معك شخصيًا خلال 24 ساعة. بالعربية أو الألمانية أو الإنجليزية.',
  whatsappLabel:'واتساب', whatsappSub:'راسلنا في أي وقت',
  phoneSubLabel:'الاثنين–الجمعة 12–18 · السبت 11–14',
  hoursTitle:'أوقات العمل',
  hoursRow1a:'الاثنين – الجمعة', hoursRow1b:'12:00 – 18:00',
  hoursRow2a:'السبت', hoursRow2b:'11:00 – 14:00',
  hoursRow3a:'الأحد', hoursRow3b:'مغلق',

  /* Formular */
  formTitle:'طلب استشارة مجانية',
  labelName:'اسمك', labelPhone:'رقم الهاتف', labelEmail:'البريد الإلكتروني',
  labelInterest:'أنا مهتم بـ', labelLang:'اللغة المفضلة', labelMsg:'رسالة (اختياري)',
  submitBtn:'أرسل طلبك مجاناً الآن',
  dsgvoText:'لقد قرأت <a href="datenschutz.html" class="form-link" target="_blank">سياسة الخصوصية</a> وأوافق عليها.',
  successTitle:'تم إرسال طلبك!',
  successMsg:'سنتواصل معك خلال 24 ساعة — بالعربية أو الألمانية أو الإنجليزية.',
  formHint:'* الحقول الإلزامية · بياناتك محمية وسرية.',
  placeholderName:'محمد أحمد', placeholderPhone:'+49 160 …', placeholderEmail:'email@example.de',
  placeholderMsg:'هل لديك أسئلة أو طلبات خاصة؟',
  errName:'يرجى إدخال اسمك (الحد الأدنى حرفان).', errPhone:'يرجى إدخال رقم هاتف صالح.',
  errInterest:'يرجى اختيار خدمة.', errDsgvo:'يرجى الموافقة على سياسة الخصوصية.',
  errSend:'فشل الإرسال. يرجى الاتصال بنا أو المحاولة مرة أخرى.',

  /* Footer */
  footerTagline:'مدرستك في برلين-موابيت منذ 1985.<br>رخصة قيادة بالألمانية والعربية والإنجليزية.',
  footerNav1:'فئات رخصة القيادة', footerNav2:'من نحن', footerNav3:'أوقات العمل',
  footerCopy:'© 2026 Turbo Fahrschule Berlin · جميع الحقوق محفوظة',
},

/* ════════════════════ ENGLISH ════════════════════ */
en: {
  dir:'ltr', lang:'en',

  /* Hero */
  heroL1:'Your driving licence.', heroL2:'Fast &amp; safe.', heroL3:'In your language.',
  heroSub:'Over 35 years right in the heart of Berlin-Moabit. We know your situation — and we\'ll guide you in German, Arabic or English all the way to your test day.',
  heroCta1:'Get a free consultation now',

  /* Nav */
  navVorteile:'Benefits', navKlassen:'Classes', navWarum:'Why us?', navBewertungen:'Reviews', navFaq:'FAQ',
  hdrCta:'Request advice',

  /* Lang-Banner */
  lbDe:'Auf Deutsch', lbDeP:'Clear, professional instruction',
  lbAr:'بالعربية', lbArP:'تعليم واضح ومفهوم',
  lbEn:'In English', lbEnP:'Friendly, clear instruction',
  lbCta:'Register now →',

  /* Vorteile */
  vortEyebrow:'Our Strengths',
  vortH2:'More than just driving lessons.',
  vortSub:'We treat every student as a person, not a number. Learn at your pace, in your language — with real instructors from Berlin.',
  feat1Title:'Experienced Berlin Instructors', feat1Desc:'Over 35 years of teaching experience. Patient, respectful and honest — we know the Berlin test routes inside out.',
  feat2Title:'Flexible Lessons', feat2Desc:'Monday to Saturday, morning to evening. We plan around your job and daily life — not the other way around.',
  feat3Title:'Theory Intensive Course', feat3Desc:'Exam-ready in 7 working days. Small groups, structured study plan, high pass rate — also in Arabic and English.',
  feat4Title:'Real Multilingual Support', feat4Desc:'German, Arabic and English — from your first lesson to exam registration. Real instructors, no Google Translate.',
  feat5Title:'Modern Vehicles', feat5Desc:'Manual and automatic, current models with all safety features. You decide what you learn on.',
  feat6Title:'ADAC Bonus Included', feat6Desc:'Free ADAC membership and safety training for every student — no extra charge, no small print.',

  /* Klassen */
  klassEyebrow:'Licence Classes',
  klassH2:'Which licence do\nyou want to get?',
  klassBadge:'Most Popular',
  klass1Title:'Class B', klass1Desc:'The classic Berlin car licence — manual or automatic. We know the test routes and prepare you specifically.',
  klass1Li1:'Cars up to 3.5 t &amp; trailer', klass1Li2:'Manual &amp; automatic available', klass1Li3:'TÜV learning app included', klass1Li4:'Free ADAC membership',
  klass1Cta:'Register now',
  klass2Title:'B196 Motorcycle', klass2Desc:'125 cc without an extra test — quickly extend your existing Class B licence.',
  klass2Li1:'No new licence required', klass2Li2:'From age 25 with 5 yrs B experience', klass2Li3:'Up to 125 cc / 15 hp',
  klass2Cta:'Learn more',
  klass3Title:'ASF Remedial Course', klass3Desc:'Points during probation? The ASF course is mandatory — we run it discreetly, certified and on time.',
  klass3Li1:'Certified implementation', klass3Li2:'Small groups', klass3Li3:'Fast appointment',
  klass3Cta:'Reserve a place',
  klass4Title:'Licence Conversion', klass4Desc:'Converting a foreign licence? Individual preparation in Arabic, German or English.',
  klass4Li1:'Individual preparation', klass4Li2:'Theory &amp; practical', klass4Li3:'Multilingual available',
  klass4Cta:'Request appointment',
  klassHint:'Class BE, B197 and others on request. <a href="#kontakt">Call us →</a>',

  /* Warum */
  warumEyebrow:'Our Promise',
  warumH2:'Why over<br>1,000 Berliners<br>trust us.',
  statSuccessLbl:'Pass rate', statExpLbl:'Years experience', statLangLbl:'Languages',
  reason1Title:'Zero hidden costs', reason1Desc:'Your licence application costs only the government fee — no mark-up, no small print. Promise.',
  reason2Title:'First lesson often this week', reason2Desc:'No waiting months. We plan flexibly around your life — and respond within 24 hours.',
  reason3Title:'Your personal instructor', reason3Desc:'No constant changes. From day one to your passed test, you have one dedicated contact.',
  reason4Title:'Welcome from anywhere', reason4Desc:'Since 1985 we\'ve trained students from over 40 countries. Your background is not a barrier — it\'s welcome.',
  warumCta:'Free consultation →',
  wcard1Title:'Highest pass rate in Moabit', wcard1Desc:'94% of our students pass their driving test on the first attempt — the numbers speak for themselves.',
  wcard2Title:'Real multilingual support', wcard2Desc:'نتحدث العربية بطلاقة — كل أسئلتك لها إجابة.\nWir sprechen fließend Arabisch — jede Frage hat eine Antwort.',
  wcard3Title:'In the heart of Berlin-Moabit', wcard3Desc:'Bredowstraße 2 — easily reached by U7, S-Bahn and bus. Your neighbourhood driving school since 1985.',

  /* Reviews */
  reviewEyebrow:'What our students say',
  reviewH2:'Real experiences.<br>Real success.',
  reviewRating:'/ 5 · 214 Google reviews',

  /* FAQ */
  faqEyebrow:'Frequently Asked Questions',
  faqH2:'Everything you<br>want to know.',
  faq1Q:'How much does the licence cost?',
  faq1A:'Our prices are individual and transparent — no hidden fees. Call us (030 398 37 537) or use the contact form and we\'ll create a personal quote for you. We submit your licence application with no mark-up.',
  faq2Q:'How long does training take?',
  faq2A:'On average 3–5 months for Class B. With our theory intensive course you can sit the theory exam after just 7 working days. We adapt driving lessons to your pace.',
  faq3Q:'Can I take lessons in Arabic?',
  faq3A:'Absolutely! We offer theory and practical training in German, Arabic and English. You can even sit the theory exam officially in Arabic — TÜV/Dekra allows this.',
  faq4Q:'Can I convert my foreign licence?',
  faq4A:'Yes! We offer special preparation courses for converting foreign licences — including targeted driving lessons, theory support and exam preparation. All individual and in your language.',
  faq5Q:'What is the B196 course and who can join?',
  faq5A:'The B196 extension course lets you ride motorcycles up to 125 cc and 15 hp — without a separate motorcycle test. Requirements: Class B licence, minimum age 25 and at least 5 years of driving experience.',
  faq6Q:'How quickly can I get an appointment?',
  faq6A:'Very quickly! First driving lessons are often possible the same week. Call us directly (030 398 37 537) or use our form — we respond within 24 hours.',
  faq7Q:'How much does the ASF course cost?',
  faq7A:'The ASF course is legally required for points during probation. We run it with official certification, discretely and in small groups. Find out the exact price and next date via our contact form or by phone.',

  /* Kontakt Info */
  kontaktEyebrow:'Contact',
  kontaktH2:'Your first step<br>towards your licence.',
  kontaktSub:'Fill in the form — we\'ll get back to you personally within 24 hours. In English, German or Arabic.',
  whatsappLabel:'WhatsApp', whatsappSub:'Message us any time',
  phoneSubLabel:'Mon–Fri 12–6pm · Sat 11am–2pm',
  hoursTitle:'Opening Hours',
  hoursRow1a:'Monday – Friday', hoursRow1b:'12:00 – 18:00',
  hoursRow2a:'Saturday', hoursRow2b:'11:00 – 14:00',
  hoursRow3a:'Sunday', hoursRow3b:'Closed',

  /* Formular */
  formTitle:'Request a free consultation',
  labelName:'Your name', labelPhone:'Phone', labelEmail:'E-Mail',
  labelInterest:'I am interested in', labelLang:'Preferred language', labelMsg:'Message (optional)',
  submitBtn:'Request now for free',
  dsgvoText:'I have read the <a href="datenschutz.html" class="form-link" target="_blank">Privacy Policy</a> and agree.',
  successTitle:'Request sent!',
  successMsg:'We will get back to you within 24 hours — in English, German or Arabic.',
  formHint:'* Required fields · Your data is kept confidential.',
  placeholderName:'John Smith', placeholderPhone:'+49 160 …', placeholderEmail:'john@example.de',
  placeholderMsg:'Do you have any specific questions or wishes?',
  errName:'Please enter your name (min. 2 characters).', errPhone:'Please enter a valid phone number.',
  errInterest:'Please select a service.', errDsgvo:'Please agree to the Privacy Policy.',
  errSend:'Sending failed. Please call us or try again.',

  /* Footer */
  footerTagline:'Your driving school in Berlin-Moabit since 1985.<br>Licence in German, العربية &amp; English.',
  footerNav1:'Licence Classes', footerNav2:'About us', footerNav3:'Opening Hours',
  footerCopy:'© 2026 Turbo Fahrschule Berlin · All rights reserved',
},
}; /* end i18n */

/* ─── UTILS ──────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el?.addEventListener(ev, fn, opts);

/* ─── HEADER scroll state ────────────────────── */
const hdr = $('#siteHeader');
function updateHeader() { hdr?.classList.toggle('is-scrolled', window.scrollY > 60); }
on(window, 'scroll', updateHeader, { passive: true });
updateHeader();

/* ─── FAB visibility ─────────────────────────── */
const fab = $('#fab');
on(window, 'scroll', () => fab?.classList.toggle('is-visible', window.scrollY > 500), { passive: true });

/* ─── BURGER / MOBILE NAV ────────────────────── */
const burgerBtn = $('#burgerBtn');
const primaryNav = $('#primaryNav');

function closeMobileNav() {
  primaryNav?.classList.remove('is-open');
  burgerBtn?.classList.remove('is-open');
  burgerBtn?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

on(burgerBtn, 'click', () => {
  const isOpen = primaryNav?.classList.toggle('is-open');
  burgerBtn.classList.toggle('is-open', isOpen);
  burgerBtn.setAttribute('aria-expanded', String(!!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
$$('.nav-a').forEach(a => on(a, 'click', closeMobileNav));
on(document, 'keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

/* ─── SMOOTH SCROLL ──────────────────────────── */
on(document, 'click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id === '#') return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  const offset = (hdr?.offsetHeight ?? 70) + 12;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
});

/* ─── SCROLL REVEAL ──────────────────────────── */
(function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in-view')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      setTimeout(() => el.classList.add('in-view'), parseInt(el.dataset.delay ?? '0', 10));
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ─── COUNTER ANIMATION ──────────────────────── */
(function initCounters() {
  const els = $$('[data-count]');
  if (!els.length || !('IntersectionObserver' in window)) return;
  const ease = t => 1 - Math.pow(1 - t, 3);
  function animateCount(el) {
    const target = parseFloat(el.dataset.count), decimals = parseInt(el.dataset.decimals ?? '0', 10);
    const suffix = el.dataset.suffix ?? '', duration = 1400, start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = (target * ease(p)).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (!e.isIntersecting) return; animateCount(e.target); io.unobserve(e.target); });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
})();

/* ─── LANGUAGE SWITCHER ──────────────────────── */
(function initLang() {
  const btns = $$('.lang-btn');

  function applyLang(code) {
    const t = i18n[code];
    if (!t) return;
    currentLang = code;

    document.documentElement.lang = t.lang;
    document.documentElement.dir  = t.dir;

    /* Generic: data-i18n → innerHTML, SVG-Kinder erhalten */
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] === undefined) return;
      const svg = el.querySelector('svg');
      el.innerHTML = t[key];
      if (svg) el.appendChild(svg);
    });

    /* data-i18n-html → innerHTML + Pflichtfeld-Stern */
    $$('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key] + ' <span aria-hidden="true">*</span>';
    });

    /* data-i18n-placeholder → placeholder */
    $$('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* Aktive Button-Zustände */
    btns.forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === code);
      b.setAttribute('aria-pressed', String(b.dataset.lang === code));
    });
  }

  btns.forEach(btn => on(btn, 'click', () => applyLang(btn.dataset.lang)));
})();

/* ─── FAQ ACCORDION ──────────────────────────── */
(function initFaq() {
  const items = $$('.faq-item');
  items.forEach(item => {
    const btn = $('.faq-q', item), ans = $('.faq-a', item);
    if (!btn || !ans) return;
    ans.removeAttribute('hidden');
    on(btn, 'click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      items.forEach(other => {
        if (other === item) return;
        $('.faq-q', other)?.setAttribute('aria-expanded', 'false');
        $('.faq-a', other)?.classList.remove('is-open');
      });
      btn.setAttribute('aria-expanded', String(!expanded));
      ans.classList.toggle('is-open', !expanded);
    });
  });
})();

/* ─── FORM VALIDATION & SUBMIT ───────────────── */
(function initForm() {
  const form = $('#kontaktForm'), submitBtn = $('#submitBtn'), success = $('#formSuccess');
  if (!form) return;

  const rules = {
    'f-name':     { required: true, min: 2,         msgKey: 'errName' },
    'f-phone':    { required: true, min: 6,         msgKey: 'errPhone' },
    'f-interest': { required: true,                 msgKey: 'errInterest' },
    'f-dsgvo':    { required: true, checkbox: true, msgKey: 'errDsgvo' },
  };

  const getMsg = key => i18n[currentLang]?.[key] ?? i18n.de[key] ?? key;

  function validate(id) {
    const el = $(`#${id}`), rule = rules[id];
    const errEl = el?.parentElement?.querySelector('.field-err') ?? el?.closest('.field')?.querySelector('.field-err');
    let error = '';
    if (rule.checkbox) {
      if (!el.checked) error = getMsg(rule.msgKey);
    } else {
      const val = (el?.value ?? '').trim();
      if (!val) error = getMsg(rule.msgKey);
      else if (rule.min && val.length < rule.min) error = getMsg(rule.msgKey);
    }
    el?.classList.toggle('has-error', !!error);
    if (errEl) errEl.textContent = error;
    return !error;
  }

  Object.keys(rules).forEach(id => {
    const el = $(`#${id}`);
    on(el, 'input',  () => validate(id));
    on(el, 'change', () => validate(id));
  });

  on(form, 'submit', async e => {
    e.preventDefault();
    const valid = Object.keys(rules).map(validate).every(Boolean);
    if (!valid) { form.querySelector('.has-error')?.focus(); return; }

    const btnLabel = submitBtn.querySelector('.btn-label'), btnSpinner = submitBtn.querySelector('.btn-spinner');
    if (btnLabel)   btnLabel.hidden   = true;
    if (btnSpinner) btnSpinner.hidden = false;
    submitBtn.disabled = true;

    try {
      const res = await fetch('https://formspree.io/f/xaqgnngk', {
        method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      submitBtn.hidden = true;
      if (success) success.hidden = false;
      form.reset();
    } catch {
      if (btnLabel)   btnLabel.hidden   = false;
      if (btnSpinner) btnSpinner.hidden = true;
      submitBtn.disabled = false;
      let errEl = form.querySelector('.form-send-error');
      if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'form-send-error field-err';
        errEl.style.textAlign = 'center';
        submitBtn.insertAdjacentElement('afterend', errEl);
      }
      errEl.textContent = getMsg('errSend');
    }
  });
})();

/* ─── SCROLL SPY ─────────────────────────────── */
(function initScrollSpy() {
  const sections = $$('section[id], div[id]').filter(el => el.id);
  const navLinks = $$('.primary-nav .nav-a');
  if (!sections.length || !navLinks.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => { a.style.color = a.getAttribute('href') === `#${entry.target.id}` ? 'var(--amber)' : ''; });
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => io.observe(s));
})();

/* ─── PARALLAX ───────────────────────────────── */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 960) return;
  const heroVis = $('.hero-visual'), heroBg = $('.hero-bg__arabic');
  if (!heroVis) return;
  on(window, 'scroll', () => {
    const y = window.scrollY;
    heroVis.style.transform = `translateY(${y * 0.07}px)`;
    if (heroBg) heroBg.style.transform = `translateY(${-y * 0.04}px)`;
  }, { passive: true });
})();

/* ─── CARD TILT ──────────────────────────────── */
(function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  $$('.review-card').forEach(card => {
    on(card, 'mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - .5) * 6;
      const y = ((e.clientY - r.top)  / r.height - .5) * -6;
      card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-5px)`;
    });
    on(card, 'mouseleave', () => { card.style.transform = ''; });
  });
})();
