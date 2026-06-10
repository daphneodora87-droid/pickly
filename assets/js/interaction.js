/* ==========================================================
   메인 페이지 인터랙션
   1. 스크롤 등장 효과 (fade-up, 순차 등장)
   2. 인기활동 숫자 카운트업
   3. Stories 카드 3D 틸트
   ========================================================== */
document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. 스크롤 등장 효과 ---------- */
    const revealTargets = [
        ...document.querySelectorAll('.section_01 .board'),
        document.querySelector('.section_02 h3'),
        ...document.querySelectorAll('.section_02 .rec_list ul li'),
        document.querySelector('.list_setting'),
        document.querySelector('.review_tit'),
        ...document.querySelectorAll('.review_list .rlist_box')
    ].filter(Boolean);

    revealTargets.forEach(el => el.classList.add('reveal'));

    const revealIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;

            // 같은 부모 안의 형제들끼리 0.12초 간격으로 순차 등장
            const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
            const idx = siblings.indexOf(el);
            el.style.transitionDelay = (idx > 0 ? idx * 0.12 : 0) + 's';
            el.classList.add('show');
            revealIO.unobserve(el);

            // 등장이 끝나면 reveal 관련 스타일 제거 → 호버/틸트 효과와 충돌 방지
            const cleanup = () => {
                el.classList.remove('reveal', 'show');
                el.style.transitionDelay = '';
            };
            el.addEventListener('transitionend', cleanup, { once: true });
            setTimeout(cleanup, 2200); // transitionend 미발생 대비
        });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => revealIO.observe(el));


    /* ---------- 2. 인기활동 숫자 카운트업 ---------- */
    function animateCount(link) {
        // <img> 뒤의 숫자 텍스트 노드를 찾음
        const textNode = [...link.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
        if (!textNode) return;
        const target = parseInt(textNode.textContent.replace(/[^0-9]/g, ''), 10);
        if (isNaN(target)) return;

        const duration = 1500;
        const start = performance.now();
        textNode.textContent = '0';

        function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out
            textNode.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    const bestBoard = document.querySelector('.board.best');
    if (bestBoard) {
        const countIO = new IntersectionObserver((entries, obs) => {
            if (entries[0].isIntersecting) {
                bestBoard.querySelectorAll('ul li p a').forEach(animateCount);
                obs.disconnect();
            }
        }, { threshold: 0.4 });
        countIO.observe(bestBoard);
    }


    /* ---------- 3. Stories 카드 3D 틸트 ---------- */
    document.querySelectorAll('.review_list .rlist_box').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;  // -0.5 ~ 0.5
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transition = 'transform 0.1s ease-out';
            card.style.transform =
                `perspective(800px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.4s ease';
            card.style.transform = '';
        });
    });

});
