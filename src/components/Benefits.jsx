import Container from "./Container";
import clsx from "clsx";

const listBenefit = [
  {
    id: 1,
    title: "Kursus Gratis",
    description:
      "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
  },
  {
    id: 2,
    title: "Akses Selamanya",
    description:
      "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
  },
  {
    id: 3,
    title: "Grup Konsultasi",
    description:
      "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
  },
  {
    id: 4,
    title: "Sertifikat dan Portofolio",
    description:
      "Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan",
  },
  {
    id: 5,
    title: "Belajar Lebih Terarah",
    description:
      "Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan",
  },
  {
    id: 6,
    title: "Instruktur Berpengalaman",
    description:
      "Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya",
  },
];

const Benefits = () => {
  return (
    <section id="benefits">
      <Container>
        <div className={clsx("pt-28 pb-8")}>
          <h2 className="font-semibold text-4xl text-center max-w-2xl mx-auto">
            Keuntungan Bergabung Dengan E-Learning EDUFREE
          </h2>
          <div className={clsx("mt-10", "grid grid-cols-3 gap-10")}>
            {listBenefit.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  "p-8",
                  "bg-gray-100",
                  "flex flex-col space-y-3"
                )}
              >
                <div
                  className={clsx(
                    "bg-blue-800 text-white",
                    "h-11 w-11 pl-2",
                    "flex items-center justify-center",
                    "text-xl font-bold",
                    "rounded-lg",
                    "relative overflow-hidden",
                    "after:h-11 after:w-11 after:absolute after:bg-secondary after:rounded-lg after:right-7 after:top-5"
                  )}
                >
                  {item.id}
                </div>
                <h4 className="font-medium text-2xl">{item.title}</h4>
                <p className="text-base text-primary-2/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
