import Button from '@/components/Button';
import Footer from '@/components/Layout/Footer';
function Contract() {
    return (
        <>
            <div className="bg-[#F5F5F5] h-[90%] p-10">
                <div className="mt-3">
                    <div className="text-2xl font-bold">Let’s make a contract</div>
                </div>
                <div className="mt-14">
                    <div className="text-xl font-bold">Iwill</div>
                </div>
                <div className="p-2">
                    <div className="text-2xl font-light pb-2">· ☀️ Plan tasks.</div>
                    <div className="text-2xl font-light pb-2">· 🎯 Set goals.</div>
                    <div className="text-2xl font-light pb-2">· 🚶Take breaks.</div>
                    <div className="text-2xl font-light pb-2">· 💪 Move and refresh.</div>
                    <div className="text-2xl font-light pb-2">· 📝 Prioritize.</div>
                    <div className="text-2xl font-light pb-2">· 🔍 Break tasks down.</div>
                    <div className="text-2xl font-light pb-2">· 🚫 No multitasking.</div>
                    <div className="text-2xl font-light pb-2">· 📵 Minimize distractions.</div>
                    <div className="text-2xl font-light pb-2">· ⏰ Limit social media.</div>
                </div>
                <div className="flex justify-center mt-10">
                    <div>
                        <Button href="/transition" className="login">
                            I Agree
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Contract;
