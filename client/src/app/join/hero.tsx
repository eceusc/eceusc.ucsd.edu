export default function Hero({ title, body }: { title: string; body: string }) {
    return (
        <div className="flex flex-col justify-center">
          <span className="text-white text-3xl font-bold animate-slide-in-left">{title}</span>
          <br />
          <span className="text-white text-base animate-fade-in">{body}</span>
        </div>
    );
  }
  