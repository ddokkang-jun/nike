let suggestData = [
  {
    id: 12,
    title: "에어 포스 1 le",
    content: "주니어 신발",
    price: 109000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b4bbffd7-1fe1-4a92-970e-49e1a3a54ac4/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-6-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EC%8B%A0%EB%B0%9C-pkEmCXoK.png",
  },
  {
    id: 13,
    title: "나이키 리액트 리비전",
    content: "여성 신발",
    price: 169000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a08bc97-eb38-4974-83b4-c4d312244a53/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%B9%84%EC%A0%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-PvIcmBoe.png",
  },
  {
    id: 14,
    title: "나이키 에어 허라치 크래프트",
    content: "여성 신발",
    price: 159000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc5464a3-f9df-4927-a526-14e2043bbd9f/%EC%97%90%EC%96%B4-%ED%97%88%EB%9D%BC%EC%B9%98-%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-jYW2MF9H.png",
  },
  {
    id: 15,
    title: "조던 원 테이크 4 PF",
    content: "남성 신발",
    price: 119000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d04dac10-907e-4a6a-9234-bb4d86a913eb/%EC%A1%B0%EB%8D%98-%EC%9B%90-%ED%85%8C%EC%9D%B4%ED%81%AC-4-pf-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-HyQfZwSa.png",
  },
  {
    id: 16,
    title: "나이키 덩크 로우",
    content: "여성 신발",
    price: 103000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f5eb001-9a59-4393-b289-3a2a142dc255/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-aJXARHqW.png",
  },
  {
    id: 17,
    title: "나이키 코트 레거시 레오파드",
    content: "여성 슬립온 신발",
    price: 79000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c26847c-d8b3-428d-8c77-74610c075a2f/%EC%BD%94%ED%8A%B8-%EB%A0%88%EA%B1%B0%EC%8B%9C-%EB%A0%88%EC%98%A4%ED%8C%8C%EB%93%9C-%EC%97%AC%EC%84%B1-%EC%8A%AC%EB%A6%BD%EC%98%A8-%EC%8B%A0%EB%B0%9C-s2C9RQ1l.png",
  },
  {
    id: 18,
    title: "점프맨 투 트레이 PSG",
    content: "남성 신발",
    price: 179000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b1026c8a-f7e0-4f27-941a-315e47b77d25/%EC%A0%90%ED%94%84%EB%A7%A8-%ED%88%AC-%ED%8A%B8%EB%A0%88%EC%9D%B4-psg-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-zyJM567X.png",
  },
  {
    id: 19,
    title: "나이키 덩크 로우 레트로 QS",
    content: "남성 신발",
    price: 149000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2be5727f-32d7-4b36-bff4-a2d7772e67ef/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-qs-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-jAcpLc0A.png",
  },
  {
    id: 20,
    title: "나이키 TC 7900",
    content: "여성 신발",
    price: 139000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3c24388-9a45-44e2-95c7-8f99d38bd882/tc-7900-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-2rIhOi40.png",
  },
  {
    id: 21,
    title: "에어 조던 1 로우 SE",
    content: "주니어 신발",
    price: 139000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cf5cd02c-10b9-4894-8fa3-63e233656874/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-se-%EC%A3%BC%EB%8B%88%EC%96%B4-%EC%8B%A0%EB%B0%9C-WSkw5u1t.png",
  },
  {
    id: 22,
    title: "나이키 코트 버로우 미드 2",
    content: "주니어 신발",
    price: 85000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7d6b134-0f2e-4012-b431-f831fc6e2c70/%EC%BD%94%ED%8A%B8-%EB%B2%84%EB%A1%9C%EC%9A%B0-%EB%AF%B8%EB%93%9C-2-%EC%A3%BC%EB%8B%88%EC%96%B4-%EC%8B%A0%EB%B0%9C-gWokBjQN.png",
  },
  {
    id: 23,
    title: "에어 조던 1 로우 SE",
    content: "주니어 신발",
    price: 139000,
    count: 0,
    imageAddress:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/544dfcf7-cbcc-40d2-9ae9-7009fe3e1fc1/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-se-%EC%A3%BC%EB%8B%88%EC%96%B4-%EC%8B%A0%EB%B0%9C-JisR5bZn.png",
  },
];

export default suggestData;
