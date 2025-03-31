import React from "react";

const CapatinDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className=" flex items-center justify-start gap-3">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AJwDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAgABAwQFBgf/xAA9EAACAQMCAwYDBQcCBwEAAAABAgMABBESIQUxQQYTIlFhcYGRoRQjMkKxBzNScoLB0WKiFRZTY5Ky4dP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgICAgIDAQAAAAAAAAAAAQIRAyESMQRBEyIUI3Gx/9oADAMBAAIRAxEAPwDnqbNNT4FAD0qVLnQAhzpPJHGrvIwVEGp2Odh8KfTXO8Xv2kla2iYCGJsNg/vHHMk+Q6UATXXG2dWS1Uxg7GVzmTH+kDYVlfaJ9wJZd21E6jkkb5PrUIBYZHTnnp71IkbasEeIH60gLg4pxNdOm6lIO+G0ty5jxCtWz4wjqouVIbkZEHhz6qKyBDHpI5aSG35Ecs5+h9x51PDFHqKnB1E6fXYkbe4Pzp0B06srhWVgysMgqcgipKwuHXPdPJEWJRiSo6A4rcByAaAHyaIE0IGaLlQAt6IHkKGlQAVDmnzQnlQADnaq55mp2qucZNADZNKlSwaAHp6YU9ACkfRFNJg+CKR9ufhUnauIJd2JJ1FiSc8yTvzrrOJy93Y3GOcgWIc/zHf6A0PZPhdlePPNcqHMbqERuQBHPFROaguTLhBzlxRgW9vcsRoikckEYVCcjyIAq0eHXq41QSoWXA1owOBy5+Vey2VnaQIvdQxrsN1UAmr5tbWUfeRow5kEA/rXIvKt9HZ+Il2zxS24bxG5mSGKF2diM43XcYOfetY9j+PRaJAgITLYBBIwP77V6rb2Fnbu8kUKKzdQB9KmkVdPKnLPL0OPjR9nik/BuL2hE3cSEZY7DPLarPCbszK8LA6o+WeflvXq5ih8QKrg+YG2fevKp4TZ8Yk04EbTyxnGPECxAP6VpiyufZhmwrH0alKmBp9q6TmFSpUqAFTGnoT1NAEbHaq7czU7VXPM0AFinpUqEAqVKlQBncYUm1iPQXCA/FWFaXZEGOW6ODp8C7nbVz2qnxWNpLIsM6UmiYnBx1GCfjVnh91Bw+wguCjOXk2RM6pZNwoHptvXLn3GkdPjqpcmek27ghd+laCDIGDXm63vbpovtcdvbW9uAXwzRKSPUymtrgfaC6n8F+yLKGx4CmD0201yfFxVtnesvN1R2S5xTSDA3NU5boxwtID+Ulc8s4rkbnjfaGeWO1spYgNWmWRm088/hwp35U0uWhybirOrmYqCR5V55xS2xPJK2dYmyNuYzmtaC+7U8OmV+KxxXNix7qR7Zw5TPJmGAwI9qfjtsVljKAt9oVWjC7liWCgAeZ2rfFHgzlzS5x6oyqVTXNrcWjiOYKHIz4HDgEHBUldsjqKhFdidq0cLTTpi3p/FSyKWaYht6Y09ATQADdagI3qZuVQnnQAVKmpb0kAVKhyacUwNK1hD2zA6TG6zGVXxpIBAw2elQcLtA9vAFVGCF2iDjI/eEr9Kms5WNvcwrgvsyg7BhnJXPrVrs+ySQknIKyuhBGCNLEYIrzMtps9fFxlGH8G/5eub2YT39zcl1mEsKoMJEoUqERTlcf0//b83CLWFLQRRNG0SwQKdhlY8DUQBnUepzXSwcgM52+lULktNcqi/u420sfNiMnSPSo5y40zZYop2uy5dwBre2QHwsN/asW97N2l0qKVlTRJJNHLAVDqzxmIgEg7DOQPOujaJ2hhII2XSM+fPentnwe6lyrjGM8iD1FOLcWKSUlTOatOA3NiWEc8rWxSOPuZz3g0qun8R335nf5Vo3McIm4XK/h7otEGAyU1acMPrv0zWvcYwd9sbVjNcMt9ZQqmvUtw7A/hCBQuW984p27ZFLRQ7RW8MdvaumARO6r/qV01H6j61zWa3e0l0rvZ2iZAgVpH6byYA29h9fWuf+Nd2BPgrPP8AKaeV0FkU9BSrY5hyaE0jTUAC3WoDzNSsdqiPM0APkUqGluKlAHSqPV60s1QE8cjxOrqdxnnyPvUnBrt7e4u4ZmBLXMj61BCkth9gd+tVc1Ez91MJOkoUE+Tpy+Y/SscsFJWb4cjizvbrjVpw+K2aV97gMYwoydC4y1ctddorj7Q01iZpPHqEIVW1sSBjbfyqIfZuKtwpZpQGDm307jCEFzv55wB71bs7SezmnhuGuLmISDuXgaKGREOc5UjSTy8udcihFLfZ6KnPI/r0a8naW9e1Hd2V1bsNAnlki7xYixAAUciasWfHrIJpubqV5gQO9mRV1MBnT4NsUwktY4Gjil462yHSbaywct4strOAPUb1iy8O4hffaZi0SQQxPIuIR9olkVScFkIXA9j/AIOEV2XLmlcf8Oya/t3t1nEilCmsYxkr6CuWbijJxD7WGA0qiaGjLloRJrMakMAGPmc+1URMYLKzh74vIUOWUggLz6fWqeovhjyYBkPmp5HPrWmLFb2cebM0lRPcTy3M008py8rtIx9T0HtUORTZNNkV2rRwt3sLIp80FKgQdCaVMTQALHnUJ5mpGqOgBs0s0NPvUIBUqVOBVIBUEyxyRMjsFDlVVieTk+HFKWa3h/euF9ObfIVnR3K3HEeHGYYtVvrTUhO3dmZQS3rTptBdMC2uLizu0EgAlgkBXPIknmPeuxl4nhIpY4w4ZTI4Jw0e3KsrtDwSaC5lWMffQMTE3ISxE5XeseyuASsMueeHVsjfyIrkcVkV+0dkJyxPXTOwTjl6dEIgZ1YAsqsQBkZAJq7ecUt04VcDVGJ5YTCsSOAVZsqT54Fc699bd0NAUOFAJH58ZycelZM9w11MIbca5GDaEX8u+5JPShYr7NJeTJqux7MS3t2LWMtgj71sHCJjc7fSui4hGsVy0aLpSOKCNBjGFWNQKn7P8Ha3WONV1XVzIoJ6s7HA59BWl2pt4rfiz24IITh/Dhn1SMx5+IArbD+ybr0cuVfHBX2zmTmmomKjIyPShxWzi12YJ2KnyaampDCyaGlmmJoAY8jUZO9G1R0ANT5qJpUT8RGfIc6he5OPAN/WpUGxWWi6qMscCqkt2xysO3+o8/hUDNI/4iTmjVAPlW8YEtlOQMWyxJJySTvUZUkEAkbYBHMe1WptKFWbZc4J6DPnUTacZUgg9QciraolHrNhHB2o4Dw+4ZlS9SLumkxnRcReB1cD8pIz8a43iHBEW5a3vIHguwNSsh096gONUbgYYfp6Vpfs64l3VzfcMkbwXKi5gBPKVMK4HuMH4V6Re8IsOKwdxdxaxnVGykrLE/Ro3G4NceXFu46Z0Y8vH6yVo8bTs7CcA3F1jfbWn66a3OHcHtLNSyIFB3dickgdWZt6s39o/CLqa1/4lY3ncDVKvfRpcwL0EyFsZ9vkM1tdm04ZfTwzXd/w/SpVrazFxF3s0mcBpUJzgdF5nn78jjlk+LO2MsMVzR0PAOFCBFvZkxK64t0YYKI35yD1P6e9efdor5bvj/GJVIMccgtUwcjFuoiJHxBr1biV2lhYcQvWxi1tpZhnqyqdI+JxXg/eSai7kszEvIepZjkk16fjY1BaPOzZHN2wLhiMMD+bHzo4Z2wAdx0zVeeVCWiAYscZOMBevM0KkgV0GSNRQsilkO45qf7UHp5VVjlZDlT7+tTCQE6uRrN40yubQdInFGhjkGGG/QrsfjQvHp1EMGUNpzy3xnlWUoNFKSZGSedBmiNRmoKM3SwYgnJ8/OjCnGac4+7PmNPx5ijAHL1rpSMxlXFSYoeoo/KrSoTIJApOkjZgfY1C0SpsqgL5AYqzIPDqHNDq+HWhIyKKslOguGXclhe2d5HnVbzJJgfmUHDL8RkV67x3ifFJuDyL2cmUXc0McguMb91IuSlu52Dkfm6e+6+OAaW2r1LsXcJxHgk1gxH2jhsndL5m3ly8Z+HiX+ms5x0UmeX2as080VwHE6u3eLIDr1g+LVq3z51o23D7vjfEIODWSnDfeXsq4Iht1I1Nv13wvrV3tVYy8L4ot3gGaSKR3RsjvFjYKGJHy+FdZ+zRLFU48CVPEZp4LiRj+I2RTEYTO+A2sN64rJFVsi7RX83D+DNwAs4Uz2kVsHZ3cWkMepw8j7k6gufeuHJIII38x1rrf2gzq/GbS2XGLSxUtj/qTuXOfgBXIE10Y9Izl2NkM4yNj0NDj5ZPyqWKOaZ+7hjeSV8hEQZY4GTgU08FzbMI7iGSFyocLKMMVOwOKdq6EnuiPOKkVjzqEHJxUoxyplMlEmkM3QDNSQktGVyQd2wepO9U5HGnQD+Mgf5qWAlnDZOkHYetKrESmoydzUkhXLFSCDvt5+VRGuRqnRuigvjjYY8S+ID1G9TxkMoYdd6hjYBhths9etGuEkaPofGn8p6fCuhGZIRvTasHHSnqN85FaEMm8/brUK7ak/hO3seVGpyKFxpKv0GzexpCHIz+tdL2K4gbHj1nGxxDxFWsJc8tTeOIn+oY/qrm6NHeJ45EJWSN0ljYc1dGDqR8RQ1YG920uRxDtLxCJWGizht7PntmMF5MfFvpT9j7g23HeAYPikd7GTB2aOdWGk/EKfhXLNcT3N1d3E7ZmuLiaWYjbLyOWOPStnhE8dnxDhl25ASzuorhvaPLYrnLstdo7oXnHuOzg5UXjwJ/JABCMfI1kGlrdyzuSXkZpHJ6s5LEn50x3roXRBZsbw2NzDciJJHj1MquzqoPQ+Den4rxA8QnW4MMcJESRBI2Zl8JJyNW/WqZIBJ8sChALHJ5dBUfFHn8lbJUI8udbHTINNI7YCqd3OM+Q5k07EKGPlUYxqyfyoB7Z3NaFscbvjoi5+JokdpSVQkRA4Yjm3oDUR06dUjYViXI6sTyFGAzb7xxjkq/jPueVIReb8KYxsNOB0A5CovOlGQYjgAKCAMb79d+vrTVy5dSNo9FNSDsy7dCKaQhRHIrZCNhupCtsaZDjalNoKuGGklTgkbfMV0VozssZ5HzFC42qG2k72FckZGx9xtUx5VSExkONqkOCCDuDzqIdakU0xDKcDB/Lt7joaPmKA7EHocKf7UQ2oAqyLonJ6OA3xGxq5zgAz+N1X4ZzVe5HhR+qNj4HapImz3a/wAIZj+grJr7FeiUjFNy3PTenpLHLMwiijlllfYJDG8jkeioCfpWhJEBq3PvR+1bdp2R7Y3mDFwp7dDj7ziMkdsuPPQxMn+yulsP2Z3DlW4pxYBcjMPDIdz6Gef/APOpc0ilFs86nOFUdWdRt71Ez41KBksxz7DavQu0tr+zjgXC72xt4I7ni8qAQuk5uLuCVTlZJpySqgdVAGeWMHI8wjaSV2OPDnB6DzNClYmqLqZZtQAdh1ORGnoD/j50bITjvH1HoDso9kH9806KAFyfYDYD4UeCdlUk/SqBhQDGrJOQMAsefXAH/wAo/OlHG4zk464XAHKmyawyrZpDorAcuvqKJkUqc5xjcU43xR/4rddENFC3+4uJIhnS2HUH15irw5MKpXQKvDIOaMAf5TtVxTkZ9KS1oTBo1ofPnyp151Qg2AKkef0oVJIB68j7jnRjlQcmI6NuPcc6AFINSMvmD86itSSJWPLIT5DJqbPxqKEaUkx+aaQ/WprdjLHMV0nZntNadnIuJMLCS6vLuSJdZmWKJIYl8KAhWbmWJ+HlXNE4GT5ZqIMcDOM8zim1emCdHZ3f7RO0s2RapZWgzs0cJlk/8pyV/wBtc5e8e7Q34YXfE72VG5xmZ1j3/wC3HhPpVDehJpKKXQNsqz4CH+1Q2+wG+1SXbeE0NuPw/Kk+wRfjGRnbyFSAA4yTjPIGgU7AVIOlWNhIqA5ES7HmSdVMeZ96MGhcb5HUCssqtDgQ8sURpUq0EVbhQySA/wAJPyordmMSk+Q/SlSpexEmTmlkjOKVKmAascCk+wB6gjHzxSpUxC/i96BPwr/M/wD7GlSoAUpIXbqR+tCORpUqAHyaEk0qVAFK5JwPepLf+1KlUeykXV61KOlKlVgw+lIGlSpMSP/Z"
            className="object-cover h-10 w-10 rounded-full"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">Shreyash iyer</h2>
        </div>
        <div>
          <h4 className="text-lg text-green-600 font-medium">rs 295.2</h4>
          <p className="text-sm font-thin text-green-600 ">Earned</p>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6 p-6 bg-gray-100 rounded-xl ">
        <div className="text-base font-medium text-center">
          <i className="text-2xl font-thin ri-timer-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm font-medium text-gray-700">Hours online</p>
        </div>
        <div className="text-base font-medium text-center">
          <i className="text-2xl font-thin ri-speed-up-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm font-medium text-gray-700">Hours online</p>
        </div>
        <div className="text-base font-medium text-center">
          <i className="ri-book-2-fill text-2xl"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm font-medium text-gray-700">Hours online</p>
        </div>
      </div>
    </div>
  );
};

export default CapatinDetails;
