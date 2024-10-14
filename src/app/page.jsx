import Feed from '@/components/Feed';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Plants
        <br className="max-md:hidden" />
        <span className="green_gradient text-center"> You Will Love</span>
      </h1>
      <p className="desc text-center">
        Welcome to Plantavina, where you&#39;ll find a handpicked selection of
        beautiful, healthy plants to bring life and joy to your home—shop now
        and let nature flourish!
      </p>

      <Feed />
    </section>
  );
}
