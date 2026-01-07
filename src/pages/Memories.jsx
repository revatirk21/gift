import React, { useState } from "react"

import mem1 from "../assets/images/memories/mem1.png"
import mem1a from "../assets/images/memories/mem1a.png"

import mem2 from "../assets/images/memories/mem2.png"
import mem2a from "../assets/images/memories/mem2a.png"
import mem2b from "../assets/images/memories/mem2b.png"
import mem2c from "../assets/images/memories/mem2c.png"
import mem2d from "../assets/images/memories/mem2d.png"

import mem3 from "../assets/images/memories/mem3.png"
import mem3a from "../assets/images/memories/mem3a.png"
import mem3b from "../assets/images/memories/mem3b.png"
import mem3c from "../assets/images/memories/mem3c.png"
import mem3d from "../assets/images/memories/mem3d.png"
import mem3e from "../assets/images/memories/mem3e.png"

import mem4 from "../assets/images/memories/mem4.png"
import mem4a from "../assets/images/memories/mem4a.png"
import mem4b from "../assets/images/memories/mem4b.png"
import mem4c from "../assets/images/memories/mem4c.png"
import mem4d from "../assets/images/memories/mem4d.png"
import mem4e from "../assets/images/memories/mem4e.png"
import mem4f from "../assets/images/memories/mem4f.png"
import mem4g from "../assets/images/memories/mem4g.png"
import mem4h from "../assets/images/memories/mem4h.png"
import mem4v from "../assets/images/memories/mem4v.mp4"

import mem5 from "../assets/images/memories/mem5.png"
import mem5a from "../assets/images/memories/mem5a.png"

import mem6 from "../assets/images/memories/mem6.png"
import mem6a from "../assets/images/memories/mem6a.png"
import mem6b from "../assets/images/memories/mem6b.png"
import mem6c from "../assets/images/memories/mem6c.png"
import mem6d from "../assets/images/memories/mem6d.png"
import mem6e from "../assets/images/memories/mem6e.png"

import mem7 from "../assets/images/memories/mem7.png"
import mem7a from "../assets/images/memories/mem7a.png"
import mem7b from "../assets/images/memories/mem7b.png"

import mem8 from "../assets/images/memories/mem8.png"
import mem8a from "../assets/images/memories/mem8a.png"
import mem8b from "../assets/images/memories/mem8b.png"
import mem8c from "../assets/images/memories/mem8c.mp4"

import mem9 from "../assets/images/memories/mem9.png"
import mem9a from "../assets/images/memories/mem9a.png"
import mem9b from "../assets/images/memories/mem9b.png"
import mem9c from "../assets/images/memories/mem9c.png"
import mem9d from "../assets/images/memories/mem9d.png"

import mem10 from "../assets/images/memories/mem10.png"
import mem10a from "../assets/images/memories/mem10a.png"
import mem10b from "../assets/images/memories/mem10b.png"
import mem10c from "../assets/images/memories/mem10c.png"

import mem11 from "../assets/images/memories/mem11.png"
import mem11a from "../assets/images/memories/mem11a.png"
import mem11b from "../assets/images/memories/mem11b.png"

import mem12 from "../assets/images/memories/mem12.png"
import mem12a from "../assets/images/memories/mem12a.png"
import mem12b from "../assets/images/memories/mem12b.png"
import mem12c from "../assets/images/memories/mem12c.png"

import mem13 from "../assets/images/memories/mem13.png"
import mem13a from "../assets/images/memories/mem13a.png"
import mem13b from "../assets/images/memories/mem13b.png"
import mem13c from "../assets/images/memories/mem13c.png"

import mem14 from "../assets/images/memories/mem14.png"
import mem14a from "../assets/images/memories/mem14a.png"
import mem14b from "../assets/images/memories/mem14b.png"
import mem14c from "../assets/images/memories/mem14c.png"
import mem14d from "../assets/images/memories/mem14d.png"
import mem14e from "../assets/images/memories/mem14e.png"
import mem14f from "../assets/images/memories/mem14f.png"
import mem14g from "../assets/images/memories/mem14g.png"
import mem14h from "../assets/images/memories/mem14h.mp4"
import mem14i from "../assets/images/memories/mem14i.mp4"

import mem15 from "../assets/images/memories/mem15.png"
import mem15a from "../assets/images/memories/mem15a.png"
import mem15b from "../assets/images/memories/mem15b.png"
import mem15c from "../assets/images/memories/mem15c.png"
import mem15d from "../assets/images/memories/mem15d.png"

import mem16 from "../assets/images/memories/mem16.png"
import mem16a from "../assets/images/memories/mem16a.png"
import mem16b from "../assets/images/memories/mem16b.png"
import mem16c from "../assets/images/memories/mem16c.png"
import mem16d from "../assets/images/memories/mem16d.png"
import mem16e from "../assets/images/memories/mem16e.png"
import mem16f from "../assets/images/memories/mem16f.png"
import mem16g from "../assets/images/memories/mem16g.png"
import mem16h from "../assets/images/memories/mem16h.png"
import mem16i from "../assets/images/memories/mem16i.png"
import mem16j from "../assets/images/memories/mem16j.png"
import mem16k from "../assets/images/memories/mem16k.png"
import mem16l from "../assets/images/memories/mem16l.png"
import mem16m from "../assets/images/memories/mem16m.png"

import mem17 from "../assets/images/memories/mem17.png"
import mem17a from "../assets/images/memories/mem17a.png"
import mem17b from "../assets/images/memories/mem17b.png"
import mem17c from "../assets/images/memories/mem17c.png"

import mem18 from "../assets/images/memories/mem18.png"
import mem18a from "../assets/images/memories/mem18a.png"
import mem18b from "../assets/images/memories/mem18b.png"
import mem18c from "../assets/images/memories/mem18c.png"

import mem19 from "../assets/images/memories/mem19.png"
import mem19a from "../assets/images/memories/mem19a.png"
import mem19b from "../assets/images/memories/mem19b.png"
import mem19c from "../assets/images/memories/mem19c.png"
import mem19d from "../assets/images/memories/mem19d.png"
import mem19e from "../assets/images/memories/mem19e.png"
import mem19f from "../assets/images/memories/mem19f.png"
import mem19g from "../assets/images/memories/mem19g.png"
import mem19h from "../assets/images/memories/mem19h.png"
import mem19i from "../assets/images/memories/mem19i.png"
import mem19j from "../assets/images/memories/mem19j.png"
import mem19k from "../assets/images/memories/mem19k.png"
import mem19l from "../assets/images/memories/mem19l.png"
import mem19m from "../assets/images/memories/mem19m.png"
import mem19n from "../assets/images/memories/mem19n.png"
import mem19o from "../assets/images/memories/mem19o.png"
import mem19p from "../assets/images/memories/mem19p.png"
import mem19q from "../assets/images/memories/mem19q.png"
import mem19r from "../assets/images/memories/mem19r.png"
import mem19s from "../assets/images/memories/mem19s.png"
import mem19t from "../assets/images/memories/mem19t.png"
import mem19u from "../assets/images/memories/mem19u.png"
import mem19v from "../assets/images/memories/mem19v.png"
import mem19w from "../assets/images/memories/mem19w.png"
import mem19x from "../assets/images/memories/mem19x.png"
import mem19y from "../assets/images/memories/mem19y.mp4"
import mem19z from "../assets/images/memories/mem19z.png"

import mem20 from "../assets/images/memories/mem20.png"
import mem20a from "../assets/images/memories/mem20a.png"

import mem21 from "../assets/images/memories/mem21.png"
import mem21a from "../assets/images/memories/mem21a.png"
import mem21b from "../assets/images/memories/mem21b.png"
import mem21c from "../assets/images/memories/mem21c.png"

import n1 from "../assets/images/memories/n1.png"
import n2 from "../assets/images/memories/n2.png"
import n3 from "../assets/images/memories/n3.png"
import n4 from "../assets/images/memories/n4.png"
import n5 from "../assets/images/memories/n5.png"
import n6 from "../assets/images/memories/n6.png"
import n7 from "../assets/images/memories/n7.png"
import n8 from "../assets/images/memories/n8.png"
import n9 from "../assets/images/memories/n9.png"
import n10 from "../assets/images/memories/n10.png"
import n11 from "../assets/images/memories/n11.png"
import n12 from "../assets/images/memories/n12.png"
import n13 from "../assets/images/memories/n13.png"
import n14 from "../assets/images/memories/n14.png"
import n15 from "../assets/images/memories/n15.png"
import n16 from "../assets/images/memories/n16.png"
import n17 from "../assets/images/memories/n17.png"
import n18 from "../assets/images/memories/n18.png"
import n19 from "../assets/images/memories/n19.png"
import n20 from "../assets/images/memories/n20.png"
import n21 from "../assets/images/memories/n21.png"
import n22 from "../assets/images/memories/n22.png"
import n23 from "../assets/images/memories/n23.png"
import n24 from "../assets/images/memories/n24.jpg"
import n26 from "../assets/images/memories/n26.mp4"
import n27 from "../assets/images/memories/n27.png"
import n28 from "../assets/images/memories/n28.png"
import n30 from "../assets/images/memories/n30.mp4"





/* MEMORY DATA */
const memories = [
    {
        cover: mem1,
        title: "Our first photo together 🤍",
        time: "TechSymposium 15 March 2025",
        description:
            "We had planned to click many photos in ACSES t-shirt but were too tired to click. So during the last round we went to the canteen to drink something and got a chance to click our first photo together. But we were too shy to come close or hold hands 🤍",
        gallery: [mem1, mem1a],
    },
    {
        cover: mem2,
        title: "Our Colorful Beginning 🤍",
        time: "Rangpanchmi 19 March 2025",
        description:
            "We had planned our very first pani-puri and pav bhaji date, but we chose the wrong time. That day was full of obstacles.. it was Rangpanchmi, and everyone was out playing with colors. We got colored too, and you even had to change your shirt. Almost all the shops were closed, and we had to wait just to get pani puri. But despite everything, we laughed through it all and ended up clicking some really beautiful photos together. You had also brought KitKat for me. What a colorful day it was!💗",
        gallery: [mem2, mem2a, mem2b, mem2c, mem2d],
    },
    {
        cover: mem3,
        title: "The Unforgettable First Reward 🤍",
        time: "Softskills 12 April 2025",
        description:
            "It was for the first time that we had spent the entire day together. We were sitting at Startup Katta inside and you kissed me unexpecedly. I can’t really put into words how that moment felt.You also wanted the same from me. So I had asked you to give a short extempore about ME! And then I gave you the Reward! It was also our very first bus journey together, making the day even more special.😘",
        gallery: [mem3, mem3a, mem3b, mem3c, mem3d, mem3e],
    },
    {
        cover: mem4,
        title: "Our First Movie Date 🤍",
        time: "Sangli 4 May 2025",
        description:
            "Our first movie date will always be our most favorite memory. That was the moment we shared our first actual kiss, and suddenly everything felt magical and so special. You brought me a KitKat and a rose, and honestly, my heart just melted right there. We ate pizza and garlic bread at Amrai, laughed a lot, spent the day creating little pieces of art together. It wasn’t just a date… it was a feeling, a moment, a memory that I will carry in my heart forever. 💖",
        gallery: [mem4, mem4a, mem4b, mem4c, mem4d, mem4e, mem4f, mem4g, mem4h, mem4v],
    },
    {
        cover: mem5,
        title: "Zudio Date 🤍",
        time: "Zudio 5 May 2025",
        description:
            "We went to Zudio to buy you some t-shirts, and that day was special in its own way.It was the first time I sat with you on a two-wheeler, and I’ll always remember that feeling.But deep inside, I was sad… because it was the beginning of our first long-distance for a few days of PL.I wasn’t as enthusiastic while shopping, and I kept thinking I wasn’t being as active as other girlfriends.On the bus ride back home, all those emotions came out and I cried.Not because I didn’t love you enough, but because I loved you so much.🤍",
        gallery: [mem5, mem5a],
    },
    {
        cover: mem6,
        title: "Before the Distance Began 🤍",
        time: "Before PL 7 May 2025",
        description:
            "We had planned one special day to spend together before PL.We did black twinning and felt so happy just being with each other. We had an amazing time at TX-08, broke our kissing record doing a little daring together. We went there to study for SEE… but honestly, we ended up enjoying every moment instead.That day was less about study and more about us.💋",
        gallery: [mem6, mem6a, mem6b, mem6c, mem6d, mem6e],
    },
    {
        cover: mem7,
        title: "More Than a Gift 🤍",
        time: "Birthday 21 May 2025",
        description:
            "You told me you hadn’t gotten any birthday gift for me, but deep down I knew you were going to me a surorise gift. And when I saw it… I truly fell in love with the necklace and the photo polaroid. They meant so much to me. We celebrated my birthday on 31st May. We had decided to do white-shirt twinning, but even though you couldn’t wear it, the day was still perfect—because you were there.That birthday wasn’t about gifts, it was about love. A perfect birthday just because of you🤍",
        gallery: [mem7, mem7a, mem7b],
    },
    {
        cover: mem8,
        title: "The Pav Bhaji Date 🤍",
        time: "Last External 5 June 2025",
        description:
            "You were so sick during the externals, and since our exams were on different days, I came for yours as well.Sitting near the Idea Lab, I couldn’t stop worrying—seeing you in that condition made my heart feel heavy.Even then, we sat together, held each other close, and shared kisses despite your illness.By the time your last external ended, you were feeling much better, and we finally went on a pav bhaji date.That day reminded me that love shows itself most in care, worry, and staying together through everything.🤍",
        gallery: [mem8, mem8a, mem8b, mem8c],
    },
    {
        cover: mem10,
        title: "Twin Green 🤍",
        time: ".Startup Katta 9 June 2025",
        description:
            "We had decided to do green twinning that day. It was such a fun day, filled with laughter and cute moments. We went to Startup Katta, enjoyed our time together, and even clicked some adorable photos. Seeing us, everyone kept asking about our twinning outfits.💚",
        gallery: [mem10, mem10a, mem10b, mem10c,],
    },
    {
        cover: mem9,
        title: "When our Love Was Tested🤍",
        time: "Startup Katta 29 June 2025",
        description:
            "29th June was the most traumatising moment in our relationship. It was the day we were captured on cameras while kissing at Startup Katta, and our ID cards were taken away.We were terrified—constantly worried that everyone, including our families, would come to know about our relationship and our love. Those days were filled with fear, stress, and uncertainty. After a long struggle of almost one and a half months, we finally came out of it, but only after paying a fine of ₹2000. Many people like Admuthe mam, HOD sir, Majgave sir, Danole Sir, Mekalke Sir and Watchman were involved in the process, and it became one of the hardest phases we had to face together.That day tested us deeply but it also showed how strong our bond was, even in the most difficult moments.",
        gallery: [mem9, mem9a, mem9b, mem9c, mem9d],
    },
    {
        cover: mem11,
        title: "Still Us On a Pav Bhaji Date 🤍",
        time: "SoftSkills 29 July 2025",
        description:
            "Despite all the tension about getting our ID cards back, our bond never changed. We were still loving each other the same way, smiling, laughing, and finding comfort in being together.After the soft skills session, we went out to eat pav bhaji and spent some quiet, happy moments.We chose a different road to walk on, and finally went home together by bus.Even in uncertainty, we kept choosing each other and that meant everything.🤍",
        gallery: [mem11, mem11a, mem11b],
    },
    {
        cover: mem12,
        title: "One Umbrella, Many Smiles 🤍",
        time: "Fortune 13 August 2025",
        description:
            "Our second movie date was for the movie Narsimha. Since we had just come out of the ID card matter, we were still scared of getting caught again.We had lunch near the Idea Lab with a little fear in our hearts and then walked together to Fortune.Inside the theatre, all the worries faded—we simply enjoyed each other’s company.After the movie, it started raining, and we walked together under a single umbrella, laughing and smiling the whole way. That day reminded us that even after fear, happiness finds its way back to us.🤍",
        gallery: [mem12, mem12a, mem12b, mem12c],
    },
    {
        cover: mem13,
        title: "The Unplanned Day 🤍",
        time: "Long Walk 14 August 2025",
        description:
            "Coincidentally, we were twinning in our denim jackets that day, without even planning it.We ended up having an unplanned Chinese food date and enjoyed every bite.We walked through the streets, talking endlessly, shared ice cream together,and also visited the Ganpati temple, seeking blessings side by side.It was one of those simple, unexpected days that quietly became one of my favorite memories.",
        gallery: [mem13, mem13a, mem13b, mem13c],
    },
    {
        cover: mem14,
        title: "Little Moments 🤍",
        time: "Natyagruha 25 August 2025",
        description:
            "We were sitting in Natyagruha, playing UNO together, completely lost in our little world. Later, we clicked so many photos, capturing those simple yet precious moments that made the day even more special.🤍",
        gallery: [mem14, mem14a, mem14b, mem14c, mem14d, mem14e, mem14f, mem14g, mem14h, mem14i],
    },
    {
        cover: mem15,
        title: "Rheal Software It Is! 🤍",
        time: "09 September 2025",
        description:
            "When I got selected for Rheal Software, everyone celebrated by putting gulal on me and on you too. We wiped it all off together.To celebrate, I gave you a treat of CADB and chocolate cold coffee, and it felt extra special sharing that moment with you. We also clicked some really cute photos that I still smile at.That day was full of pride, happiness, and togetherness.🤍",
        gallery: [mem15, mem15a, mem15b, mem15c, mem15d],
    },
    {
        cover: mem16,
        title: "Dandiya, Rain and Us 🤍",
        time: "26 September 2025",
        description:
            " We clicked some really beautiful photos during the dandiya nights. I also got to see you in a kurta for the first time, and you looked so handsome..it’s a moment I’ll never forget. We danced in the rain, laughed freely, and enjoyed every second together.Those nights were filled with music, rain, love, and happiness.Truly, the best dandiya nights ever.🤍",
        gallery: [mem16, mem16a, mem16b, mem16c, mem16d, mem16e, mem16f, mem16g, mem16h, mem16i, mem16j, mem16k, mem16l, mem16m],
    },
    {
        cover: mem21,
        title: "Tears and Milkshakes 🤍",
        time: "Codevita 11 October 2025",
        description:
            "This day is truly one of my most favourite memories. I had an amazing time at your house, spending the entire day together. I had come there for CodeVita, but it turned out to be a beautiful opportunity for us to spend precious moments with each other.We shared laughter, warmth, and quiet moments—stealing little kisses, cuddling close, and even sleeping wrapped in one blanket. Everything felt so peaceful and perfect with you. To make the day even more special, we visited several temples in Brahmanpuri, ending the day with calm hearts and beautiful memories.That day will always stay close to my heart ✨💞",
        gallery: [mem21, mem21a, mem21b, mem21c],
    },
    {
        cover: mem18,
        title: "Tears and Milkshakes 🤍",
        time: "17 October 2025",
        description:
            "As it was once again time to stay away from you during PL, I found myself crying a lot. Even being apart for a few days felt unbearable and I truly couldn’t imagine life without you, even for a short while. To lighten the heaviness of that moment, we tried strawberry milkshake and chocolate milkshake together. That small, sweet pause didn’t take away the pain of separation, but it made it a little easier because we were together then.🤍",
        gallery: [mem18, mem18a, mem18b, mem18c]
    },

    {
        cover: mem17a,
        title: "Sangli Memories🤍",
        time: "2 November 2025",
        description:
            "Our one-day trip to Sangli with your diploma friends turned out to be truly mesmerizing. At first, I felt a little sad because you had canceled our plan to visit the ISKCON temple and asked me to meet your friends instead. Since it was my Ekadashi fast, I was also unsure about coming. But it meant so much to me when you chose to keep the fast along with me and it made me really happy. After spending time with your friends, I realized that this plan was worth it too. We visited the Ganpati temple together and felt a deep sense of peace and calm. Later, we spent quiet, peaceful moments at Mai Ghat, and by the end of the day, it felt like a beautifully spent memory that I’ll always cherish.🤍",
        gallery: [mem17, mem17a, mem17b, mem17c],
    },

    {
        cover: mem20,
        title: "The Hardest Goodbye 🤍",
        time: "28 November 2025",
        description:
            "That day was the most emotional and unbearable day of my life—the day our long-distance journey began. I came to your home to leave you for the train, already knowing how hard it was going to be, yet trying to stay strong. We spent time together, laughed, talked, and tried to enjoy every small moment, but beneath those smiles were heavy hearts and eyes full of tears waiting to fall. When the time came to leave, everything felt too fast. Holding back tears became impossible, and we cried a lot, knowing that we wouldn’t be seeing each other for days. And then that moment—seeing you standing there, waving goodbye from the train—broke me completely. Even today, that single image lives in my heart, and every time I remember it, my eyes still fill with tears.That goodbye wasn’t just a wave; it was a piece of my heart leaving with you.🤍",
        gallery: [mem20, mem20a]
    },
    {
        cover: mem19,
        title: "Just Being with You 🤍",
        time: "Cute Simple Moments",
        description:
            "We shared so many beautiful moments together near the Idea Lab, TX-08, the staircase in the Textile Department, and Sundarbag.Those places may look ordinary to others, but for me they’ll always be special because every corner holds a memory of us. Being with you helped me open up, forget all my worries, and just be myself. With you, I laughed more, felt lighter, and truly enjoyed every moment we spent together. Our stolen kisses, always with that little fear of being caught, and our cute gulu-gulu moments made everything even more magical. 🥹💋 Those small, shy moments of love are the ones I’ll always cherish the most.🤍",
        gallery: [mem19, mem19a, mem19b, mem19c, mem19d, mem19e, mem19f, mem19g, mem19h, mem19i, mem19j, mem19k, mem19l, mem19m, mem19n, mem19o, mem19p, mem19q, mem19r, mem19s, mem19t, mem19u, mem19v, mem19w, mem19x, mem19y, mem19z],
    },
    {
        cover: n1,
        title: "My Favorite Reason to Smile 😄💕",
        description:
            "Your funny photos never fail to make me smile. They show your silly, carefree side that I adore so much. Every time I see them, I’m reminded of how effortlessly you make me happy. With you, laughter always comes naturally.  😄💕",
        gallery: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20, n21, n22, n23, n24, n26, n27, n28, n30],
    }
]

export default function Memories() {
    const [activeMemory, setActiveMemory] = useState(null)

    return (
        <div
            className="min-h-screen px-6 py-12"
            style={{
                background: "linear-gradient(0deg, #d2b48c, #c19a6b)",
            }}
        >
            {/* TITLE */}
            <h1 className="text-3xl sm:text-5xl font-semibold text-white text-center mb-12">
                Our Cute Memories 📌
            </h1>
            <p className="text-center text-white/80 text-sm mb-12">
                Each card holds a memory — Click to open  🤍
            </p>


            {/* BOARD */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
                {memories.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveMemory(item)}
                        className={`
                            relative bg-white rounded-xl p-4 shadow-lg
                            transform transition duration-300
                            hover:scale-105 cursor-pointer
                            ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}
                        `}
                    >
                        {/* PIN */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <div className="w-4 h-4 bg-red-400 rounded-full shadow-md" />
                        </div>

                        {/* PHOTO */}
                        <div className="bg-pink-50 rounded-lg overflow-hidden h-50 mb-4">
                            <img
                                src={item.cover}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CAPTION */}
                        <p className="text-center text-stone-600 font-medium text-sm">
                            {item.title}
                        </p>
                        <p className="text-center text-stone-400 text-xs mt-1">
                            {item.time}
                        </p>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {activeMemory && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                    onClick={() => setActiveMemory(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="
                            bg-white rounded-2xl max-w-2xl w-full
                            max-h-[85vh] overflow-y-auto
                            p-6 sm:p-8
                            animate-scaleIn
                            relative
                        "
                    >
                        {/* TITLE */}
                        <h2 className="text-2xl font-semibold text-rose-500 mb-2">
                            {activeMemory.title}
                        </h2>
                        <p className="text-stone-400 text-sm mb-4">
                            {activeMemory.time}
                        </p>

                        {/* GALLERY */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                            {activeMemory.gallery.map((media, i) => {
                                const isVideo = media.endsWith(".mp4")

                                return isVideo ? (
                                    <video
                                        key={i}
                                        src={media}
                                        controls
                                        autoPlay={false}
                                        className="
          rounded-xl
          h-40 w-full
          object-cover
          bg-black
        "
                                    />
                                ) : (
                                    <img
                                        key={i}
                                        src={media}
                                        alt=""
                                        className="
          rounded-xl
          h-40 w-full
          object-cover
        "
                                    />
                                )
                            })}
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-stone-600 text-sm leading-relaxed">
                            {activeMemory.description}
                        </p>

                        {/* CLOSE */}
                        <button
                            onClick={() => setActiveMemory(null)}
                            className="
                                mt-6
                                px-6 py-2
                                bg-rose-400 text-white
                                rounded-full
                                hover:bg-rose-500
                                transition
                            "
                        >
                            Close 🤍
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
