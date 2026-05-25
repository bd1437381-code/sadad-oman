const logo = "/eoman-logo.png";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start py-6 px-4"
      style={{ backgroundColor: "#f3f4f6", direction: "rtl" }}
    >
      <div className="w-full max-w-sm flex flex-col gap-4">

        {/* Header Card */}
        <div
          className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 text-center"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
        >
          <img src={logo} alt="شعار سداد عُمان" style={{ width: 100, height: "auto" }} />
          <div>
            <h1
              className="text-2xl font-bold"
              style={{ color: "#7c1b1b", fontFamily: "Cairo, sans-serif" }}
            >
              بوابة سداد عُمان
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "#6b7280", fontFamily: "Cairo, sans-serif" }}
            >
              الدفع الإلكتروني الأمن
            </p>
          </div>
        </div>

        {/* About Card */}
        <div
          className="bg-white rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
        >
          <img src={logo} alt="شعار سداد عُمان" style={{ width: 100, height: "auto" }} />

          <div>
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: "#7c1b1b", fontFamily: "Cairo, sans-serif" }}
            >
              عن سداد عُمان
            </h2>

            <p
              className="text-sm leading-7 mb-3"
              style={{ color: "#374151", fontFamily: "Cairo, sans-serif" }}
            >
              سداد عُمان هي منصة دفع إلكتروني آمنة وسهلة الاستخدام تتيح للمواطنين والمقيمين في سلطنة عُمان دفع فواتيرهم ورسومهم الحكومية والخاصة بكل يسر وأمان.
            </p>

            <p
              className="text-sm leading-7 mb-3"
              style={{ color: "#374151", fontFamily: "Cairo, sans-serif" }}
            >
              تتميز المنصة بتكاملها مع جميع البنوك المحلية وتوفرها على أعلى معايير الأمان والخصوصية لضمان سلامة معاملاتك المالية.
            </p>

            <p
              className="text-sm leading-7"
              style={{ color: "#374151", fontFamily: "Cairo, sans-serif" }}
            >
              يمكنك استخدام سداد عُمان لدفع فواتير الكهرباء والماء والهاتف والإنترنت والعديد من الخدمات الأخرى.
            </p>
          </div>

          <button
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all active:scale-95"
            style={{
              backgroundColor: "#9B1C1C",
              fontFamily: "Cairo, sans-serif",
              letterSpacing: "0.02em",
            }}
            onClick={() => alert("جاري تحميل الخدمة...")}
          >
            بدء الخدمة
          </button>
        </div>

      </div>
    </div>
  );
}
