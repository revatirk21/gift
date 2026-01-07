import React, { useState } from "react"
import FloatingHearts from "../components/common/FloatingHearts"

export default function Letter() {
    const [open, setOpen] = useState(false)

    return (
        <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-6 relative overflow-hidden">
            <FloatingHearts />
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-serif text-stone-700 mb-10 text-center">
                A Letter For You
            </h1>

            {/* Envelope Wrapper */}
            <div
                onClick={() => setOpen(true)}
                className="relative w-full max-w-xl cursor-pointer"
            >
                {/* Envelope Body */}
                <div className="bg-pink-100 rounded-2xl min-h-104 shadow-lg relative overflow-visible">

                    {/* Letter */}
                    <div
                        className={`
              absolute left-1/2 -translate-x-1/2
              w-[90%] bg-white rounded-xl p-6 shadow-md
              transition-all duration-1000
              ${open ? "top-6 opacity-100" : "top-24 opacity-0"}
            `}
                    >
                        <div className="text-stone-500 text-base leading-relaxed space-y-4 max-h-64 overflow-y-auto">

                            <span className="text-rose-500 font-medium">
                                Hey my dear Shona (Ahooo)💝
                            </span>

                            <p>
                                Ya adhi pn mi ekda khup motha paragraph lihila hota tuzya sathi… tuzya lakshat asel ka nahi mahit nahi, bcoz tu lagech sgl visrtos.
                                But I had written about how I fell for you, how those feelings emerged and which incidences made me realise my intense love for you.❤️
                                So today I am not going to write the same. I am going to write about US and our cute little world. How you make my life so beautiful by just being there.💓 </p>

                            <p>Tu mazya life cha ani daily routine cha khup important part ahes. Sakali dole ughdtana, ratri zoptana, madhlya pratyek thought madhe ani even dreams madhe fakt tuch astos. Tu sodlyas mala dusrya kasha madhech ata interest nahiye. Kuthlya hi fancy plans peksha, mothya gestures peksha, tu fakt mazya sobat ahes hech mala enough vatt. Tu mazya javal asn hech sglyat moth sukh ahe mazya sathi.☺️💝</p>

                            <p>Mala paise, shopping, gifts, cafes, fancy surprises ya ksha madhech evdha interest nahiye. Fakt tuzya barobar shantpane bsun time spend kela tari khup khush hote mi.🥰</p>

                            <p>Na mi perfect ahe na tu. Ani aplyala he perfection nakoch ahe. Apn jase ahot ts accept kel ahe apn ekmekana. Mi khup lazy ahe.. kadhi kadhi khup overthinking karte. Tuz tari kadhich aikt nahi. But evdh asun pn tu khup chan samjun ghetos mala. Kadhi kadhi tu pn khup overthinking kartos, panic hotos, kiva tula vatt ki tu mazya sathi jast paise kharch karu shakt nahis. But tu je kahi kartos mazya sathi te khup manapasun ani premane kartos. Ani tuze hech efforts ani loyalty khup precious ahe mazya sathi.😍</p>

                            <p> Mi pn pratyek goshti madhe tula samjun ghyaych try karate. Ani apn ayushyabhr asech ekmekana samjun gheun sath deu.  Tu jasa ahes tsa mala khup awdtos. Ani mi adhich sangitl hot tula ki tuzya kade kahi tari ahe mhanun prem nahi kel mi tuzya vr.  Tu sobat asn hech mazya sathi khup important ahe.💕</p>

                            <p>Aplya madhe kadhi kadhi khup obstacles yetat. But apn dogh milun tya obstacles vr maat karto. Aplya eka bheti sathi pn khup kay kay karayla lagt. But at last apn bhetlyavr je satisfaction milt tya pudhe te efforts kahich nahit.🥹</p>

                            <p>Maz future pn mi tuzya barobar ch imgaine karte. Apl ek chan as ghar asav.. Ani ek cute family. Mala fairy tale future nako ahe. Just ek simple, promising ani loyal future pahije ahe fakt tuzya barobar. Apn khup efforts gheu, hardwork karu ani at the end of the day ekmekanchya kushi madhe apla sgla thakva nighun jail. Aplya barobar ch aplya family sathi pn khup kahi karaych ahe aplyala. He sgle dreams lavkr ch purn hovot.
                                I am eagerly waiting for the day to become Sou. Revati Neeraj Surnis..🥹😃</p>

                            <p>Choosing you eveyday, in every phase, in every lifetime 🤗💝
                                Love you till the eternity 😘♾️</p>


                            <p className="pt-4">
                                With all my love, <br />
                                <span className="text-rose-500 font-medium">
                                    Your's Bacha (Baykooo)💗
                                </span>
                            </p>

                        </div>
                    </div>

                    {/* Envelope Flap */}
                    <div
                        className={`
              absolute top-0 left-0 w-full h-32
              bg-pink-300
              clip-path-envelope
              transition-transform duration-700
              ${open ? "-rotate-180 origin-top" : ""}
            `}
                    />

                    {/* Center Heart */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {!open && (
                            <span className="text-rose-400 text-2xl animate-pulse">
                                💗
                            </span>
                        )}
                    </div>

                    {/* Click Text */}
                    {!open && (
                        <p className="absolute bottom-6 w-full text-center text-stone-400">
                            Click to open
                        </p>
                    )}
                </div>
            </div>

            {/* Hint */}
            {!open && (
                <p className="mt-6 text-sm text-rose-400">
                    tap the envelope to read ♡
                </p>
            )}
        </div>
    )
}
