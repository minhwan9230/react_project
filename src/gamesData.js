const gamesData = [
  {
    id: 1,
    genre: "액션",
    title: "Once Human",
    price: 0,
    developer: "Starry Studio",
    review: "대체로 긍정적",
    agerating: "19세 이용가",
    release: "2024년 07월 10일",
    minimum:
      "프로세서: Intel Core i5-4460, 메모리: 8 GB RAM, 그래픽: Nvidia GTX 750ti 4G / AMD Radeon RX550",
    recommended:
      "프로세서: Intel Core i7-7700, 메모리: 16 GB RAM, 그래픽: Nvidia GTX 1060 6G / AMD Radeon RX 580 2304SP / Intel ARC A380",
    description: `Once Human은 낯선 분위기의 포스트 아포칼립스를 배경으로 삼은 멀티플레이 오픈 월드 생존 게임입니다. 
친구들과 힘을 모아 무서운 적을 상대하고, 비밀스러운 음모를 밝히고,
자원을 위해 싸우고, 자신만의 영역을 구축하세요.`,
    imageUrl:
      "https://cdn1.epicgames.com/spt-assets/36c309a879c547efa4b8cdd76955a5f0/once-human-1jg0b.jpg",
    slideUrl1: "/assets/images/action/Once Human-01.jpg",
    slideUrl2: "/assets/images/action/Once Human-02.jpg",
    slideUrl3: "/assets/images/action/Once Human-03.jpg",
    slideUrl4: "/assets/images/action/Once Human-04.jpg",
    slideUrl5: "/assets/images/action/Once Human-05.jpg",
  },
  {
    id: 2,
    genre: "액션",
    title: "호그와트 레거시",
    price: 23930,
    developer: "Avalanche Software",
    review: "매우 긍정적",
    agerating: "12세 이용가",
    release: "2023년 02월 11일",
    minimum:
      "프로세서: Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz), 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB",
    recommended:
      "프로세서: Intel Core i7-8700 or AMD Ryzen 5 3600, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT or INTEL Arc A770",
    description: `호그와트 레거시는 몰입형 오픈월드 액션 RPG이며, 여러분도 꿈에 그리던 마법 세계에 직접 영향을 끼칠 수 있습니다.
여러분의 상상력으로 마법 세계에서 펼쳐지는 모험의 주인공이 되어보세요.`,
    imageUrl:
      "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791192776477.jpg",
    slideUrl1: "/assets/images/action/Hogwarts Legacy-01.jpg",
    slideUrl2: "/assets/images/action/Hogwarts Legacy-02.jpg",
    slideUrl3: "/assets/images/action/Hogwarts Legacy-03.jpg",
    slideUrl4: "/assets/images/action/Hogwarts Legacy-04.jpg",
    slideUrl5: "/assets/images/action/Hogwarts Legacy-05.jpg",
  },
  {
    id: 3,
    genre: "액션",
    title: "Grand Theft Auto V",
    price: 26460,
    developer: "Rockstar North",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2015년 04월 14일",
    minimum:
      "프로세서: 인텔 코어 2 쿼드 CPU Q6600 @ 2.40GHz (4 CPU) / AMD Phenom 9850 쿼드코어 프로세서@ 2.5GHz, 메모리: 4 GB RAM, 그래픽: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)",
    recommended:
      "프로세서: 인텔 코어 i5 3470 @ 3.2GHZ (4 CPU) / AMD X8 FX-8350 @ 4GHz (8 CPU), 메모리: 8 GB RAM, 그래픽: NVIDIA GTX 660 2GB / AMD HD7870 2GB",
    description: `어느 날 문득, 동네 건달과 은퇴한 은행 강도, 미치광이 사이코패스는 자신들이 어두운 범죄 세계와 미국 정부 기관,
엔터테인먼트 회사의 가장 끔찍하고 무시무시한 현실과 복잡하게 얽혀 있다는 걸 깨닫습니다.`,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    slideUrl1: "/assets/images/action/GTA-01.jpg",
    slideUrl2: "/assets/images/action/GTA-02.jpg",
    slideUrl3: "/assets/images/action/GTA-03.jpg",
    slideUrl4: "/assets/images/action/GTA-04.jpg",
    slideUrl5: "/assets/images/action/GTA-05.jpg",
  },
  {
    id: 4,
    genre: "액션",
    title: "이터널 리턴",
    price: 0,
    developer: "Nimble Neuron",
    review: "대체로 긍정적",
    agerating: "15세 이용가",
    release: "2023년 7월 20일",
    minimum:
      "프로세서: Intel Core i3-3225, AMD FX-4350, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 660, ATI Radeon HD 7850",
    recommended:
      "프로세서: Intel Core i5-6600K , AMD Ryzen 5 1600, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce GTX 1060 , AMD Radeon RX 580",
    description: `제작, 사냥, 전투 그리고 멋진 캐릭터들을 경험해보시고
생존을 위한 전략적인 판단, 화려한 전투 플레이로
영원히 반복되는 실험에서 최후의 생존자가 되십시오.`,
    imageUrl: "https://pbs.twimg.com/media/FUOOcYYacAAryWG.jpg",
    slideUrl1: "/assets/images/action/Eternal Return-01.jpg",
    slideUrl2: "/assets/images/action/Eternal Return-02.jpg",
    slideUrl3: "/assets/images/action/Eternal Return-03.jpg",
    slideUrl4: "/assets/images/action/Eternal Return-04.jpg",
    slideUrl5: "/assets/images/action/Eternal Return-05.jpg",
  },
  {
    id: 5,
    genre: "액션",
    title: "Dragon Age: The Veilguard",
    price: 66600,
    developer: "BioWare",
    review: "대체로 긍정적",
    agerating: "19세 이용가",
    release: "2024년 11월 1일",
    minimum:
      "프로세서: Intel Core i5-8400 / AMD Ryzen 3 3300X*, 메모리: 16 GB RAM, 그래픽: NVIDIA GTX 970/1650 / AMD Radeon R9 290X",
    recommended:
      "프로세서: Intel i9-9900K / AMD Ryzen 7 3700X*, 메모리: 16 GB RAM, 그래픽: NVIDIA RTX 2070 / AMD Radeon RX 5700XT",
    description: `몰입감 높은 싱글 플레이어 RPG인 Dragon Age™: The Veilguard
에서 신뢰받는 리더가 되어 베일가드를 모아 신들에게 맞서세요.`,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Dragon_Age_The_Veilguard_key_art.png",
    slideUrl1: "/assets/images/action/Dragon Age The Veilguard-01.jpg",
    slideUrl2: "/assets/images/action/Dragon Age The Veilguard-02.jpg",
    slideUrl3: "/assets/images/action/Dragon Age The Veilguard-03.jpg",
    slideUrl4: "/assets/images/action/Dragon Age The Veilguard-04.jpg",
    slideUrl5: "/assets/images/action/Dragon Age The Veilguard-05.jpg",
  },
  {
    id: 6,
    genre: "액션",
    title: "디아블로® IV",
    price: 62400,
    developer: "Blizzard Entertainment, Inc.",
    review: "대체로 긍정적",
    agerating: "19세 이용가",
    release: "2023년 10월 18일",
    minimum:
      "프로세서: Intel® Core™ i5-2500K 또는 AMD™ FX-8350, 메모리: 8 GB RAM, 그래픽: NVIDIA® GeForce® GTX 660 또는 Intel® Arc™ A380 또는 AMD Radeon™ R9 280",
    recommended:
      "프로세서: Intel® Core™ i5-4670K 또는 AMD Ryzen™ 1300X, 메모리: 16 GB RAM, 그래픽: NVIDIA® GeForce® GTX 970 또는 Intel® Arc™ A750 또는 AMD Radeon™ RX 470",
    description: `수없이 많은 악마를 학살하고 다양한 능력을 습득하며,
악몽 같은 던전을 정복해 전설적인 전리품을 획득하십시오.`,
    imageUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202405/3123/21a60345b63762324e97658fce8d3c1fa35dfc3dd9555629.jpg",
    slideUrl1: "/assets/images/action/Diablo-01.jpg",
    slideUrl2: "/assets/images/action/Diablo-02.jpg",
    slideUrl3: "/assets/images/action/Diablo-03.jpg",
    slideUrl4: "/assets/images/action/Diablo-04.jpg",
    slideUrl5: "/assets/images/action/Diablo-05.jpg",
  },
  {
    id: 7,
    genre: "액션",
    title: "Ready or Not",
    price: 53000,
    developer: "VOID Interactive",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2023년 12월 14일",
    minimum:
      "프로세서: Intel Core i5-4430 / AMD FX-6300, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB",
    recommended:
      "프로세서: AMD Ryzen 5-1600 / Intel Core i5-7600K, 메모리: 8 GB RAM, 그래픽: Nvidia GTX 1060 6GB or better",
    description: `LSPD는 로스수에뇨스 지역 전역에서 폭력 범죄가 급증하고 있다고 발표했습니다.
이에 인질, 폭탄 위협, 바리케이드를 세우고 있는 용의자 등
매우 위험한 상황에 대응하기 위해 SWAT 팀이 파견되었습니다.
시민 여러분은 집에 머무시기 바랍니다.`,
    imageUrl: "https://howlongtobeat.com/games/85975_Ready_Or_Not.jpg",
    slideUrl1: "/assets/images/action/Ready or Not-01.jpg",
    slideUrl2: "/assets/images/action/Ready or Not-02.jpg",
    slideUrl3: "/assets/images/action/Ready or Not-03.jpg",
    slideUrl4: "/assets/images/action/Ready or Not-04.jpg",
    slideUrl5: "/assets/images/action/Ready or Not-05.jpg",
  },
  {
    id: 8,
    genre: "공포",
    title: "Backrooms: Escape Together",
    price: 7120,
    developer: "Triiodide Studios",
    review: "매우 긍정적",
    agerating: "15세 이용가",
    release: "2022년 10월 18일",
    minimum:
      "프로세서: Intel Core i5-4430, 메모리: 4 GB RAM, 그래픽: NVIDIA GeForce GTX 960 2GB",
    recommended:
      "프로세서: Intel Core i5-6600K / AMD Ryzen 5 1600, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce RTX 2070 8GB",
    description: `Unreal Engine 5에서 시각적으로 리얼하게 
제작된 1~6인 협동 서바이벌 호러 게임입니다.
절차에 따라 생성되는 7개 레벨에서
리미널 환경, 퍼즐, 엔티티를 탐험하세요.`,
    imageUrl: "https://howlongtobeat.com/games/113741_Escape_the_Backrooms.jpg",
    slideUrl1: "/assets/images/horror/Back Room-01.jpg",
    slideUrl2: "/assets/images/horror/Back Room-02.jpg",
    slideUrl3: "/assets/images/horror/Back Room-03.jpg",
    slideUrl4: "/assets/images/horror/Back Room-04.jpg",
    slideUrl5: "/assets/images/horror/Back Room-05.jpg",
  },
  {
    id: 9,
    genre: "공포",
    title: "Dead by Daylight",
    price: 21000,
    developer: "Behaviour Interactive Inc.",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2016년 6월 14일",
    minimum:
      "프로세서: Intel Core i3-4170 or AMD FX-8120, 메모리: 8 GB RAM, 그래픽: DX11 Compatible GeForce GTX 460 1GB or AMD HD 6850 1GB",
    recommended:
      "프로세서: Intel Core i3-4170 or AMD FX-8300 or higher, 메모리: 8 GB RAM, 그래픽: DX11 Compatible GeForce 760 or AMD HD 8800 or higher with 4GB of RAM",
    description: `데드 바이 데이라이트는 한 명의 플레이어가 생존자를
고문하고 죽이려는 잔학한 살인마의 역할을 담당하고,
나머지 네 명의 플레이어는 살인마로부터
도망치려는 생존자로 플레이하는 (4vs1) 공포게임입니다.`,
    imageUrl: "https://howlongtobeat.com/games/37986_Dead_by_Daylight.jpg",
    slideUrl1: "/assets/images/horror/Dead by Deadlite-01.jpg",
    slideUrl2: "/assets/images/horror/Dead by Deadlite-02.jpg",
    slideUrl3: "/assets/images/horror/Dead by Deadlite-03.jpg",
    slideUrl4: "/assets/images/horror/Dead by Deadlite-04.jpg",
    slideUrl5: "/assets/images/horror/Dead by Deadlite-05.jpg",
  },
  {
    id: 10,
    genre: "공포",
    title: "P의 거짓",
    price: 38880,
    developer: "NEOWIZ",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2023년 9월 18일",
    minimum:
      "프로세서: AMD Ryzen 3 1200／Intel Core i3-6300, 메모리: 8 GB RAM, 그래픽: AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 960 4GB",
    recommended:
      "프로세서: AMD Ryzen 3 1200／Intel Core i3-6300, 메모리: 16 GB RAM, 그래픽: AMD Radeon RX 6500 XT 4GB / NVIDIA GeForce GTX 1660 6GB",
    description: `P의 거짓은 우아하고 매혹적인 벨에포크 시대를 배경으로
고전 피노키오의 모험을 재해석한 이야기를 담아낸
잔혹 동화 액션 소울라이크입니다.
제페토의 인형으로 시작된 여정의 끝에 무엇이
당신을 기다리고 있는지 확인해보세요.`,
    imageUrl: "https://howlongtobeat.com/games/92418_Lies_of_P.jpg",
    slideUrl1: "/assets/images/horror/Lies of P-01.jpg",
    slideUrl2: "/assets/images/horror/Lies of P-02.jpg",
    slideUrl3: "/assets/images/horror/Lies of P-03.jpg",
    slideUrl4: "/assets/images/horror/Lies of P-04.jpg",
    slideUrl5: "/assets/images/horror/Lies of P-05.jpg",
  },
  {
    id: 11,
    genre: "공포",
    title: "Left 4 Dead 2",
    price: 11000,
    developer: "Valve",
    review: "압도적으로 긍정적",
    agerating: "19세 이용가",
    release: "2009년 11월 17일",
    minimum:
      "프로세서: Pentium 4 3.0GHz, 메모리: 2 GB RAM, 그래픽: Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better",
    recommended:
      "프로세서: Intel core 2 duo 2.4GHz, 메모리: 2 GB RAM, 그래픽: Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better",
    description: `좀비 대재앙을 배경으로 한 Left 4 Dead 2(L4D2)는
2008년도 최고의 협동 게임이자 여러 수상 경력을
자랑하는 Left 4 Dead를 잇는 대망의 후속작입니다.`,
    imageUrl: "https://howlongtobeat.com/games/250px-Left4Dead2.jpg",
    slideUrl1: "/assets/images/horror/Left 4 Dead 2-01.jpg",
    slideUrl2: "/assets/images/horror/Left 4 Dead 2-02.jpg",
    slideUrl3: "/assets/images/horror/Left 4 Dead 2-03.jpg",
    slideUrl4: "/assets/images/horror/Left 4 Dead 2-04.jpg",
    slideUrl5: "/assets/images/horror/Left 4 Dead 2-05.jpg",
  },
  {
    id: 12,
    genre: "공포",
    title: "Buckshot Roulette",
    price: 2890,
    developer: "Mike Klubnika",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2024년 4월 5일",
    minimum:
      "프로세서: Intel Core i3, 메모리: 2 GB RAM, 그래픽: Relatively modern dedicated graphics card (Vulkan support required)",
    recommended:
      "프로세서: Intel Core i5, 메모리: 4 GB RAM, 그래픽: Relatively modern dedicated graphics card (Vulkan support required)",
    description: `12게이지 샷건으로 러시안 룰렛을 플레이하세요.
둘이 들어가서. 한 명만 나옵니다.
목숨을 걸고 주사위를 던지세요. 행운을 빕니다.`,
    imageUrl: "https://howlongtobeat.com/games/143310_Buckshot_Roulette.jpg",
    slideUrl1: "/assets/images/horror/Buckshot Roulette-01.jpg",
    slideUrl2: "/assets/images/horror/Buckshot Roulette-02.jpg",
    slideUrl3: "/assets/images/horror/Buckshot Roulette-03.jpg",
    slideUrl4: "/assets/images/horror/Buckshot Roulette-04.jpg",
    slideUrl5: "/assets/images/horror/Buckshot Roulette-05.jpg",
  },
  {
    id: 13,
    genre: "공포",
    title: "BIOHAZARD RE:4",
    price: 22400,
    developer: "CAPCOM Co., Ltd.",
    review: "압도적으로 긍정적",
    agerating: "19세 이용가",
    release: "2023년 3월 24일",
    minimum:
      "프로세서: AMD Ryzen 3 1200 / Intel Core i5-7500, 메모리: 8 GB RAM, 그래픽: AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM",
    recommended:
      "프로세서: AMD Ryzen 5 3600 / Intel Core i7 8700, 메모리: 16 GB RAM, 그래픽: AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
    description: `죽음을 피하고, 쓰러트리는 쾌감. 전례 없는 생물 재해
'라쿤 사건'으로부터 6년, 대통령 직속 요원이 된 
레온 S. 케네디에게 주어진 유괴된 대통령 영애의 구출 임무입니다.`,
    imageUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/ja3WJjrkmNVvwfibW9YdP3MW.png",
    slideUrl1: "/assets/images/horror/BIOHAZARD-01.jpg",
    slideUrl2: "/assets/images/horror/BIOHAZARD-02.jpg",
    slideUrl3: "/assets/images/horror/BIOHAZARD-03.jpg",
    slideUrl4: "/assets/images/horror/BIOHAZARD-04.jpg",
    slideUrl5: "/assets/images/horror/BIOHAZARD-05.jpg",
  },
  {
    id: 14,
    genre: "공포",
    title: "Sons Of The Forest",
    price: 17600,
    developer: "Endnight Games Ltd",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2024년 2월 23일",
    minimum:
      "프로세서: Intel Core i5 2500K 또는 동급의 AMD 프로세서, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GT 1030 또는 동급의 Radeon HD 7850",
    recommended:
      "프로세서: Intel Core i7 4790K 또는 동급의 AMD 프로세서, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce GTX 1060 또는 동급의 Radeon RX 5500 XT",
    description: `외딴 섬에서 실종된 억만장자를 찾기 위해
파견된 당신은 식인종으로 가득한 지옥을 마주하게 됩니다.
이 무시무시한 오픈 월드 기반의 공포 서바이벌 시뮬레이터에서
혼자 또는 친구들과 함께 무기를 제작하고 건물을 지으며
생존을 위해 고군분투하세요.`,
    imageUrl: "https://howlongtobeat.com/games/72839_Sons_of_The_Forest.jpg",
    slideUrl1: "/assets/images/horror/Sons of the Forest-01.jpg",
    slideUrl2: "/assets/images/horror/Sons of the Forest-02.jpg",
    slideUrl3: "/assets/images/horror/Sons of the Forest-03.jpg",
    slideUrl4: "/assets/images/horror/Sons of the Forest-04.jpg",
    slideUrl5: "/assets/images/horror/Sons of the Forest-05.jpg",
  },
  {
    id: 15,
    genre: "퍼즐",
    title: "It Takes Two",
    price: 15400,
    developer: "Hazelight Studios",
    review: "압도적으로 긍정적",
    agerating: "12세 이용가",
    release: "2021년 3월 26일",
    minimum:
      "프로세서: Intel Core i3-2100T or AMD FX 6100, 메모리: 8 GB RAM, 그래픽: Nvidia GeForce GTX 660 or AMD R7 260x",
    recommended:
      "프로세서: Intel Core i5 3570K or AMD Ryzen 3 1300x, 메모리: 16 GB RAM, 그래픽: Nvidia GeForce GTX 980 or AMD R9 290X",
    description: `It Takes Two에서 생애 가장 정신없는 여정을 시작하세요.
친구가 무료로 참가할 수 있게 친구 패스*로 초대하고,
함께 힘을 합쳐서 수많은 유쾌하고 획기적인 게임 플레이 챌린지를 헤쳐나가세요.`,
    imageUrl: "https://howlongtobeat.com/games/80199_It_Takes_Two.jpg",
    slideUrl1: "/assets/images/puzzle/It takes Two-01.jpg",
    slideUrl2: "/assets/images/puzzle/It takes Two-02.jpg",
    slideUrl3: "/assets/images/puzzle/It takes Two-03.jpg",
    slideUrl4: "/assets/images/puzzle/It takes Two-04.jpg",
    slideUrl5: "/assets/images/puzzle/It takes Two-05.jpg",
  },
  {
    id: 16,
    genre: "퍼즐",
    title: "A Little to the Left",
    price: 16500,
    developer: "Max Inferno",
    review: "매우 긍정적",
    agerating: "12세 이용가",
    release: "2022년 11월 9일",
    minimum:
      "프로세서: 1.8 GHz or faster processor, 메모리: 2 GB RAM, 그래픽: Direct X 11.0 compatible video card",
    recommended:
      "프로세서: 2.8 GHz or faster processor, 메모리: 3 GB RAM, 그래픽: Direct X 11.0 compatible video card",
    description: `A Little to the Left는 편안하게 즐기는 퍼즐 게임입니다.
난장판 만들기 좋아하는 말썽꾸러기 고양이에 유의하면서
집안 물건들을 이리저리 움직이며 깔끔하게 정리하세요.
즐겁고 직관적인 100개 이상의 퍼즐이 마련되어 있습니다.`,
    imageUrl: "https://howlongtobeat.com/games/93920_A_Little_To_The_Left.jpg",
    slideUrl1: "/assets/images/puzzle/A Little to the Left-01.jpg",
    slideUrl2: "/assets/images/puzzle/A Little to the Left-02.jpg",
    slideUrl3: "/assets/images/puzzle/A Little to the Left-03.jpg",
    slideUrl4: "/assets/images/puzzle/A Little to the Left-04.jpg",
    slideUrl5: "/assets/images/puzzle/A Little to the Left-05.jpg",
  },
  {
    id: 17,
    genre: "퍼즐",
    title: "Inscryption",
    price: 8800,
    developer: "Daniel Mullins Games",
    review: "압도적으로 긍정적",
    agerating: "15세 이용가",
    release: "2021년 10월 20일",
    minimum:
      "프로세서: Intel Core i5-760 (4 * 2800); AMD Athlon II X4 645 AM3 (4 * 3100), 메모리: 4 GB RAM, 그래픽: GeForce GTX 550 Ti (3072 VRAM); Radeon HD 6850 (1024 VRAM)",
    recommended:
      "프로세서: Intel Core i5-3470 (4 * 3200); AMD FX-4350 (4 * 4200), 메모리: 8 GB RAM, 그래픽: GeForce GTX 1050 2048 VRAM; Radeon RX 460 4096 VRAM",
    description: `Inscryption은 검은 잉크로 그려진 카드를
기반으로 한 덱빌딩 로그라이크, 방탈출 퍼즐, 
피가 흐르는 심리적 공포 등의 요소가 섞인 여정을 다룹니다.`,
    imageUrl: "https://howlongtobeat.com/games/91622_Inscryption.jpg",
    slideUrl1: "/assets/images/puzzle/Inscryption-01.jpg",
    slideUrl2: "/assets/images/puzzle/Inscryption-02.jpg",
    slideUrl3: "/assets/images/puzzle/Inscryption-03.jpg",
    slideUrl4: "/assets/images/puzzle/Inscryption-04.jpg",
    slideUrl5: "/assets/images/puzzle/Inscryption-05.jpg",
  },
  {
    id: 18,
    genre: "퍼즐",
    title: "Portal 2",
    price: 11000,
    developer: "Valve",
    review: "압도적으로 긍정적",
    agerating: "12세 이용가",
    release: "2011년 4월 19일",
    minimum:
      "프로세서: 3.0GHz P4, Dual Core 2.0 이상 또는 AMD64X2 이상, 메모리: 2 GB RAM, 그래픽: 비디오 카드는 128MB 이상이어야 하며, Pixel Shader 2.0b(ATI Radeon X800 이상 / NVIDIA GeForce 7600 이상)",
    recommended:
      "프로세서: 3.0GHz P4, Dual Core 2.0 이상 또는 AMD64X2 이상, 메모리: 2 GB RAM, 그래픽: 비디오 카드는 128MB 이상이어야 하며, Pixel Shader 2.0b(ATI Radeon X800 이상 / NVIDIA GeForce 7600 이상)",
    description: `포털 2의 싱글 플레이 모드에서는 생동감 있는
새 캐릭터와 여러 새로운 퍼즐 그리고 더욱더 거대하고
복잡한 실험실을 만나볼 수 있습니다.
플레이어는 예전에는 가 볼 수 없었던 애퍼처 사이언스 연구소의
다른 지역들을 탐험하고, 전작에서 플레이어를 인도하던 
악명 높은 인공지능 컴퓨터인 GLaDOS와 재회하게 됩니다.`,
    imageUrl: "https://howlongtobeat.com/games/Portal2cover.jpg",
    slideUrl1: "/assets/images/puzzle/Portal 2-01.jpg",
    slideUrl2: "/assets/images/puzzle/Portal 2-02.jpg",
    slideUrl3: "/assets/images/puzzle/Portal 2-03.jpg",
    slideUrl4: "/assets/images/puzzle/Portal 2-04.jpg",
    slideUrl5: "/assets/images/puzzle/Portal 2-05.jpg",
  },
  {
    id: 19,
    genre: "퍼즐",
    title: "Human Fall Flat",
    price: 6150,
    developer: "No Brakes Games",
    review: "매우 긍정적",
    agerating: "12세 이용가",
    release: "2016년 7월 23일",
    minimum:
      "프로세서: Intel Core2 Duo E6750 (2 * 2660) or equivalent | AMD Athlon 64 X2 Dual Core 6000+ (2 * 3000) or equivalent, 메모리: 1024 MB RAM, 그래픽: GeForce GT 740 (2048 MB) or equivalent | Radeon HD 5770 (1024 MB)",
    recommended:
      "프로세서: Intel Core2 Quad Q9300 (4 * 2500) or equivalent | AMD A10-5800K APU (4*3800) or equivalent, 메모리: 2048 MB RAM, 그래픽: GeForce GTX 460 (1024 MB) or equivalent | Radeon HD 7770 (1024 MB)",
    description: `Human Fall Flat은 부유하는 초현실적 세계에서
가벼운 마음으로 즐길 수 있는 유쾌한 플랫폼 게임 세트로,
혼자서 플레이하거나 최대 8명의 플레이어와 함께 온라인으로 플레이할 수 있습니다.
무료로 제공되는 새로운 레벨을 통해 더욱 흥미로운 게임과 활기찬 커뮤니티가 계속 유지됩니다.`,
    imageUrl: "https://howlongtobeat.com/games/38887_Human_Fall_Flat.jpg",
    slideUrl1: "/assets/images/puzzle/Human Fall Flat-01.jpg",
    slideUrl2: "/assets/images/puzzle/Human Fall Flat-02.jpg",
    slideUrl3: "/assets/images/puzzle/Human Fall Flat-03.jpg",
    slideUrl4: "/assets/images/puzzle/Human Fall Flat-04.jpg",
    slideUrl5: "/assets/images/puzzle/Human Fall Flat-05.jpg",
  },
  {
    id: 20,
    genre: "퍼즐",
    title: "Escape Simulator",
    price: 13930,
    developer: "Pine Studio",
    review: "매우 긍정적",
    agerating: "12세 이용가",
    release: "2021년 10월 19일",
    minimum:
      "프로세서: X64 architecture with SSE2 instruction set support, 메모리: 4 GB RAM, 그래픽: DX10-capable GPU",
    recommended: "메모리: 16 GB RAM, 그래픽: GTX 1060 or better",
    description: `Escape Simulator는 단독 또는 온라인 협동 플레이가 가능한 1인칭 퍼즐 게임입니다. 
점점 더 많아지는, 고도의 상호 작용이 가능한 방탈출 세트를 탐험하세요.
가구를 옮기고, 모든 것을 집어 들고 검사하고, 냄비를 부수고 자물쇠를 부수세요!
레벨 편집기를 통해 커뮤니티가 만든 방을 지원합니다.`,
    imageUrl: "https://howlongtobeat.com/games/99223_Escape_Simulator.jpg",
    slideUrl1: "/assets/images/puzzle/Escape Simulator-01.jpg",
    slideUrl2: "/assets/images/puzzle/Escape Simulator-02.jpg",
    slideUrl3: "/assets/images/puzzle/Escape Simulator-03.jpg",
    slideUrl4: "/assets/images/puzzle/Escape Simulator-04.jpg",
    slideUrl5: "/assets/images/puzzle/Escape Simulator-05.jpg",
  },
  {
    id: 21,
    genre: "퍼즐",
    title: "Stray",
    price: 21000,
    developer: "BlueTwelve Studio",
    review: "압도적으로 긍정적",
    agerating: "12세 이용가",
    release: "2022년 7월 20일",
    minimum:
      "프로세서: Intel Core i5-2300 | AMD FX-6350, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB",
    recommended:
      "프로세서: Intel Core i5-8400 | AMD Ryzen 5 2600, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 780, 3 GB | AMD Radeon R9 290X, 4 GB",
    description: `가족과 헤어지고 길을 잃고만 외로운 고양이는
오래 전 잊혀진 도시를 탈출하기 위해 고대의 신비를 풀어야 합니다.`,
    imageUrl:
      "https://i.pinimg.com/originals/34/e0/62/34e06273f785050a081a316f4ef028b0.jpg",
    slideUrl1: "/assets/images/puzzle/Stray-01.jpg",
    slideUrl2: "/assets/images/puzzle/Stray-02.jpg",
    slideUrl3: "/assets/images/puzzle/Stray-03.jpg",
    slideUrl4: "/assets/images/puzzle/Stray-04.jpg",
    slideUrl5: "/assets/images/puzzle/Stray-05.jpg",
  },
  {
    id: 22,
    genre: "RPG",
    title: "검은 신화: 오공",
    price: 64800,
    developer: "Game Science",
    review: "압도적으로 긍정적",
    agerating: "15세 이용가",
    release: "2024년 08월 20일",
    minimum:
      "프로세서: Intel Core i5-8400 / AMD Ryzen 5 1600, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
    recommended:
      "프로세서: Intel Core i7-9700 / AMD Ryzen 5 5500, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / INTEL Arc A750",
    description: `《검은 신화: 오공》은 중국 신화를 배경으로 하는 액션 RPG 게임입니다.
  당신은 '천명을 지닌 자'가 되어 과거의 전설 속 진실을 밝히기 위해,
  위험과 놀라움이 가득한 서역으로의 여정에 나서게 됩니다.`,
    imageUrl: "https://howlongtobeat.com/games/82089_Black_Myth_Wukong.jpg",
    slideUrl1: "/assets/images/RPG/Black Myth Wukong-01.jpg",
    slideUrl2: "/assets/images/RPG/Black Myth Wukong-02.jpg",
    slideUrl3: "/assets/images/RPG/Black Myth Wukong-03.jpg",
    slideUrl4: "/assets/images/RPG/Black Myth Wukong-04.jpg",
    slideUrl5: "/assets/images/RPG/Black Myth Wukong-05.jpg",
  },
  {
    id: 23,
    genre: "RPG",
    title: "메타포: 리판타지오",
    price: 79800,
    developer: "ATLUS",
    review: "매우 긍정적",
    agerating: "15세 이용가",
    release: "2024년 10월 11일",
    minimum:
      "프로세서: Intel Core i5-3470 or AMD FX-6300, 메모리: 6 GB RAM, 그래픽: NVIDIA GeForce GTX 750 Ti, 4GB or AMD Radeon R7 360, 4GB",
    recommended:
      "프로세서: Intel Core i5-7600 or Ryzen 5 2600, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 970, 4GB or AMD Radeon RX 480, 4GB",
    description: `『메타포: 리판타지오』는 국왕 암살 후
돌연 시작된 선거에 휘말려 새로운 왕의 후보자가 된 
소년의 운명을 그린 판타지 RPG입니다.`,
    imageUrl: "https://howlongtobeat.com/games/129956_Metaphor_ReFantazio.jpg",
    slideUrl1: "/assets/images/RPG/Metaphor Re Fantazio-01.jpg",
    slideUrl2: "/assets/images/RPG/Metaphor Re Fantazio-02.jpg",
    slideUrl3: "/assets/images/RPG/Metaphor Re Fantazio-03.jpg",
    slideUrl4: "/assets/images/RPG/Metaphor Re Fantazio-04.jpg",
    slideUrl5: "/assets/images/RPG/Metaphor Re Fantazio-05.jpg",
  },
  {
    id: 24,
    genre: "RPG",
    title: "Baldur's Gate 3",
    price: 66000,
    developer: "Larian Studios",
    review: "압도적으로 긍정적",
    agerating: "19세 이용가",
    release: "2023년 08월 4일",
    minimum:
      "프로세서: Intel I5 4690 / AMD FX 8350, 메모리: 8 GB RAM, 그래픽: Nvidia GTX 970 / RX 480 (4GB+ of VRAM)",
    recommended:
      "프로세서: Intel i7 8700K / AMD r5 3600, 메모리: 16 GB RAM, 그래픽: Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)",
    description: `발더스 게이트 3는 던전 앤 드래곤의 세계관을 배경으로
한 이야기가 풍부한 파티 기반 RPG입니다.`,
    imageUrl: "https://howlongtobeat.com/games/68033_Baldurs_Gate_3.jpg",
    slideUrl1: "/assets/images/RPG/Baldur's Gate 3-01.jpg",
    slideUrl2: "/assets/images/RPG/Baldur's Gate 3-02.jpg",
    slideUrl3: "/assets/images/RPG/Baldur's Gate 3-03.jpg",
    slideUrl4: "/assets/images/RPG/Baldur's Gate 3-04.jpg",
    slideUrl5: "/assets/images/RPG/Baldur's Gate 3-05.jpg",
  },
  {
    id: 25,
    genre: "RPG",
    title: "ELDEN RING",
    price: 64800,
    developer: "FromSoftware, Inc.",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2022년 02월 25일",
    minimum:
      "프로세서: INTEL CORE I5-8400 or AMD RYZEN 3 3300X, 메모리: 12 GB RAM, 그래픽: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
    recommended:
      "프로세서: INTEL CORE I7-8700K or AMD RYZEN 5 3600X, 메모리: 16 GB RAM, 그래픽: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
    description: `본 게임은 본격적인 다크 판타지 세계를 무대로 한 액션 RPG입니다.
드넓은 필드와 던전 탐험을 통해 미지의 것들을 발견해 보세요.
앞길을 막아서는 난관과 그것을 극복했을 때의 달성감,
그리고 등장인물들의 의도가 교착하는 군상극도 즐기실 수 있습니다.`,
    imageUrl: "https://howlongtobeat.com/games/68151_Elden_Ring.jpg",
    slideUrl1: "/assets/images/RPG/ELDEN RING-01.jpg",
    slideUrl2: "/assets/images/RPG/ELDEN RING-02.jpg",
    slideUrl3: "/assets/images/RPG/ELDEN RING-03.jpg",
    slideUrl4: "/assets/images/RPG/ELDEN RING-04.jpg",
    slideUrl5: "/assets/images/RPG/ELDEN RING-05.jpg",
  },
  {
    id: 26,
    genre: "RPG",
    title: "The Witcher 3: Wild Hunt",
    price: 54600,
    developer: "CD PROJEKT RED",
    review: "압도적으로 긍정적",
    agerating: "19세 이용가",
    release: "2015년 5월 18일",
    minimum:
      "프로세서: Intel CPU Core i5-2500K 3.3GHz / AMD A10-5800K APU (3.8GHz), 메모리: 6 GB RAM, 그래픽: Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
    recommended:
      "프로세서: Intel Core i5-7400 / Ryzen 5 1600, 메모리: 8 GB RAM, 그래픽: Nvidia GTX 1070 / Radeon RX 480",
    description: "리비아의 게롤트가 되어 의뢰를 받고 괴물을 사냥하세요.",
    imageUrl:
      "https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg",
    slideUrl1: "/assets/images/RPG/The Witcher 3 Wild Hunt-01.jpg",
    slideUrl2: "/assets/images/RPG/The Witcher 3 Wild Hunt-02.jpg",
    slideUrl3: "/assets/images/RPG/The Witcher 3 Wild Hunt-03.jpg",
    slideUrl4: "/assets/images/RPG/The Witcher 3 Wild Hunt-04.jpg",
    slideUrl5: "/assets/images/RPG/The Witcher 3 Wild Hunt-05.jpg",
  },
  {
    id: 27,
    genre: "RPG",
    title: "Monster Hunter Wilds",
    price: 84800,
    developer: "CAPCOM Co., Ltd.",
    review: "압도적으로 긍정적",
    agerating: "15세 이용가",
    release: "2024년 11월 1일",
    minimum:
      "프로세서: Intel® Core™ i5-10600 or Intel® Core™ i3-12100F or AMD Ryzen™ 5 3600, 메모리: 16 GB RAM, 그래픽: NVIDIA® GeForce® GTX 1660 Super(VRAM 6GB) or AMD Radeon™ RX 5600 XT(VRAM 6GB)",
    recommended:
      "프로세서: Intel® Core™ i5-11600K or Intel® Core™ i5-12400 or AMD Ryzen™ 5 3600X or AMD Ryzen™ 5 5500, 메모리: 16 GB RAM, 그래픽: NVIDIA® GeForce® RTX 2070 Super(VRAM 8GB) or NVIDIA® GeForce® RTX 4060(VRAM 8GB) or AMD Radeon™ RX 6700XT(VRAM 12GB)",
    description: `거칠고 치열한 자연의 습격. 시시각각 역동적으로 그 모습을 바꾸는 필드.
양면성을 지닌 세계를 살아가는 몬스터와 사람들의 이야기.
더욱더 발전한 헌팅 액션과 끊임없는 몰입감을 추구하는 궁극의 사냥 체험이 당신을 기다리고 있다.`,
    imageUrl: "https://howlongtobeat.com/games/141854_Monster_Hunter_Wilds.jpg",
    slideUrl1: "/assets/images/RPG/Monster Hunter Wilds-01.jpg",
    slideUrl2: "/assets/images/RPG/Monster Hunter Wilds-02.jpg",
    slideUrl3: "/assets/images/RPG/Monster Hunter Wilds-03.jpg",
    slideUrl4: "/assets/images/RPG/Monster Hunter Wilds-04.jpg",
    slideUrl5: "/assets/images/RPG/Monster Hunter Wilds-05.jpg",
  },
  {
    id: 28,
    genre: "RPG",
    title: "Cyberpunk 2077",
    price: 66000,
    developer: "CD PROJEKT RED",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2020년 12월 10일",
    minimum:
      "프로세서: Core i7-6700 or Ryzen 5 1600, 메모리: 12 GB RAM, 그래픽: GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380",
    recommended:
      "프로세서: Core i7-12700 or Ryzen 7 7800X3D, 메모리: 16 GB RAM, 그래픽: GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770",
    description: `사이버펑크 2077은 권력과 돈,
끝없는 신체 개조에 집착하는 어두운 미래의 위험천만한 메갈로폴리스,
'나이트 시티'를 배경으로 한 오픈 월드 액션 어드벤처 RPG입니다.`,
    imageUrl: "https://howlongtobeat.com/games/Cyberpunk-2077-2.jpg",
    slideUrl1: "/assets/images/RPG/Cyberpunk 2077-01.jpg",
    slideUrl2: "/assets/images/RPG/Cyberpunk 2077-02.jpg",
    slideUrl3: "/assets/images/RPG/Cyberpunk 2077-03.jpg",
    slideUrl4: "/assets/images/RPG/Cyberpunk 2077-04.jpg",
    slideUrl5: "/assets/images/RPG/Cyberpunk 2077-05.jpg",
  },
  {
    id: 29,
    genre: "스포츠",
    title: "NBA 2K25",
    price: 94900,
    developer: "Visual Concepts",
    review: "복합적",
    agerating: "12세 이용가",
    release: "2024년 10월 29일",
    minimum:
      "프로세서: Intel® Core™ i3-9100 or AMD Ryzen™ 3 1200, 메모리: 8 GB RAM, 그래픽: NVIDIA® GeForce® GTX 960 4 GB or AMD Radeon™ RX 570 4 GB or Intel® Arc™ A580",
    recommended:
      "프로세서: Intel® Core™ i5-10600 or AMD Ryzen™ 5 3600X, 메모리: 16 GB RAM, 그래픽: NVIDIA® GeForce® RTX 2070 8 GB or AMD Radeon™ RX 5700 8 GB or Intel® Arc™ A770",
    description: `NBA 2K25 플레이 시 궁극의 컨트롤을 할 수 있게 하는 ProPLAY™ 로
진정성과 리얼리즘으로 모든 코트를 제패하세요.
MyCAREER, MyTEAM, MyNBA 및 The W에서 나만의 레거시를 정의하세요.`,
    imageUrl: "https://howlongtobeat.com/games/153436_NBA_2K25.jpg",
    slideUrl1: "/assets/images/sports/NBA_2K25-01.jpg",
    slideUrl2: "/assets/images/sports/NBA_2K25-02.jpg",
    slideUrl3: "/assets/images/sports/NBA_2K25-03.jpg",
    slideUrl4: "/assets/images/sports/NBA_2K25-04.jpg",
    slideUrl5: "/assets/images/sports/NBA_2K25-05.jpg",
  },
  {
    id: 30,
    genre: "스포츠",
    title: "EA SPORTS™ Madden NFL 25",
    price: 80000,
    developer: "Tiburon",
    review: "복합적",
    agerating: "전체 이용가",
    release: "2024년 8월 16일",
    minimum:
      "프로세서: Intel Core i7-6700K (4-cores; 8-threads) or AMD Ryzen 5 1600, 메모리: 10 GB RAM, 그래픽: NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB",
    recommended:
      "프로세서: Intel Core i7-8700K (6-core; 12-thread) or AMD Ryzen 7 2700X, 메모리: 12 GB RAM, 그래픽: NVIDIA GeForce RTX 3060 8GB or AMD RX 6600 XT 8GB",
    description: `BOOM Tech를 기반으로하는 FieldSENSE™로 더욱 사실적으로 공격하세요.`,
    imageUrl:
      "https://howlongtobeat.com/games/155701_EA_Sports_Madden_NFL_25.jpg",
    slideUrl1: "/assets/images/sports/EA SPORTS™ Madden NFL 25-01.jpg",
    slideUrl2: "/assets/images/sports/EA SPORTS™ Madden NFL 25-02.jpg",
    slideUrl3: "/assets/images/sports/EA SPORTS™ Madden NFL 25-03.jpg",
    slideUrl4: "/assets/images/sports/EA SPORTS™ Madden NFL 25-04.jpg",
    slideUrl5: "/assets/images/sports/EA SPORTS™ Madden NFL 25-05.jpg",
  },
  {
    id: 31,
    genre: "스포츠",
    title: "Forza Horizon 5",
    price: 59900,
    developer: "Playground Games",
    review: "매우 긍정적",
    agerating: "전체 이용가",
    release: "2021년 11월 9일",
    minimum:
      "프로세서: Intel i5-4460 or AMD Ryzen 3 1200, 메모리: 8 GB RAM, 그래픽: NVidia GTX 970, AMD RX 470, OR Intel Arc A380",
    recommended:
      "프로세서: Intel i5-8400 or AMD Ryzen 5 1500X, 메모리: 16 GB RAM, 그래픽: NVidia GTX 1070, AMD RX 590, OR Intel Arc A750",
    description: `세계 최고의 자동차를 타고 생동감 넘치는 
멕시코의 대자연을 탐험하며 재미있는 드라이빙 액션을 즐겨보세요.`,
    imageUrl: "https://howlongtobeat.com/games/93948_Forza_Horizon_5.jpg",
    slideUrl1: "/assets/images/sports/Forza Horizon 5-01.jpg",
    slideUrl2: "/assets/images/sports/Forza Horizon 5-02.jpg",
    slideUrl3: "/assets/images/sports/Forza Horizon 5-03.jpg",
    slideUrl4: "/assets/images/sports/Forza Horizon 5-04.jpg",
    slideUrl5: "/assets/images/sports/Forza Horizon 5-05.jpg",
  },
  {
    id: 32,
    genre: "스포츠",
    title: "Football Manager 2024",
    price: 59000,
    developer: "Sports Interactive",
    review: "매우 긍정적",
    agerating: "전체 이용가",
    release: "2023년 11월 7일",
    minimum:
      "프로세서: Intel Core 2 or AMD Athlon 64 X2, 메모리: 4 GB RAM, 그래픽: Intel GMA X4500, NVIDIA GeForce 9600M GT, AMD/ATI Mobility Radeon HD 3650 - requires 256MB VRAM and DirectX® 11",
    recommended:
      "프로세서: Intel Core 2 or AMD Athlon 64 X2, 메모리: 4 GB RAM, 그래픽: Intel GMA X4500, NVIDIA GeForce 9600M GT, AMD/ATI Mobility Radeon HD 3650 - requires 256MB VRAM and DirectX® 11",
    description: `축구의 정점을 향하여 절대 멈추지 말고 발전하세요.
시리즈 사상 가장 완벽한 작품에서 새롭게 추가된 기능들로 승리를 향한 청사진을 설계하세요.`,
    imageUrl:
      "https://howlongtobeat.com/games/137711_Football_Manager_2024.jpg",
    slideUrl1: "/assets/images/sports/Football Manager 2024-01.jpg",
    slideUrl2: "/assets/images/sports/Football Manager 2024-02.jpg",
    slideUrl3: "/assets/images/sports/Football Manager 2024-03.jpg",
    slideUrl4: "/assets/images/sports/Football Manager 2024-04.jpg",
    slideUrl5: "/assets/images/sports/Football Manager 2024-05.jpg",
  },
  {
    id: 33,
    genre: "스포츠",
    title: "프로야구스피리츠 2024-2025",
    price: 74500,
    developer: "KONAMI",
    review: "복합적",
    agerating: "전체 이용가",
    release: "2024년 10월 17일",
    minimum:
      "프로세서: Intel Core i5 7500 / AMD Ryzen5 1600, 메모리: 8 GB RAM, 그래픽: Geforce GTX1060(6GB) / Radeon RX470 *4GB VRAM required",
    recommended:
      "프로세서: Intel Core i5-10400F / AMD Ryzen5 3600, 메모리: 16 GB RAM, 그래픽: Geforce RTX3060Ti / Radeon RX6700XT",
    description: `『프로스피 2024』는 차세대 야구 엔진인 「eBaseball™ Engine」을 탑재하였습니다.`,
    imageUrl:
      "https://img.konami.com/games/prospi/2024-2025/s/images/common/pkg_prospi2024_2025.jpg",
    slideUrl1:
      "/assets/images/sports/Professional Baseball Spirits 2024-2025-01.jpg",
    slideUrl2:
      "/assets/images/sports/Professional Baseball Spirits 2024-2025-02.jpg",
    slideUrl3:
      "/assets/images/sports/Professional Baseball Spirits 2024-2025-03.jpg",
    slideUrl4:
      "/assets/images/sports/Professional Baseball Spirits 2024-2025-04.jpg",
    slideUrl5:
      "/assets/images/sports/Professional Baseball Spirits 2024-2025-05.jpg",
  },
  {
    id: 34,
    genre: "스포츠",
    title: "WWE 2K24",
    price: 65000,
    developer: "Visual Concepts",
    review: "대체로 긍정적",
    agerating: "15세 이용가",
    release: "2024년 3월 8일",
    minimum:
      "프로세서: Intel Core i5-3550 / AMD FX 8150, 메모리: 8 GB RAM, 그래픽: GeForce GTX 1060 / Radeon RX 480",
    recommended:
      "프로세서: Intel i7-4790 / AMD FX 8350, 메모리: 16 GB RAM, 그래픽: GeForce GTX 1070 / Radeon RX 5600 XT",
    description: `WrestleMania의 역사에서 잊혀지지 않을 커리어를
결정지은 매치들을 다시 경험할 수 있는 WWE 2K24.`,
    imageUrl: "https://howlongtobeat.com/games/144589_WWE_2K24.jpg",
    slideUrl1: "/assets/images/sports/WWE 2K24-01.jpg",
    slideUrl2: "/assets/images/sports/WWE 2K24-02.jpg",
    slideUrl3: "/assets/images/sports/WWE 2K24-03.jpg",
    slideUrl4: "/assets/images/sports/WWE 2K24-04.jpg",
    slideUrl5: "/assets/images/sports/WWE 2K24-05.jpg",
  },
  {
    id: 35,
    genre: "스포츠",
    title: "F1® 24",
    price: 77000,
    developer: "Codemasters",
    review: "대체로 긍정적",
    agerating: "전체 이용가",
    release: "2024년 6월 1일",
    minimum:
      "프로세서: Intel Core i3-2130 | Core i5-9600k (VR) or AMD FX 4300 | Ryzen 5 2600X (VR), 메모리: 8 GB RAM, 그래픽: NVIDIA GTX 1060 (6GB) | GTX 1660Ti (VR) | RTX 2060 (RT) // AMD RX 480 (8GB) | RX 590 (VR) | 6700XT (RT) // Intel Arc A380 (VR/RT)",
    recommended:
      "프로세서: Intel Core i5-9600k or AMD Ryzen 5 2600X, 메모리: 16 GB RAM, 그래픽: NVIDIA RTX 2070 (+VR) | RTX 3070 (RT) // AMD RX 6600XT | RX 6700XT (VR) | RX 6800 (RT) // Intel Arc A580 (VR/RT)",
    description: `2024 FIA Formula One World Championship™의 공식 비디오 게임입니다.`,
    imageUrl: "https://howlongtobeat.com/games/146246_F1_24.jpg",
    slideUrl1: "/assets/images/sports/F1® 24-01.jpg",
    slideUrl2: "/assets/images/sports/F1® 24-02.jpg",
    slideUrl3: "/assets/images/sports/F1® 24-03.jpg",
    slideUrl4: "/assets/images/sports/F1® 24-04.jpg",
    slideUrl5: "/assets/images/sports/F1® 24-05.jpg",
  },
  {
    id: 36,
    genre: "시뮬레이션",
    title: "The Sims 4",
    price: 88000,
    developer: "Maxis",
    review: "매우 긍정적",
    agerating: "15세 이용가",
    release: "2014년 9월 2일",
    minimum:
      "프로세서: 3.3 GHz Intel Core i3-3220 (2 코어, 4 스레드), AMD Ryzen 3 1200 3.1 GHz (4 코어) 이상, 메모리: 4 GB RAM, 그래픽: NVIDIA GeForce 6600 이상",
    recommended:
      "프로세서: Intel core i5 (4 코어), AMD Ryzen 5 이상, 메모리: 8 GB RAM, 그래픽: 1 GB 비디오 램, NVIDIA GTX 650, AMD Radeon HD 7750 이상",
    description: `아무런 제약 없는 가상 세계에서 심들을 창조하고 지배하는 전능한 힘을 즐기세요.
강력한 권력을 휘두르며 자유롭고 재미있게 인생을 플레이하세요.`,
    imageUrl: "https://howlongtobeat.com/games/The_Sims_4_Box_Art.jpg",
    slideUrl1: "/assets/images/simulation/The Sims 4-01.jpg",
    slideUrl2: "/assets/images/simulation/The Sims 4-02.jpg",
    slideUrl3: "/assets/images/simulation/The Sims 4-03.jpg",
    slideUrl4: "/assets/images/simulation/The Sims 4-04.jpg",
    slideUrl5: "/assets/images/simulation/The Sims 4-05.jpg",
  },
  {
    id: 37,
    genre: "시뮬레이션",
    title: "Stellaris",
    price: 44000,
    developer: "Paradox Development Studio",
    review: "매우 긍정적",
    agerating: "전체 이용가",
    release: "2016년 5월 10일",
    minimum:
      "프로세서: Intel® iCore™ i3-530 or AMD® FX-6350, 메모리: 4 GB RAM, 그래픽: Nvidia® GeForce™ GTX 460 or AMD® ATI Radeon™ HD 5870 (1GB VRAM), or AMD® Radeon™ RX Vega 11 or Intel® HD Graphics 4600",
    recommended:
      "프로세서: Intel® iCore™ i5-3570K or AMD® Ryzen™ 5 2400G, 메모리: 4 GB RAM, 그래픽: Nvidia® GeForce™ GTX 560 Ti (1GB VRAM) or AMD® Radeon™ R7 370 (2 GB VRAM)",
    description: `항성간 여행을 통해 우주를 탐험하며 수많은 종족들도 만나보세요.
과학선을 보내 우주를 조사하고 탐험하면서 은하 제국을 건설하고,
건축선을 보내 새로 발견한 행성에 기지를 건설하세요.
소속 사회를 위한 탐험에 나서 매장된 보물과 은하계의 경이를 발견하고,
탐험가의 한계치와 진화 범위를 설정하세요.`,
    imageUrl: "https://howlongtobeat.com/games/37186_Stellaris.jpg",
    slideUrl1: "/assets/images/simulation/Stellaris-01.jpg",
    slideUrl2: "/assets/images/simulation/Stellaris-02.jpg",
    slideUrl3: "/assets/images/simulation/Stellaris-03.jpg",
    slideUrl4: "/assets/images/simulation/Stellaris-04.jpg",
    slideUrl5: "/assets/images/simulation/Stellaris-05.jpg",
  },
  {
    id: 38,
    genre: "시뮬레이션",
    title: "Project Zomboid",
    price: 21500,
    developer: "The Indie Stone",
    review: "매우 긍정적",
    agerating: "15세 이용가",
    release: "2013년 11월 8일",
    minimum:
      "프로세서: Intel 2.77GHz Quad-core, 메모리: 8GB RAM, 그래픽: Dedicated graphics card with 2 GB of RAM minimum, OpenGL 2.1 and GLSL 1.2 support (generally 2012 or newer)",
    recommended:
      "프로세서: Intel 2.77GHz Quad-core, 메모리: 8GB RAM, 그래픽: Dedicated graphics card with 2 GB of RAM minimum, OpenGL 2.1 and GLSL 1.2 support (generally 2012 or newer)",
    description: `프로젝트 줌보이드는 좀비 생존의 끝판왕입니다.
혼자서 또는 멀티플레이에서: 생존을 위해 고군분투하며
약탈, 건설, 공예, 전투, 양식, 낚시를 합니다.`,
    imageUrl: "https://howlongtobeat.com/games/7359_Project_Zomboid.jpg",
    slideUrl1: "/assets/images/simulation/Project Zomboid-01.jpg",
    slideUrl2: "/assets/images/simulation/Project Zomboid-02.jpg",
    slideUrl3: "/assets/images/simulation/Project Zomboid-03.jpg",
    slideUrl4: "/assets/images/simulation/Project Zomboid-04.jpg",
    slideUrl5: "/assets/images/simulation/Project Zomboid-05.jpg",
  },
  {
    id: 39,
    genre: "시뮬레이션",
    title: "TCG Card Shop Simulator",
    price: 14500,
    developer: "OPNeon Games",
    review: "압도적으로 긍정적",
    agerating: "전체 이용가",
    release: "2024년 9월 15일",
    minimum:
      "프로세서: Intel Core i5-3550, 메모리: 8 GB RAM, 그래픽: NVidia GeForce GTX 1050",
    recommended:
      "프로세서: Intel Core i5-6400, 메모리: 8 GB RAM, 그래픽: NVidia GeForce GTX 1070",
    description: `나만의 지역 게임 스토어를 오픈하세요.
진열대에 최신 부스터 팩을 비축하거나, 직접 카드를 꺼내세요.
나만의 가격을 설정하고, 직원을 고용하고, 이벤트를 주최하고, 카드 상점을 확장하세요.`,
    imageUrl:
      "https://howlongtobeat.com/games/145130_TCG_Card_Shop_Simulator.jpg",
    slideUrl1: "/assets/images/simulation/TCG Card Shop Simulator-01.jpg",
    slideUrl2: "/assets/images/simulation/TCG Card Shop Simulator-02.jpg",
    slideUrl3: "/assets/images/simulation/TCG Card Shop Simulator-03.jpg",
    slideUrl4: "/assets/images/simulation/TCG Card Shop Simulator-04.jpg",
    slideUrl5: "/assets/images/simulation/TCG Card Shop Simulator-05.jpg",
  },
  {
    id: 40,
    genre: "시뮬레이션",
    title: "Euro Truck Simulator 2",
    price: 24800,
    developer: "SCS Software",
    review: "압도적으로 긍정적",
    agerating: "전체 이용가",
    release: "2012년 10월 18일",
    minimum:
      "프로세서: Intel Core i5-6400 or AMD Ryzen 3 1200 or similar, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 660 or AMD Radeon RX 460 or Intel HD 630 (2GB VRAM)",
    recommended:
      "프로세서: Intel Core i5-9600 or AMD Ryzen 5 3600 or similar, 메모리: 12 GB RAM, 그래픽: NVIDIA GeForce GTX 1660 or AMD Radeon RX 590 (2GB VRAM)",
    description: `인상적인 거리를 가로질러 중요한 화물을 운송하는
트럭 운전사이자 도로의 왕으로 유럽 전역을 여행하세요!
탐험할 수 있는 수십 개의 도시가 있다면 지구력, 기술, 속도 모두 한계에 부딪힐 것입니다.`,
    imageUrl:
      "https://howlongtobeat.com/games/Euro_Truck_Simulator_2_cover.jpg",
    slideUrl1: "/assets/images/simulation/Euro Truck Simulator 2-01.jpg",
    slideUrl2: "/assets/images/simulation/Euro Truck Simulator 2-02.jpg",
    slideUrl3: "/assets/images/simulation/Euro Truck Simulator 2-03.jpg",
    slideUrl4: "/assets/images/simulation/Euro Truck Simulator 2-04.jpg",
    slideUrl5: "/assets/images/simulation/Euro Truck Simulator 2-05.jpg",
  },
  {
    id: 41,
    genre: "시뮬레이션",
    title: "Cities: Skylines",
    price: 33000,
    developer: "Colossal Order Ltd.",
    review: "매우 긍정적",
    agerating: "전체 이용가",
    release: "2015년 3월 11일",
    minimum:
      "프로세서: Intel® Core™ I7 930 | AMD® FX 6350, 메모리: 8 GB RAM, 그래픽: Nvidia® GeForce™ GTS 450 (1 GB) | AMD® R7 250 (2 GB) | Intel Iris Xe G7 (Tiger Lake)",
    recommended:
      "프로세서: Intel® Core™ I7 2700K | AMD® Ryzen 7 2700X, 메모리: 16 GB RAM, 그래픽: Nvidia® GeForce™ GTX 580 (1.5 GB) |",
    description: `스카이라인은 고전적인 도시 시뮬레이션을 현대적으로 재해석한 작품입니다.
이 게임은 새로운 게임 플레이 요소를 도입하여 실제 도시를 만들고 유지하는 동시에
도시 건축 경험의 일부 잘 알려진 방향으로 확장하는 스릴과 고난을 실현합니다.`,
    imageUrl: "https://howlongtobeat.com/games/125076_Cities_Skylines_II.jpg",
    slideUrl1: "/assets/images/simulation/Cites Skylines-01.jpg",
    slideUrl2: "/assets/images/simulation/Cites Skylines-02.jpg",
    slideUrl3: "/assets/images/simulation/Cites Skylines-03.jpg",
    slideUrl4: "/assets/images/simulation/Cites Skylines-04.jpg",
    slideUrl5: "/assets/images/simulation/Cites Skylines-05.jpg",
  },
  {
    id: 42,
    genre: "시뮬레이션",
    title: "Crusader Kings III",
    price: 55000,
    developer: "Paradox Development Studio",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2020년 9월 2일",
    minimum:
      "프로세서: Intel® Core™ i3-2120 / AMD® FX 6350, 메모리: 6 GB RAM, 그래픽: Nvidia® GeForce™ GTX 660 (2GB) / AMD® Radeon™ HD 7870 (2GB) / Intel® Iris Pro™ 580 / Intel® Iris® Plus G7 / AMD® Radeon™ Vega 11",
    recommended:
      "프로세서: Intel® Core™ i5-4670K / AMD® Ryzen™ 5 2400G, 메모리: 8 GB RAM, 그래픽: Nvidia® GeForce™ GTX 1650 (4GB) / AMD® Radeon™ R9 390X (8GB)",
    description: `사랑하고, 싸우고, 계략을 세우고, 위대함을 쟁취하세요.
Crusader Kings III의 마구 뻗어 나가는 대전략 게임에서 귀족 가문의 유산을 결정하세요.
풍부하고 개성 넘치는 중세 시대 시뮬레이션 속 왕조 혈통을 이어나가는 이곳에서, 죽음은 단지 시작일 뿐입니다.`,
    imageUrl: "https://howlongtobeat.com/games/71763_Crusader_Kings_III.jpg",
    slideUrl1: "/assets/images/simulation/Crusader Kings III-01.jpg",
    slideUrl2: "/assets/images/simulation/Crusader Kings III-02.jpg",
    slideUrl3: "/assets/images/simulation/Crusader Kings III-03.jpg",
    slideUrl4: "/assets/images/simulation/Crusader Kings III-04.jpg",
    slideUrl5: "/assets/images/simulation/Crusader Kings III-05.jpg",
  },
  {
    id: 43,
    genre: "FPS",
    title: "PUBG: BATTLEGROUNDS",
    price: 0,
    developer: "PUBG Corporation",
    review: "복합적",
    agerating: "19세 이용가",
    release: "2017년 12월 21일",
    minimum:
      "프로세서: Intel Core i5-4430 / AMD FX-6300, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB",
    recommended:
      "프로세서: Intel Core i5-6600K / AMD Ryzen 5 1600, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
    description: `PUBG: BATTLEGROUNDS를 무료로 플레이 하세요. 
다양한 전장에서 생존의 사투를 펼치고, 팀을 이루어 최후의 1인이 되어 보세요.`,
    imageUrl:
      "https://howlongtobeat.com/games/44704_PlayerUnknowns_Battlegrounds.jpg",
    slideUrl1: "/assets/images/FPS/Battle Grounds_01.jpg",
    slideUrl2: "/assets/images/FPS/Battle Grounds_02.jpg",
    slideUrl3: "/assets/images/FPS/Battle Grounds_03.jpg",
    slideUrl4: "/assets/images/FPS/Battle Grounds_04.jpg",
    slideUrl5: "/assets/images/FPS/Battle Grounds_05.jpg",
  },
  {
    id: 44,
    genre: "FPS",
    title: "Call of Duty: Black Ops 6",
    price: 84500,
    developer: "Treyarch",
    review: "복합적",
    agerating: "19세 이용가",
    release: "2024년 10월 25일",
    minimum:
      "프로세서: AMD Ryzen™ 5 1400 또는 Intel® Core™ i5-6600, 메모리: 8 GB RAM, 그래픽: AMD Radeon™ RX 470, NVIDIA® GeForce® GTX 960 또는 Intel® Arc™ A580",
    recommended:
      "프로세서: AMD Ryzen™ 5 1600X 또는 Intel® Core™ i7-6700K, 메모리: 12 GB RAM, 그래픽: AMD Radeon™ RX 6600XT",
    description: `블랙 옵스 6는 냉전의 종식과 세계 정치의 전환을
배경으로 한 스파이 액션 스릴러 게임입니다.`,
    imageUrl:
      "https://howlongtobeat.com/games/151245_Call_of_Duty_Black_Ops_6.jpg",
    slideUrl1: "/assets/images/FPS/Call of Duty_01.jpg",
    slideUrl2: "/assets/images/FPS/Call of Duty_02.jpg",
    slideUrl3: "/assets/images/FPS/Call of Duty_03.jpg",
    slideUrl4: "/assets/images/FPS/Call of Duty_04.jpg",
    slideUrl5: "/assets/images/FPS/Call of Duty_05.jpg",
  },
  {
    id: 45,
    genre: "FPS",
    title: "Counter-Strike 2",
    price: 0,
    developer: "Valve",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2012년 8월 22일",
    minimum:
      "프로세서: 쿼드 코어/스레드 4개 - Intel® Core™ i5 750 이상, 메모리: 8 GB RAM, 그래픽: 비디오 카드는 1GB 이상이어야 하며 셰이더 모델 5.0을 지원하는 DirectX 11과 호환되어야 합니다.",
    recommended:
      "프로세서: 쿼드 코어/스레드 4개 - Intel® Core™ i5 750 이상, 메모리: 8 GB RAM, 그래픽: 비디오 카드는 1GB 이상이어야 하며 셰이더 모델 5.0을 지원하는 DirectX 11과 호환되어야 합니다.",
    description: `Counter-Strike는 20년이 넘는 시간 동안 전 세계 수백만 명의 플레이어가 모여
수준 높은 경쟁을 펼칠 수 있는 플랫폼을 제공해 왔습니다.
그리고 이제 곧 Counter-Strike 2와 함께 새로운 CS 시대의 막이 열립니다.`,
    imageUrl: "https://howlongtobeat.com/games/1957_Counter-Strike_2.jpg",
    slideUrl1: "/assets/images/FPS/Counter-Strike2_01.jpg",
    slideUrl2: "/assets/images/FPS/Counter-Strike2_02.jpg",
    slideUrl3: "/assets/images/FPS/Counter-Strike2_03.jpg",
    slideUrl4: "/assets/images/FPS/Counter-Strike2_04.jpg",
    slideUrl5: "/assets/images/FPS/Counter-Strike2_05.jpg",
  },
  {
    id: 46,
    genre: "FPS",
    title: "Apex 레전드™",
    price: 0,
    developer: "Respawn",
    review: "복합적",
    agerating: "19세 이용가",
    release: "2020년 11월 5일",
    minimum:
      "프로세서: AMD FX 4350 or Equivalent, Intel Core i3 6300 or Equivalent, 메모리: 6 GB RAM, 그래픽: AMD Radeon™ HD 7730, NVIDIA GeForce® GT 640",
    recommended:
      "프로세서: Ryzen 5 CPU or Equivalent, 메모리: 8 GB RAM, 그래픽: AMD Radeon™ R9 290, NVIDIA GeForce® GTX 970",
    description: `히어로 슈팅 게임 Apex 레전드에서 나만의 캐릭터로 전장을 점령하세요.
강력한 능력을 지닌 레전드 캐릭터들이 힘을 합쳐 
프런티어의 변경에서 영예와 부를 차지하기 위한 전투에 뛰어드세요.`,
    imageUrl: "https://howlongtobeat.com/games/64753_Apex_Legends.jpg",
    slideUrl1: "/assets/images/FPS/Apex_01.jpg",
    slideUrl2: "/assets/images/FPS/Apex_02.jpg",
    slideUrl3: "/assets/images/FPS/Apex_03.jpg",
    slideUrl4: "/assets/images/FPS/Apex_04.jpg",
    slideUrl5: "/assets/images/FPS/Apex_05.jpg",
  },
  {
    id: 47,
    genre: "FPS",
    title: "GTFO",
    price: 49900,
    developer: "10 Chambers",
    review: "매우 긍정적",
    agerating: "19세 이용가",
    release: "2021년 12월 10일",
    minimum:
      "프로세서: Intel Core i5 2500K 또는 동급의 AMD 프로세서, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GT 1030 또는 동급의 Radeon HD 7850",
    recommended:
      "프로세서: Intel Core i7 4790K 또는 동급의 AMD 프로세서, 메모리: 16 GB RAM, 그래픽: NVIDIA GeForce GTX 1060 또는 동급의 Radeon RX 5500 XT",
    description: `GTFO는 하드코어 협동 호러 슈팅 게임으로,
손에 땀을 쥐게 하는 서스펜스와 심장을 뛰게 하는 폭발적인 액션을 경험할 수 있습니다.
이 치명적인 지하 감옥에서 살아남으려면 은신, 전략, 팀워크를 총동원해야 합니다.`,
    imageUrl: "https://howlongtobeat.com/games/69992_GTFO.jpg",
    slideUrl1: "/assets/images/FPS/GTFO_01.jpg",
    slideUrl2: "/assets/images/FPS/GTFO_02.jpg",
    slideUrl3: "/assets/images/FPS/GTFO_03.jpg",
    slideUrl4: "/assets/images/FPS/GTFO_04.jpg",
    slideUrl5: "/assets/images/FPS/GTFO_05.jpg",
  },
  {
    id: 48,
    genre: "FPS",
    title: "DayZ",
    price: 59000,
    developer: "Bohemia Interactive",
    review: "대체로 긍정적",
    agerating: "19세 이용가",
    release: "2018년 12월 14일",
    minimum:
      "프로세서: Intel Core i5-4430, 메모리: 8 GB RAM, 그래픽: NVIDIA GeForce GTX 760 또는 AMD R9 270X",
    recommended:
      "프로세서: Intel Core i5-6600K 또는 AMD R5 1600X, 메모리: 12 GB RAM, 그래픽: NVIDIA GeForce GTX 1060 또는 AMD RX 580",
    description: `종말 후의 세상에서 생존할 수 있을까요?
“좀비”가 들끓고 자원은 제한적입니다.
타인과 팀을 이뤄 생존하시겠습니까?
아니면 배신당하지 않게 홀로 행동하시겠습니까?`,
    imageUrl: "https://howlongtobeat.com/games/DayZ_Standalone_Logo.jpg",
    slideUrl1: "/assets/images/FPS/DayZ_01.jpg",
    slideUrl2: "/assets/images/FPS/DayZ_02.jpg",
    slideUrl3: "/assets/images/FPS/DayZ_03.jpg",
    slideUrl4: "/assets/images/FPS/DayZ_04.jpg",
    slideUrl5: "/assets/images/FPS/DayZ_05.jpg",
  },
  {
    id: 49,
    genre: "FPS",
    title: "Back 4 Blood",
    price: 68600,
    developer: "Turtle Rock Studios",
    review: "복합적",
    agerating: "19세 이용가",
    release: "2021년 10월 13일",
    minimum:
      "프로세서: Intel Core i5-6600 (3.3 GHz) OR AMD Ryzen 5 2600 (3.4 GHz) 메모리: 8 GB RAM 그래픽: NVIDIA GeForce GTX 1050 Ti OR AMD Radeon RX 570",
    recommended:
      "프로세서: Intel Core i5-8400 (2.8 GHz) OR AMD Ryzen 7 1800X (3.6 GHz) 메모리: 12 GB RAM 그래픽: NVIDIA GeForce GTX 970 OR AMD Radeon RX 590",
    description: `Back 4 Blood는 비평가들의 극찬을 받은 레프트 4 데드 시리즈의 제작자들이 만든, 스릴 넘치는 1인칭 협동 슈팅 게임입니다. 탄탄한 스토리를 가진 4인 협동 캠페인, 인간 또는 리든의 입장에서 경쟁할 수 있는 멀티플레이어, 그리고 쉴 새 없이 박진감 넘치는 액션이 펼쳐지는 게임플레이를 경험하세요.`,
    imageUrl: "https://howlongtobeat.com/games/67709_Back_4_Blood.jpg",
    slideUrl1: "/assets/images/FPS/Back 4 Blood_01.jpg",
    slideUrl2: "/assets/images/FPS/Back 4 Blood_02.jpg",
    slideUrl3: "/assets/images/FPS/Back 4 Blood_03.jpg",
    slideUrl4: "/assets/images/FPS/Back 4 Blood_04.jpg",
    slideUrl5: "/assets/images/FPS/Back 4 Blood_05.jpg",
  },
];

export default gamesData;
