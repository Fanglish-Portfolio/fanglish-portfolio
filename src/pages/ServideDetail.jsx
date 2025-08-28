import React from "react";
import service1 from "./../assets/image/service/service/service1.png";
import service2 from "./../assets/image/service/service/service2.png";
import service3 from "./../assets/image/service/service/service3.png";
import service4 from "./../assets/image/service/service/service4.png";
import service5 from "./../assets/image/service/service/service5.png";
import service6 from "./../assets/image/service/service/service6.png";
import { useParams } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Consulting Service",
    text: (
      <p className="">
        🚀💯 𝐔𝐩𝐠𝐫𝐚𝐝𝐞 𝐘𝐨𝐮𝐫 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐒𝐤𝐢𝐥𝐥 𝐰𝐢𝐭𝐡 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡'𝐬 𝐁𝐞 𝐚 𝐆𝐫𝐚𝐦𝐦𝐚𝐫
        𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬 🚀💯 <br /> 👩🏻‍💻 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐑𝐞𝐚𝐝𝐢𝐧𝐠 နဲ့ 𝐖𝐫𝐢𝐭𝐢𝐧𝐠
        မှာအားနည်းကြတဲ့ ကျောင်းသား/သူတွေ <br /> 😔 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐢𝐬𝐭𝐚𝐤𝐞𝐬
        တွေအမြဲလုပ်မိလို့ 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞 မှာယုံကြည်မှု
        လျော့နည်းနေကြတဲ့သူတွေနဲ့ <br /> 👩🏻‍🎓 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 ပိုင်းကို စနစ်တကျ
        သင်ယူလိုတဲ့ 𝐈𝐆𝐂𝐒𝐄/𝐆𝐄𝐃 ကျောင်းသားတွေအတွက် <br /> 💼 လုပ်ငန်းခွင်နှင့်
        နေရာဒေသ၊နယ်ပယ် မျိုးစုံအားလုံးမှာ 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 စကားပြောဆိုရာတွင်
        ပိုမိုတိုးတက်စေဖို့နဲ့ <br /> 👩🏻‍🎓 𝐎𝐯𝐞𝐫𝐬𝐞𝐚𝐬 𝐉𝐨𝐛 𝐈𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰 တွေကို
        အလွယ်တကူဖြေဆိုနိုင်စေရန် <br /> 🚀 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 ရဲ့ “𝟔 𝐦𝐨𝐧𝐭𝐡𝐬-𝐭𝐨-𝐭𝐡𝐞-𝐌𝐚𝐱”
        (𝟑-𝐢𝐧-𝟏 𝐏𝐨𝐰𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬) တွေထဲက 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐂𝐥𝐚𝐬𝐬 လေးနဲ့
        မိတ်ဆက်ပေးချင်ပါတယ်။🤯🤯 <br /> 💁🏻‍♀️ ယခုဖွင့်လှစ်ပေးမယ့် 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫
        𝐂𝐥𝐚𝐬𝐬 လေးမှာဆိုရင် <br /> 📖 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 ကိုအခြေခံကနေ 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
        ကျကျသင်ကြားပေးမှာဖြစ်ပြီးတော့ 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐜𝐚𝐭𝐢𝐨𝐧 အတွက်‌ရော၊
        စကားလုံးဝေါဟာရကြွယ်ဝလာမည့်အပြင် သဒ္ဒါမှန်မှန်ကန်ကန်နဲ့ 𝐩𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥 ကျကျ
        ပြောလာနိုင်စေရန် 𝐠𝐫𝐚𝐦𝐦𝐚𝐫 𝐟𝐨𝐜𝐮𝐬𝐞𝐝 အတန်းလေးကို ဒုတိယအဆင့်အနေနဲ့ 𝐣𝐨𝐢𝐧
        နိုင််မှာဖြစ်ပြီး 𝐈𝐄𝐋𝐓𝐒, 𝐃𝐮𝐨𝐥𝐢𝐧𝐠𝐨 တို့စသည့် 𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐓𝐞𝐬𝐭 လေးတွေကို
        ပြင်ဆင်မယ့်သူတွေအတွက်လဲ ဒီအတန်းလေးက အဆင်သင့် ဖြစ်သွားစေမှာပါ😍 ။ 👩🏻‍🏫🌟 👩🏻‍🏫
        <br /> 📖 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 ရဲ့ “ 𝟔 𝐦𝐨𝐧𝐭𝐡𝐬-𝐭𝐨-𝐭𝐡𝐞-𝐌𝐚𝐱” (𝟑-𝐢𝐧-𝟏 𝐏𝐨𝐰𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬)
        လေးကိုတက်ချင်တဲ့ကျောင်းသူ/သားတွေကတော့ အတန်းအပ်တဲ့အခါမှာ Level Test
        ဖြေရမှာဖြစ်ပြီးတော့ 𝐏𝐫𝐞-𝐈𝐧𝐭𝐞𝐫𝐦𝐞𝐝𝐢𝐚𝐭𝐞 ရရှိသူတွေသာ
        တက်ရောက်ခွင့်ရမှာပဲဖြစ်ပါတယ်။ 🏆🏆 🏆 <br /> 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐂𝐥𝐚𝐬𝐬
        တက်ပြီးရင်ဘယ်လို တွေရနိုင်မလဲ?? 🏆 ✨ <br /> 𝐒𝐞𝐧𝐭𝐞𝐧𝐜𝐞 𝐒𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
        တွေမှန်ကန်အောင်တည်ဆောက်နိုင်မယ်၊ ✨ <br /> 𝐂𝐨𝐦𝐩𝐥𝐞𝐱 𝐒𝐞𝐧𝐭𝐞𝐧𝐜𝐞𝐬 တွေနဲ့
        𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐨𝐫𝐬 တွေကို 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥 ကျကျအသုံးပြုနိုင်မယ်၊ ✨ <br /> 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜
        𝐖𝐫𝐢𝐭𝐢𝐧𝐠 ပိုင်းမှာလည်း တိုးတက်လာမယ့်အပြင် ✨ <br /> ကိုယ့်အတွက်လိုအပ်တဲ့
        𝐏𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐓𝐞𝐬𝐭 တွေဖြေဆိုတဲ့အခါမှာလည်း 𝐂𝐨𝐧𝐟𝐢𝐝𝐞𝐧𝐜𝐞 ရှိရှိ
        ဖြေဆိုနိုင်မှာဖြစ်ပါတယ်။ <br /> 📖 𝐂𝐥𝐚𝐬𝐬 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 လေးကတော့ 🗓
        <br /> 𝐒𝐭𝐚𝐫𝐭𝐢𝐧𝐠 𝐃𝐚𝐭𝐞 - 𝟏𝟕𝐭𝐡, 𝐎𝐜𝐭 𝟐𝟎𝟐𝟓 ⏳𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 - 𝟐 𝐌𝐨𝐧𝐭𝐡𝐬 🕰 𝐂𝐥𝐚𝐬𝐬
        𝐅𝐫𝐞𝐪𝐮𝐞𝐧𝐜𝐲 - 𝐌𝐨𝐧𝐝𝐚𝐲 & 𝐅𝐫𝐢𝐝𝐚𝐲 <br /> ⏰ 𝐓𝐢𝐦𝐞𝐭𝐚𝐛𝐥𝐞 - 𝟖:𝟎𝟎𝐏𝐌 𝐭𝐨 𝟗:𝟑𝟎𝐏𝐌 𝐌𝐌𝐓
        <br /> 💁🏻‍♀️ ကိုယ်က 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐄𝐫𝐫𝐨𝐫 တွေကြောင့်စိတ်ညစ်နေပြီ၊ စာမေးပွဲမှာလည်း
        အမှတ်တွေထပ်မလျော့ချင်တော့ဘူး ဆိုရင်တော့ ဒီ 𝐂𝐥𝐚𝐬𝐬 လေးကမဖြစ်မနေ 𝐉𝐨𝐢𝐧
        သင့်တဲ့ 𝐂𝐥𝐚𝐬𝐬 လေးပဲဖြစ်ပါတယ်။ <br /> 🔥💯💯 💁🏻‍♀️ ဒါ့အပြင် 𝐀𝐜𝐚𝐝𝐞𝐦𝐢𝐜 𝐖𝐫𝐢𝐭𝐢𝐧𝐠
        ပိုင်းကို 𝐒𝐭𝐫𝐨𝐧𝐠 ဖြစ်လိုတဲ့သူတွေအတွက် နောက်ထပ် မဖြစ်မနေလိုအပ်တဲ့
        𝐕𝐨𝐜𝐚𝐛𝐮𝐥𝐚𝐫𝐲 ကြွယ်ဝဖို့ကိုလည်း 𝟑-𝐢𝐧-𝟏 𝐏𝐨𝐰𝐞𝐫 𝐒𝐞𝐫𝐢𝐞𝐬 ထဲက 𝐕𝐨𝐜𝐚𝐛 𝐀𝐦𝐩𝐥𝐢𝐟𝐢𝐞𝐫
        𝐂𝐥𝐚𝐬𝐬 💁🏻‍♀️ 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐒𝐤𝐢𝐥𝐥 ကို 𝐅𝐨𝐜𝐮𝐬 ပြီး စနစ်တကျလေ့ကျင့်ချင်တဲ့သူ တွေအတွက်
        𝐒𝐭𝐞𝐩-𝐔𝐩 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐅𝐨𝐫 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐭𝐢𝐨𝐧 𝐂𝐥𝐚𝐬𝐬 လေးလည်း ဖွင့်လှစ်ပေးထားပါတယ်။
      </p>
    ),
  },
  {
    id: 2,
    image: service2,
    title: "Language Class",
    text: <p></p>,
  },
  {
    id: 3,
    image: service3,
    title: "Ausbildung",
    text: <p></p>,
  },
  {
    id: 4,
    image: service4,
    title: "Duales Stadium Service",
    text: <p></p>,
  },
  {
    id: 5,
    image: service5,
    title: "Scholarship Programs",
    text: <p></p>,
  },
  {
    id: 6,
    image: service6,
    title: "Study Abroad",
    text: <p></p>,
  },
];

function ServideDetail() {
  const { id } = useParams();
  console.log(id);

  const service = serviceData.find((service) => service.id == id);
  console.log(service);

  return (
    <div className="containers">
      <div className="mt-20">
        <div className="">
          <div
            className="px-10 py-8 rounded-2xl service-header h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-14 md:-translate-x-0 z-10 ">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center w-[300px]">
                <img
                  src={service.image}
                  alt="service1"
                  className="w-[200px] h-[200px] md:w-[312px] md:h-[312px] rounded-xl"
                />
                <p className="max-w-md text-white text-[24px] md:text-[40px] font-semibold letter-spacing-[2px] leading-[1.5]">
                  {service.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 leading-[3.5]">{service.text}</div>

      <div className="leading-[3.5]">
        <p>
          🌟 ဒါကြောင့်𝐆𝐫𝐚𝐦𝐦𝐚𝐫 𝐌𝐨𝐧𝐬𝐭𝐞𝐫 𝐂𝐥𝐚𝐬𝐬 လေးအပြင် 𝐕𝐨𝐜𝐚𝐛 𝐀𝐦𝐩𝐥𝐢𝐟𝐢𝐞𝐫 𝐂𝐥𝐚𝐬𝐬
          လေးနဲ့ 𝐒𝐭𝐞𝐩-𝐔𝐩 𝐒𝐩𝐞𝐚𝐤𝐢𝐧𝐠 𝐅𝐨𝐫 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐭𝐢𝐨𝐧 𝐂𝐥𝐚𝐬𝐬
          လေးကိုပါတွဲပြီးတက်ရောက်ချင်တဲ့သူတွေအတွက်လည်း 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 မှ 𝐒𝐩𝐞𝐜𝐢𝐚𝐥
          𝐃𝐢𝐬𝐜𝐨𝐮𝐧𝐭 အစီအစဉ်လေးတွေလည်း ပြုလုပ်ပေးထားတာမလို့
          အသေးစိတ်လေးသိချင်တယ်ဆိုရင်တော့ 𝐅𝐮𝐍𝐠𝐥𝐢𝐬𝐡 𝐏𝐚𝐠𝐞 𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫
          မှာလာရောက်စုံစမ်းလို့ရပါပြီရှင်။ <br /> 🤗🎉 📘 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐦𝐚𝐭𝐭𝐞𝐫𝐬!
          𝐌𝐚𝐬𝐭𝐞𝐫 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐠𝐫𝐚𝐦𝐦𝐚𝐫 𝐰𝐢𝐭𝐡 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞𝐝 𝐥𝐞𝐬𝐬𝐨𝐧𝐬 𝐚𝐧𝐝 𝐜𝐥𝐞𝐚𝐫 𝐞𝐱𝐩𝐥𝐚𝐧𝐚𝐭𝐢𝐨𝐧𝐬.
          𝐁𝐮𝐢𝐥𝐝 𝐲𝐨𝐮𝐫 𝐬𝐤𝐢𝐥𝐥𝐬 𝐰𝐢𝐭𝐡 𝐮𝐬 📘 <br /> ☎️𝐕𝐢𝐛𝐞𝐫 𝐏𝐡𝐨𝐧𝐞 𝐍𝐨.- +66969949572{" "}
          <br /> 📩 𝐌𝐚𝐢𝐥 - pinky.htut@funglishedu.org
        </p>
      </div>
    </div>
  );
}

export default ServideDetail;
