import {SVGProps} from "react";

interface UserIconProps extends SVGProps<any> {
    fill?: string
}

const SortIcon = ({fill}: UserIconProps) => {
    return <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.3898 0.115973C14.5503 0.268712 14.6796 0.421423 14.7747 0.631781C14.7801 0.791547 14.7825 0.950011 14.7826 1.10981C14.783 1.18494 14.783 1.18494 14.7834 1.26158C14.7841 1.4304 14.7846 1.59921 14.785 1.76803C14.7855 1.88865 14.786 2.00926 14.7865 2.12988C14.7878 2.45819 14.7889 2.7865 14.7899 3.11481C14.791 3.45759 14.7923 3.80038 14.7937 4.14316C14.796 4.75569 14.7982 5.36823 14.8002 5.98077C14.8028 6.75699 14.8057 7.53322 14.8086 8.30944C14.8143 9.83053 14.8196 11.3516 14.8248 12.8727C14.8473 12.8474 14.8698 12.8221 14.8931 12.796C15.1281 12.5323 15.3637 12.2691 15.5996 12.0062C15.6876 11.9081 15.7754 11.8099 15.863 11.7114C15.9892 11.5698 16.1158 11.4288 16.2425 11.2878C16.2815 11.2439 16.3205 11.1999 16.3606 11.1546C16.5764 10.9158 16.7724 10.6997 17.0838 10.6351C17.3488 10.6387 17.5561 10.6863 17.7507 10.9045C17.9166 11.119 17.9871 11.2508 17.9943 11.5295C17.9962 11.5761 17.9981 11.6226 18 11.6706C17.9494 12.0263 17.6731 12.2854 17.4518 12.5293C17.4194 12.5653 17.3871 12.6014 17.3538 12.6386C17.2474 12.757 17.1407 12.875 17.034 12.993C16.9596 13.0754 16.8853 13.1579 16.811 13.2404C16.6555 13.4128 16.4998 13.5851 16.344 13.7572C16.1444 13.9777 15.9453 14.1989 15.7464 14.4202C15.5932 14.5905 15.4397 14.7605 15.2861 14.9303C15.2125 15.0117 15.1391 15.0932 15.0658 15.1749C14.9633 15.2889 14.8604 15.4024 14.7574 15.5157C14.7122 15.5664 14.7122 15.5664 14.666 15.6181C14.4217 15.8851 14.2373 15.9821 13.8865 16C13.5527 15.9246 13.3121 15.6541 13.0815 15.3957C13.0494 15.3604 13.0173 15.325 12.9842 15.2886C12.8789 15.1726 12.7742 15.056 12.6695 14.9394C12.5962 14.8582 12.5229 14.7771 12.4495 14.6961C12.2962 14.5265 12.1432 14.3566 11.9904 14.1865C11.7945 13.9685 11.598 13.7511 11.4014 13.5339C11.2501 13.3667 11.099 13.1991 10.948 13.0315C10.8756 12.9513 10.8032 12.8711 10.7307 12.7909C10.6295 12.679 10.5287 12.5668 10.428 12.4545C10.398 12.4214 10.368 12.3884 10.3371 12.3544C10.1063 12.0956 10.0043 11.9242 10 11.5503C10.0054 11.2618 10.0309 11.0922 10.219 10.8787C10.3914 10.7252 10.5503 10.6437 10.7728 10.6329C11.1895 10.6841 11.4106 10.9565 11.6904 11.2738C11.7297 11.3177 11.7691 11.3616 11.8096 11.4068C11.9348 11.5465 12.0594 11.6869 12.184 11.8272C12.3094 11.9679 12.4349 12.1085 12.5605 12.2489C12.6385 12.3362 12.7164 12.4236 12.7942 12.5113C12.8293 12.5507 12.8644 12.59 12.9005 12.6306C12.9314 12.6654 12.9623 12.7002 12.9941 12.7361C13.0702 12.8226 13.0702 12.8226 13.1727 12.8727C13.1725 12.8103 13.1722 12.7479 13.172 12.6836C13.1664 11.1655 13.1623 9.6474 13.1597 8.12927C13.1584 7.39512 13.1567 6.66097 13.1538 5.92682C13.1513 5.28693 13.1497 4.64706 13.1491 4.00717C13.1488 3.66835 13.1481 3.32955 13.1462 2.99073C13.1445 2.67176 13.144 2.35282 13.1444 2.03385C13.1443 1.91685 13.1438 1.79985 13.1429 1.68285C13.1416 1.52289 13.1419 1.36303 13.1426 1.20307C13.1419 1.15694 13.1411 1.11082 13.1404 1.0633C13.1442 0.730102 13.2295 0.500787 13.423 0.244059C13.7137 -0.0275763 14.0497 -0.0757148 14.3898 0.115973Z"
            fill={fill || "#607490"}/>
        <path
            d="M3.9961 0.00670558C4.0314 0.00449274 4.0667 0.0022799 4.10306 0C4.45533 0.0835653 4.72975 0.390547 4.97519 0.666137C5.00676 0.700928 5.03834 0.73572 5.07088 0.771566C5.17405 0.885448 5.27667 0.999914 5.37927 1.11442C5.45126 1.19422 5.52327 1.274 5.59531 1.35374C5.74565 1.52035 5.89574 1.68724 6.04563 1.85435C6.23776 2.06853 6.43045 2.28208 6.62333 2.49544C6.77184 2.65983 6.92011 2.8245 7.06829 2.98926C7.13927 3.06813 7.21032 3.14692 7.28144 3.22564C7.38059 3.3355 7.47941 3.44571 7.57815 3.55602C7.60754 3.58845 7.63692 3.62088 7.6672 3.65428C7.90425 3.92043 7.99571 4.08065 8 4.45402C7.99462 4.74239 7.96916 4.91201 7.78138 5.12544C7.55039 5.31616 7.383 5.37171 7.09721 5.37636C6.75639 5.28945 6.50879 4.94715 6.27367 4.68179C6.23551 4.63922 6.19735 4.59664 6.15803 4.55278C6.0368 4.41745 5.9159 4.28175 5.79504 4.14599C5.67343 4.0097 5.55174 3.87348 5.42991 3.73743C5.35425 3.65291 5.27872 3.56823 5.20334 3.4834C5.1693 3.44532 5.13526 3.40724 5.10019 3.368C5.07024 3.33436 5.0403 3.30072 5.00945 3.26606C4.93496 3.18188 4.93496 3.18188 4.83311 3.13194C4.83338 3.19426 4.83366 3.25659 4.83394 3.3208C4.8406 4.83764 4.84553 6.35448 4.84864 7.87133C4.85019 8.60487 4.85229 9.33839 4.85572 10.0719C4.85871 10.7113 4.86065 11.3507 4.86132 11.9901C4.86171 12.3286 4.86262 12.6671 4.86481 13.0056C4.86684 13.3244 4.86747 13.6431 4.86702 13.9619C4.8671 14.0787 4.86769 14.1956 4.86885 14.3124C4.87884 15.3793 4.87884 15.3793 4.6114 15.734C4.39027 15.9572 4.18431 16.0104 3.89245 15.9984C3.65733 15.9563 3.5204 15.8034 3.36834 15.6121C3.21496 15.3729 3.22643 15.1773 3.22614 14.8919C3.22589 14.8418 3.22564 14.7918 3.22539 14.7402C3.22462 14.5714 3.2242 14.4026 3.22378 14.2339C3.2233 14.1133 3.2228 13.9927 3.22228 13.8721C3.22093 13.5439 3.21988 13.2156 3.21889 12.8874C3.21779 12.5447 3.21643 12.202 3.21508 11.8593C3.21273 11.2469 3.21059 10.6346 3.20856 10.0222C3.20598 9.24613 3.20312 8.4701 3.20021 7.69407C3.19452 6.17336 3.18918 4.65265 3.18407 3.13194C3.16157 3.15724 3.13908 3.18254 3.1159 3.2086C2.88126 3.4723 2.64608 3.73541 2.4106 3.99819C2.32283 4.09628 2.23521 4.19452 2.14772 4.29291C2.02179 4.43447 1.89539 4.57548 1.76889 4.7164C1.72999 4.76036 1.69109 4.80432 1.65102 4.84961C1.40665 5.12049 1.17662 5.37043 0.810463 5.37117C0.585856 5.36196 0.458168 5.28983 0.28577 5.12544C0.105041 4.8981 0.0261001 4.75575 0.0109311 4.45402C0.00732383 4.40362 0.00371657 4.35323 0 4.3013C0.111561 3.76514 0.768048 3.2529 1.11243 2.87107C1.18316 2.79251 1.25389 2.71395 1.32461 2.63539C1.47215 2.47156 1.6198 2.30784 1.76751 2.14419C1.9568 1.93444 2.14574 1.7243 2.33459 1.51407C2.48022 1.35208 2.62607 1.19034 2.77198 1.02867C2.84178 0.951269 2.91149 0.873774 2.98112 0.796187C3.07821 0.688045 3.17562 0.580258 3.27312 0.472554C3.30176 0.440509 3.33039 0.408464 3.3599 0.375448C3.56025 0.155173 3.71035 0.0163873 3.9961 0.00670558Z"
            fill={fill || "#607490"}/>
    </svg>
}

const FilterIcon = ({fill, ...other}: UserIconProps) => {
    return <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...other}>
        <circle cx="5.97346" cy="2.34812" r="1.28611" stroke={fill || "#607490"} strokeWidth="1.5"/>
        <path d="M1 2.38159L3.93734 2.38159" stroke={fill || "#607490"} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.00955 2.38159L15.5532 2.38159" stroke={fill || "#607490"} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6.0402" cy="13.9641" r="1.28611" stroke={fill || "#607490"} strokeWidth="1.5"/>
        <path d="M1 13.9976L4.0041 13.9976" stroke={fill || "#607490"} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.07629 13.9976L15.5532 13.9976" stroke={fill || "#607490"} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10.6465" cy="8.22292" r="1.28611" transform="rotate(-180 10.6465 8.22292)"
                stroke={fill || "#607490"} strokeWidth="1.5"/>
        <path d="M15.5532 8.18945L12.6826 8.18945" stroke={fill || "#607490"} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.61038 8.18945L0.999993 8.18945" stroke={fill || "#607490"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
}
const BookIcon = () => {
    return <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.74323 0.31032C2.79949 0.310114 2.79949 0.310114 2.85689 0.309904C2.98244 0.309492 3.108 0.309348 3.23355 0.309205C3.32364 0.308971 3.41372 0.308723 3.50381 0.308462C3.77405 0.307725 4.04429 0.307347 4.31453 0.307015C4.44204 0.306851 4.56955 0.30665 4.69706 0.306455C5.12138 0.30582 5.5457 0.305278 5.97002 0.305007C6.08001 0.304936 6.19 0.304864 6.29998 0.304791C6.32732 0.304773 6.35465 0.304755 6.38281 0.304736C6.82507 0.304427 7.26731 0.303481 7.70956 0.302267C8.16443 0.301028 8.61929 0.300358 9.07415 0.300239C9.32921 0.300159 9.58426 0.299836 9.83932 0.298877C10.0567 0.298062 10.274 0.297768 10.4913 0.298129C10.602 0.298297 10.7126 0.298152 10.8233 0.297503C11.6412 0.292977 12.3564 0.396163 13.013 0.988225C13.0367 1.0085 13.0605 1.02877 13.0849 1.04966C13.5552 1.47297 13.8963 2.18404 13.9796 2.84885C13.9948 3.02082 13.9917 3.19363 13.9916 3.36627C13.9917 3.43181 13.9917 3.43181 13.9919 3.49867C13.9921 3.61946 13.9922 3.74025 13.9922 3.86104C13.9923 3.9915 13.9925 4.12195 13.9928 4.2524C13.9932 4.53735 13.9934 4.82229 13.9936 5.10724C13.9937 5.28519 13.9938 5.46313 13.9939 5.64108C13.9944 6.13392 13.9947 6.62675 13.9948 7.11959C13.9948 7.15109 13.9948 7.1826 13.9948 7.21507C13.9948 7.24665 13.9949 7.27823 13.9949 7.31077C13.9949 7.37477 13.9949 7.43877 13.9949 7.50276C13.9949 7.53451 13.9949 7.56625 13.9949 7.59896C13.9951 8.11381 13.9956 8.62865 13.9964 9.1435C13.9972 9.67226 13.9976 10.201 13.9977 10.7298C13.9977 11.0266 13.9979 11.3234 13.9985 11.6202C13.999 11.8728 13.9992 12.1255 13.9989 12.3781C13.9988 12.5069 13.9988 12.6358 13.9993 12.7647C13.9997 12.9044 13.9995 13.0441 13.9992 13.1838C13.9996 13.2449 13.9996 13.2449 14 13.3072C13.9986 13.5415 13.9841 13.7191 13.8357 13.9001C13.524 14.1701 13.416 14.0628 12.9123 14.0628C12.9123 15.049 12.9123 16.0352 12.9123 17.0513C13.1339 17.0513 13.3555 17.0513 13.5839 17.0513C13.7848 17.163 13.8865 17.2389 13.9868 17.4622C14.0067 17.6743 13.9967 17.8421 13.8861 18.0225C13.7712 18.1514 13.6669 18.242 13.4987 18.2515C13.4643 18.2516 13.4299 18.2517 13.3944 18.2518C13.3547 18.252 13.3151 18.2522 13.2742 18.2524C13.2084 18.2524 13.2084 18.2524 13.1413 18.2524C13.0945 18.2526 13.0476 18.2527 13.0008 18.2529C12.8717 18.2534 12.7426 18.2536 12.6135 18.2538C12.4743 18.254 12.3352 18.2544 12.1961 18.2548C11.8597 18.2557 11.5234 18.2563 11.187 18.2568C11.092 18.2569 10.9969 18.257 10.9019 18.2572C10.3111 18.2581 9.72042 18.259 9.1297 18.2594C8.99282 18.2595 8.85594 18.2596 8.71906 18.2598C8.68504 18.2598 8.65102 18.2598 8.61597 18.2598C8.06583 18.2603 7.5157 18.2616 6.96557 18.2631C6.40029 18.2647 5.83501 18.2656 5.26972 18.2658C4.95254 18.2659 4.63536 18.2663 4.31817 18.2676C4.0478 18.2686 3.77743 18.269 3.50706 18.2686C3.36932 18.2684 3.23161 18.2685 3.09387 18.2695C2.17871 18.2753 1.39438 18.2031 0.709965 17.4514C0.228273 16.8964 -0.00422645 16.2213 0.000813147 15.4541C0.000682116 15.4001 0.000492518 15.3461 0.000250034 15.2922C-0.000241669 15.1452 9.41454e-05 14.9982 0.000576937 14.8513C0.00095203 14.6922 0.000548306 14.5332 0.000246447 14.3742C-0.000220106 14.0632 3.13469e-05 13.7522 0.000537739 13.4412C0.00110557 13.0785 0.000996042 12.7159 0.000870534 12.3533C0.000673367 11.706 0.00114795 11.0587 0.00197678 10.4114C0.00277984 9.78409 0.00301791 9.15684 0.00266543 8.52958C0.00228176 7.84561 0.0022182 7.16165 0.00270232 6.47769C0.00275355 6.40466 0.00280465 6.33164 0.00285552 6.25862C0.00288097 6.2227 0.00290642 6.18678 0.00293264 6.14976C0.00309149 5.89736 0.00302989 5.64495 0.00288678 5.39255C0.00272084 5.08466 0.00292461 4.77678 0.00358849 4.4689C0.00391856 4.312 0.00409312 4.1551 0.00382726 3.99819C0.00358835 3.85424 0.00382319 3.7103 0.0044183 3.56635C0.00461606 3.49029 0.00432691 3.41424 0.00401377 3.33818C0.0066308 2.91078 0.0635447 2.49255 0.225419 2.1019C0.235483 2.07703 0.245547 2.05216 0.255916 2.02653C0.352929 1.79578 0.476986 1.59606 0.62208 1.39914C0.64935 1.3597 0.64935 1.3597 0.677172 1.31947C1.0578 0.795324 1.69758 0.416709 2.29563 0.323875C2.44443 0.307361 2.59383 0.31029 2.74323 0.31032Z"
            fill="white"/>
        <path
            d="M2.74323 0.31032C2.79949 0.310114 2.79949 0.310114 2.85689 0.309904C2.98244 0.309492 3.108 0.309348 3.23355 0.309205C3.32364 0.308971 3.41372 0.308723 3.50381 0.308462C3.77405 0.307725 4.04429 0.307347 4.31453 0.307015C4.44204 0.306851 4.56955 0.30665 4.69706 0.306455C5.12138 0.30582 5.5457 0.305278 5.97002 0.305007C6.08001 0.304936 6.19 0.304864 6.29998 0.304791C6.32732 0.304773 6.35465 0.304755 6.38281 0.304736C6.82507 0.304427 7.26731 0.303481 7.70956 0.302267C8.16443 0.301028 8.61929 0.300358 9.07415 0.300239C9.32921 0.300159 9.58426 0.299836 9.83932 0.298877C10.0567 0.298062 10.274 0.297768 10.4913 0.298129C10.602 0.298297 10.7126 0.298152 10.8233 0.297503C11.6412 0.292977 12.3564 0.396163 13.013 0.988225C13.0367 1.0085 13.0605 1.02877 13.0849 1.04966C13.5552 1.47297 13.8963 2.18404 13.9796 2.84885C13.9948 3.02082 13.9917 3.19363 13.9916 3.36627C13.9917 3.43181 13.9917 3.43181 13.9919 3.49867C13.9921 3.61946 13.9922 3.74025 13.9922 3.86104C13.9923 3.9915 13.9925 4.12195 13.9928 4.2524C13.9932 4.53735 13.9934 4.82229 13.9936 5.10724C13.9937 5.28519 13.9938 5.46313 13.9939 5.64108C13.9944 6.13392 13.9947 6.62675 13.9948 7.11959C13.9948 7.15109 13.9948 7.1826 13.9948 7.21507C13.9948 7.24665 13.9949 7.27823 13.9949 7.31077C13.9949 7.37477 13.9949 7.43877 13.9949 7.50276C13.9949 7.53451 13.9949 7.56625 13.9949 7.59896C13.9951 8.11381 13.9956 8.62865 13.9964 9.1435C13.9972 9.67226 13.9976 10.201 13.9977 10.7298C13.9977 11.0266 13.9979 11.3234 13.9985 11.6202C13.999 11.8728 13.9992 12.1255 13.9989 12.3781C13.9988 12.5069 13.9988 12.6358 13.9993 12.7647C13.9997 12.9044 13.9995 13.0441 13.9992 13.1838C13.9996 13.2449 13.9996 13.2449 14 13.3072C13.9986 13.5415 13.9841 13.7191 13.8357 13.9001C13.524 14.1701 13.416 14.0628 12.9123 14.0628C12.9123 15.049 12.9123 16.0352 12.9123 17.0513C13.1339 17.0513 13.3555 17.0513 13.5839 17.0513C13.7848 17.163 13.8865 17.2389 13.9868 17.4622C14.0067 17.6743 13.9967 17.8421 13.8861 18.0225C13.7712 18.1514 13.6669 18.242 13.4987 18.2515C13.4643 18.2516 13.4299 18.2517 13.3944 18.2518C13.3547 18.252 13.3151 18.2522 13.2742 18.2524C13.2084 18.2524 13.2084 18.2524 13.1413 18.2524C13.0945 18.2526 13.0476 18.2527 13.0008 18.2529C12.8717 18.2534 12.7426 18.2536 12.6135 18.2538C12.4743 18.254 12.3352 18.2544 12.1961 18.2548C11.8597 18.2557 11.5234 18.2563 11.187 18.2568C11.092 18.2569 10.9969 18.257 10.9019 18.2572C10.3111 18.2581 9.72042 18.259 9.1297 18.2594C8.99282 18.2595 8.85594 18.2596 8.71906 18.2598C8.68504 18.2598 8.65102 18.2598 8.61597 18.2598C8.06583 18.2603 7.5157 18.2616 6.96557 18.2631C6.40029 18.2647 5.83501 18.2656 5.26972 18.2658C4.95254 18.2659 4.63536 18.2663 4.31817 18.2676C4.0478 18.2686 3.77743 18.269 3.50706 18.2686C3.36932 18.2684 3.23161 18.2685 3.09387 18.2695C2.17871 18.2753 1.39438 18.2031 0.709965 17.4514C0.228273 16.8964 -0.00422645 16.2213 0.000813147 15.4541C0.000682116 15.4001 0.000492518 15.3461 0.000250034 15.2922C-0.000241669 15.1452 9.41454e-05 14.9982 0.000576937 14.8513C0.00095203 14.6922 0.000548306 14.5332 0.000246447 14.3742C-0.000220106 14.0632 3.13469e-05 13.7522 0.000537739 13.4412C0.00110557 13.0785 0.000996042 12.7159 0.000870534 12.3533C0.000673367 11.706 0.00114795 11.0587 0.00197678 10.4114C0.00277984 9.78409 0.00301791 9.15684 0.00266543 8.52958C0.00228176 7.84561 0.0022182 7.16165 0.00270232 6.47769C0.00275355 6.40466 0.00280465 6.33164 0.00285552 6.25862C0.00288097 6.2227 0.00290642 6.18678 0.00293264 6.14976C0.00309149 5.89736 0.00302989 5.64495 0.00288678 5.39255C0.00272084 5.08466 0.00292461 4.77678 0.00358849 4.4689C0.00391856 4.312 0.00409312 4.1551 0.00382726 3.99819C0.00358835 3.85424 0.00382319 3.7103 0.0044183 3.56635C0.00461606 3.49029 0.00432691 3.41424 0.00401377 3.33818C0.0066308 2.91078 0.0635447 2.49255 0.225419 2.1019C0.235483 2.07703 0.245547 2.05216 0.255916 2.02653C0.352929 1.79578 0.476986 1.59606 0.62208 1.39914C0.64935 1.3597 0.64935 1.3597 0.677172 1.31947C1.0578 0.795324 1.69758 0.416709 2.29563 0.323875C2.44443 0.307361 2.59383 0.31029 2.74323 0.31032ZM1.47154 2.11474C1.16627 2.5352 1.08148 2.94707 1.08412 3.47323C1.08406 3.51547 1.08401 3.55771 1.08395 3.60122C1.08384 3.74215 1.08421 3.88307 1.08457 4.02399C1.08463 4.12525 1.08458 4.22651 1.08454 4.32777C1.08451 4.54546 1.08472 4.76315 1.0851 4.98085C1.08564 5.29559 1.08582 5.61034 1.0859 5.92508C1.08605 6.43579 1.08649 6.94651 1.08713 7.45722C1.08775 7.95318 1.08822 8.44915 1.08851 8.94511C1.08853 8.97571 1.08854 9.0063 1.08856 9.03783C1.08865 9.19133 1.08873 9.34483 1.08882 9.49834C1.08951 10.7708 1.0907 12.0432 1.0922 13.3157C1.12873 13.2954 1.16526 13.2751 1.20291 13.2543C1.25274 13.2272 1.30259 13.2002 1.35244 13.1733C1.37629 13.16 1.40014 13.1466 1.42472 13.1329C1.78446 12.9399 2.12991 12.8881 2.52624 12.8899C2.57132 12.8897 2.61641 12.8894 2.66149 12.8891C2.78425 12.8885 2.907 12.8885 3.02976 12.8886C3.16256 12.8886 3.29536 12.888 3.42817 12.8875C3.65788 12.8866 3.88759 12.8862 4.1173 12.886C4.44942 12.8858 4.78154 12.8849 5.11366 12.8839C5.65259 12.8823 6.19151 12.8812 6.73044 12.8804C7.25376 12.8796 7.77708 12.8786 8.30039 12.8772C8.34883 12.8771 8.34883 12.8771 8.39825 12.877C8.56026 12.8766 8.72227 12.8761 8.88428 12.8757C10.2269 12.8722 11.5696 12.8696 12.9123 12.8674C12.9146 11.6228 12.9164 10.3782 12.9174 9.13361C12.9176 8.98656 12.9177 8.83951 12.9178 8.69246C12.9178 8.66319 12.9179 8.63392 12.9179 8.60376C12.9183 8.13021 12.9191 7.65666 12.9201 7.18311C12.921 6.69694 12.9216 6.21078 12.9218 5.72461C12.9219 5.4248 12.9223 5.12498 12.9232 4.82517C12.9238 4.59499 12.9238 4.36481 12.9237 4.13463C12.9237 4.04041 12.9239 3.94619 12.9243 3.85197C12.9248 3.72304 12.9247 3.59413 12.9244 3.4652C12.9247 3.42817 12.925 3.39114 12.9253 3.35299C12.9224 2.84481 12.7693 2.39961 12.459 2.02485C12.095 1.64078 11.6534 1.49944 11.1615 1.50147C11.1245 1.50133 11.0875 1.50118 11.0494 1.50104C10.9258 1.50065 10.8022 1.5008 10.6786 1.50095C10.5898 1.50079 10.5011 1.50059 10.4123 1.50037C10.1964 1.49989 9.98054 1.49983 9.76466 1.49991C9.58911 1.49998 9.41355 1.49992 9.23799 1.49976C9.21297 1.49973 9.18795 1.49971 9.16217 1.49969C9.11134 1.49964 9.0605 1.4996 9.00967 1.49955C8.53327 1.49915 8.05688 1.49923 7.58048 1.49946C7.14516 1.49965 6.70983 1.49923 6.27451 1.49852C5.827 1.49779 5.3795 1.49749 4.932 1.49763C4.68096 1.4977 4.42993 1.49761 4.1789 1.49708C3.96516 1.49663 3.75143 1.49658 3.5377 1.49703C3.42877 1.49725 3.31984 1.49723 3.21091 1.49684C3.09253 1.49645 2.97416 1.49676 2.85578 1.49723C2.82176 1.49695 2.78775 1.49668 2.7527 1.49639C2.24687 1.50063 1.81978 1.70514 1.47154 2.11474Z"
            fill="black"/>
        <path
            d="M2.55814 14.0538C2.5978 14.0538 2.63747 14.0537 2.67833 14.0537C2.78814 14.0536 2.89795 14.0538 3.00776 14.0542C3.12628 14.0545 3.24481 14.0544 3.36333 14.0543C3.56858 14.0543 3.77384 14.0545 3.97909 14.0549C4.27585 14.0555 4.57261 14.0557 4.86938 14.0558C5.35087 14.056 5.83236 14.0565 6.31385 14.0572C6.78154 14.0579 7.24923 14.0584 7.71692 14.0587C7.74576 14.0587 7.77459 14.0588 7.8043 14.0588C7.94895 14.0589 8.09361 14.059 8.23826 14.0591C9.43809 14.0598 10.6379 14.0612 11.8377 14.0628C11.8377 15.049 11.8377 16.0352 11.8377 17.0513C10.6297 17.0538 9.42163 17.0559 8.21358 17.057C8.07084 17.0572 7.92811 17.0573 7.78538 17.0575C7.75696 17.0575 7.72855 17.0575 7.69927 17.0576C7.23963 17.058 6.77999 17.0589 6.32035 17.06C5.84846 17.061 5.37657 17.0616 4.90467 17.0619C4.61366 17.062 4.32265 17.0625 4.03165 17.0634C3.83189 17.064 3.63213 17.0642 3.43238 17.064C3.31726 17.064 3.20214 17.0641 3.08702 17.0647C2.96187 17.0652 2.83674 17.0651 2.71159 17.0648C2.67565 17.0651 2.63972 17.0654 2.6027 17.0658C2.18144 17.063 1.80765 16.9568 1.48769 16.6416C1.18492 16.294 1.07681 15.8623 1.08067 15.3884C1.11564 14.9941 1.31656 14.6523 1.57492 14.3897C1.69473 14.2814 1.82275 14.2027 1.96528 14.1375C2.00521 14.1183 2.00521 14.1183 2.04595 14.0987C2.21738 14.0478 2.38143 14.0528 2.55814 14.0538Z"
            fill="white"/>
        <path
            d="M4.37013 8.37949C4.39322 8.37938 4.41631 8.37927 4.4401 8.37915C4.51784 8.37883 4.59559 8.37877 4.67334 8.37872C4.72893 8.37855 4.78452 8.37836 4.84012 8.37816C4.99144 8.37767 5.14276 8.37743 5.29408 8.37726C5.3886 8.37715 5.48311 8.377 5.57762 8.37683C5.87324 8.37632 6.16886 8.37596 6.46448 8.37581C6.80588 8.37565 7.14728 8.37499 7.48867 8.37391C7.75244 8.3731 8.0162 8.37272 8.27997 8.37267C8.43755 8.37263 8.59513 8.37241 8.75272 8.37175C8.901 8.37113 9.04928 8.37105 9.19756 8.37138C9.25195 8.37141 9.30634 8.37124 9.36073 8.37088C9.43507 8.3704 9.50939 8.37062 9.58373 8.37101C9.64609 8.37093 9.64609 8.37093 9.70972 8.37084C9.85702 8.38892 9.97075 8.44106 10.0797 8.55415C10.2203 8.75879 10.2468 8.87732 10.2259 9.13186C10.1646 9.32884 10.0712 9.42312 9.92369 9.54277C9.80812 9.58563 9.7187 9.58516 9.59675 9.58563C9.57363 9.58576 9.55051 9.5859 9.52669 9.58604C9.44905 9.58645 9.37141 9.5866 9.29377 9.58674C9.23817 9.58697 9.18257 9.58722 9.12697 9.58748C8.94424 9.58827 8.76152 9.58866 8.57879 9.58903C8.5159 9.58918 8.453 9.58933 8.39011 9.58949C8.09467 9.5902 7.79923 9.59073 7.50378 9.59105C7.16267 9.59141 6.82156 9.59239 6.48045 9.5939C6.21683 9.59503 5.95321 9.59558 5.68958 9.59571C5.53211 9.59579 5.37464 9.59613 5.21717 9.59707C5.06902 9.59794 4.92089 9.5981 4.77274 9.59771C4.7184 9.59769 4.66406 9.59793 4.60973 9.59844C4.53546 9.5991 4.46123 9.59884 4.38696 9.59835C4.32466 9.59848 4.32466 9.59848 4.2611 9.59862C4.08732 9.57022 3.98449 9.47756 3.86883 9.33498C3.76325 9.16531 3.75641 8.99575 3.77859 8.79565C3.91317 8.50176 4.08267 8.38026 4.37013 8.37949Z"
            fill="black"/>
        <path
            d="M4.37013 5.39097C4.39322 5.39085 4.41631 5.39074 4.4401 5.39063C4.51784 5.3903 4.59559 5.39025 4.67334 5.39019C4.72893 5.39002 4.78452 5.38983 4.84012 5.38963C4.99144 5.38914 5.14276 5.3889 5.29408 5.38873C5.3886 5.38862 5.48311 5.38847 5.57762 5.3883C5.87324 5.38779 6.16886 5.38743 6.46448 5.38729C6.80588 5.38712 7.14728 5.38647 7.48867 5.38538C7.75244 5.38458 8.0162 5.3842 8.27997 5.38415C8.43755 5.38411 8.59513 5.38389 8.75272 5.38322C8.901 5.38261 9.04928 5.38253 9.19756 5.38285C9.25195 5.38288 9.30634 5.38272 9.36073 5.38235C9.43507 5.38188 9.50939 5.38209 9.58373 5.38248C9.64609 5.3824 9.64609 5.3824 9.70972 5.38232C9.85702 5.40039 9.97075 5.45254 10.0797 5.56563C10.2203 5.77027 10.2468 5.8888 10.2259 6.14333C10.1646 6.34032 10.0712 6.43459 9.92369 6.55425C9.80812 6.5971 9.7187 6.59663 9.59675 6.5971C9.57363 6.59724 9.55051 6.59738 9.52669 6.59752C9.44905 6.59793 9.37141 6.59807 9.29377 6.59822C9.23817 6.59845 9.18257 6.5987 9.12697 6.59896C8.94424 6.59974 8.76152 6.60013 8.57879 6.6005C8.5159 6.60066 8.453 6.60081 8.39011 6.60097C8.09467 6.60168 7.79923 6.60221 7.50378 6.60252C7.16267 6.60289 6.82156 6.60387 6.48045 6.60538C6.21683 6.6065 5.95321 6.60706 5.68958 6.60718C5.53211 6.60727 5.37464 6.6076 5.21717 6.60854C5.06902 6.60941 4.92089 6.60957 4.77274 6.60919C4.7184 6.60917 4.66406 6.60941 4.60973 6.60992C4.53546 6.61058 4.46123 6.61031 4.38696 6.60982C4.32466 6.60996 4.32466 6.60996 4.2611 6.61009C4.08732 6.58169 3.98449 6.48903 3.86883 6.34645C3.76325 6.17679 3.75641 6.00722 3.77859 5.80713C3.91317 5.51324 4.08267 5.39174 4.37013 5.39097Z"
            fill="black"/>
    </svg>
}

export {
    SortIcon, FilterIcon, BookIcon
}
