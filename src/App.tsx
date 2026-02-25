import { useState } from 'react';

export function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    remember: false,
    agree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { username: formData.username, password: formData.password, remember: formData.remember });
    alert(`Login berhasil, ${formData.username}!`);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Konfirmasi kata sandi tidak cocok!');
      return;
    }
    console.log('Register:', formData);
    alert(`Pendaftaran berhasil untuk ${formData.name}! Silakan login.`);
    setIsLogin(true); // Switch back to login after register
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.2),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_40%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
      
      <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 md:w-[500px] md:h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <h1 className="text-5xl md:text-7xl font-black bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl mb-4 tracking-tight">
            Jadwal Dosen
          </h1>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-semibold text-white/90">
              Portal Informasi Dosen
            </p>
            <p className="text-xl md:text-2xl text-blue-400 font-medium">
              Jurusan Ekonomi dan Studi Pembangunan
            </p>
            <p className="text-lg md:text-xl text-slate-400">
              Semester 2024/2025
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/40 hover:shadow-3xl hover:shadow-cyan-500/20 transition-all duration-500">
          {/* Form Transition Wrapper */}
          <div className="transition-opacity duration-500 ease-in-out">
            {isLogin ? (
              /* Login Form */
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-semibold text-slate-200 mb-3">
                    Username / NIM Dosen
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/15"
                    placeholder="Masukkan username atau NIM"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-200 mb-3">
                    Kata Sandi
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/15"
                    placeholder="Masukkan kata sandi"
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      className="w-5 h-5 text-cyan-400 bg-white/20 border-2 border-white/30 rounded focus:ring-cyan-400 focus:ring-2 focus:outline-none transition-all duration-200 hover:border-cyan-400"
                      checked={formData.remember}
                      onChange={handleInputChange}
                    />
                    <span className="ml-3 text-sm text-slate-300 font-medium">Ingat Saya</span>
                  </label>
                  <a href="#" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200">Lupa Kata Sandi?</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:via-cyan-300 hover:to-blue-500 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-400/50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-xl">Masuk ke Portal</span>
                </button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-3">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/15"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-3">
                    NIM / Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/15"
                    placeholder="Masukkan NIM atau email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reg-password" className="block text-sm font-semibold text-slate-200 mb-3">
                    Kata Sandi
                  </label>
                  <input
                    id="reg-password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/15"
                    placeholder="Buat kata sandi"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-semibold text-slate-200 mb-3">
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 hover:bg-white/15"
                    placeholder="Ulangi kata sandi"
                    required
                  />
                </div>

                <div className="flex items-center pt-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="agree"
                      className="w-5 h-5 text-cyan-400 bg-white/20 border-2 border-white/30 rounded focus:ring-cyan-400 focus:ring-2 focus:outline-none transition-all duration-200 hover:border-cyan-400"
                      checked={formData.agree}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="ml-3 text-sm text-slate-300 font-medium">Saya setuju dengan syarat & ketentuan</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-emerald-500 via-emerald-400 to-teal-600 hover:from-emerald-400 hover:via-emerald-300 hover:to-teal-500 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-400/50 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-xl">Daftar Akun Baru</span>
                </button>
              </form>
            )}
          </div>

          {/* Toggle Link */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            {isLogin ? (
              <p className="text-sm text-slate-400">
                Belum punya akun?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors duration-200 underline decoration-cyan-400"
                >
                  Daftar sekarang
                </button>
              </p>
            ) : (
              <p className="text-sm text-slate-400">
                Sudah punya akun?{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors duration-200 underline decoration-cyan-400"
                >
                  Masuk sekarang
                </button>
              </p>
            )}
          </div>

          <p className="text-xs text-slate-500 text-center mt-8 px-2 leading-relaxed">
            Akses portal dosen dan mahasiswa untuk mengelola jadwal mengajar dosen. <br />
            <span className="text-cyan-400 font-medium">Selamat datang di sistem informasi akademik.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
