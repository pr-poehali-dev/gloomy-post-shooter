import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b-2 border-primary">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="pixel-text text-xl text-primary glitch">GloomyPost</h1>
          <div className="flex gap-4 items-center">
            {["home", "gameplay", "team", "updates"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`pixel-text text-sm hover:text-primary transition-colors ${
                  activeSection === section ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {section === "home" && "Главная"}
                {section === "gameplay" && "Геймплей"}
                {section === "team" && "Разработчики"}
                {section === "updates" && "Обновления"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="pixel-text text-xs bg-secondary">
                BETA v0.8.3
              </Badge>
              <h1 className="pixel-text text-4xl md:text-6xl leading-tight glitch">
                GLOOMY
                <br />
                POST
              </h1>
              <p className="text-xl text-muted-foreground">Сможешь ли ты выжить в лесу с дедом Юрием?</p>
              <div className="flex gap-4">
                <Button className="pixel-text bg-primary hover:bg-primary/80 pixel-border">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать
                </Button>
                <Button
                  variant="outline"
                  className="pixel-text border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => scrollToSection("gameplay")}
                >
                  <Icon name="Gamepad2" size={20} className="mr-2" />
                  Геймплей
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="pixel-border rounded-none overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/3be9fdbd-4595-4102-8844-10ed80aedd91.jpeg"
                  alt="GloomyPost Character"
                  className="w-full h-auto"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gameplay" className="min-h-screen py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="pixel-text text-3xl mb-12 text-center text-primary">
            // ГЕЙМПЛЕЙ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="pixel-border bg-background p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Target" size={32} className="text-primary" />
                <h3 className="pixel-text text-xl">ХОРРОР</h3>
              </div>
              <p className="text-muted-foreground text-lg">Классический хоррор про русского гопника, который чудом попал в лес и далее произошло непоправимое</p>
            </div>
            <div className="pixel-border bg-background p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Map" size={32} className="text-secondary" />
                <h3 className="pixel-text text-xl">ИССЛЕДОВАНИЕ</h3>
              </div>
              <p className="text-muted-foreground text-lg">Исследуй лес и находи загвоздки</p>
            </div>
            <div className="pixel-border bg-background p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Swords" size={32} className="text-primary" />
                <h3 className="pixel-text text-xl">ОРУЖИЕ</h3>
              </div>
              <p className="text-muted-foreground text-lg">Галди с кентами</p>
            </div>
            <div className="pixel-border bg-background p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Skull" size={32} className="text-secondary" />
                <h3 className="pixel-text text-xl">ВРАГИ</h3>
              </div>
              <p className="text-muted-foreground text-lg">Пидорасы враги из леса, бей их!</p>
            </div>
          </div>
          <div className="pixel-border overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/04c4a446-befd-4b18-af39-aa0c58277cf2/files/64759cc5-9728-4f47-a5cb-43dc437204ec.jpg"
              alt="Gameplay Screenshot"
              className="w-full h-auto"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </section>

      <section id="team" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="pixel-text text-3xl mb-12 text-center text-primary">
            // РАЗРАБОТЧИКИ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алекс Воронов",
                role: "Главный программист",
                desc: "10 лет опыта в gamedev, работал над indie проектами",
              },
              {
                name: "Мария Светлова",
                role: "3D Artist",
                desc: "Создаёт все модели и текстуры для игры",
              },
              {
                name: "Дмитрий Тёмный",
                role: "Game Designer",
                desc: "Отвечает за баланс и уровни",
              },
            ].map((member, idx) => (
              <Card key={idx} className="pixel-border bg-card p-6 space-y-4">
                <div className="w-24 h-24 mx-auto pixel-border overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/04c4a446-befd-4b18-af39-aa0c58277cf2/files/5a58468d-f6c1-44d1-82dd-2fb2dd67f757.jpg"
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="pixel-text text-lg">{member.name}</h3>
                  <Badge className="bg-secondary text-xs">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm">{member.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="min-h-screen py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="pixel-text text-3xl mb-12 text-center text-primary">
            // ОБНОВЛЕНИЯ
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                version: "v0.8.3",
                date: "15.10.2025",
                changes: [
                  "Добавлено новое оружие: Плазменная винтовка",
                  "Исправлен баг с застреванием в текстурах",
                  "Улучшена производительность на 20%",
                  "Новый уровень: Заброшенная фабрика",
                ],
              },
              {
                version: "v0.8.2",
                date: "01.10.2025",
                changes: [
                  "Добавлены настройки графики",
                  "Новый тип врагов: Мутанты-снайперы",
                  "Исправлены проблемы со звуком",
                ],
              },
              {
                version: "v0.8.1",
                date: "20.09.2025",
                changes: [
                  "Первая публичная бета-версия",
                  "5 уровней доступны для прохождения",
                  "Базовая система сохранений",
                ],
              },
            ].map((update, idx) => (
              <Card key={idx} className="pixel-border bg-background p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="pixel-text text-xs bg-primary">
                    {update.version}
                  </Badge>
                  <span className="text-muted-foreground text-sm">{update.date}</span>
                </div>
                <ul className="space-y-2">
                  {update.changes.map((change, changeIdx) => (
                    <li key={changeIdx} className="flex items-start gap-2">
                      <Icon
                        name="ChevronRight"
                        size={16}
                        className="text-secondary mt-1 flex-shrink-0"
                      />
                      <span className="text-muted-foreground">{change}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-background border-t-2 border-primary py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h3 className="pixel-text text-xl text-primary glitch">GloomyPost</h3>
          <p className="text-muted-foreground">
            © 2025 GloomyPost Team. Все права защищены.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;