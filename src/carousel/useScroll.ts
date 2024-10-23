import { useCallback, useEffect, useRef } from "react";

export const useScroll = () => {

    const ref = useRef<HTMLUListElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const focused = useRef<number>(0);

    const setIndicatorFocus = useCallback((indicator: HTMLDivElement | null) => {
        if (indicator) {
            indicator.childNodes.forEach(node => {
                const el = node as HTMLDivElement;
                el.classList.remove("active");
            });

            indicator.children[focused.current].classList.add("active");
        }
    }, []);

    const scrollLeft = useCallback(() => {
        const ctn = ref.current;
        if (ctn) {
            const list = ctn.children;
            if (focused.current > 0) {
                focused.current -= 1;
                list[focused.current].scrollIntoView({ behavior: "smooth" });
            }
            else {
                list[list.length - 1].scrollIntoView({ behavior: "smooth" });
                focused.current = list.length - 1;
            }

            const indicator = indicatorRef.current;
            if (indicator) {
                setIndicatorFocus(indicator);
            }
        }
    }, [focused, setIndicatorFocus]);

    const scrollRight = useCallback(() => {
        const ctn = ref.current;
        if (ctn) {
            const list = ctn.children;
            if (focused.current < list.length - 1) {
                focused.current += 1;
                list[focused.current].scrollIntoView({ behavior: "smooth" });
            } else {
                list[0].scrollIntoView({ behavior: "smooth" });
                focused.current = 0;
            }
        }

        const indicator = indicatorRef.current;
        if (indicator) {
            setIndicatorFocus(indicator);
        }
    }, [focused, setIndicatorFocus]);

    useEffect(() => {
        const ctn = ref.current;
        const indicator = indicatorRef.current;

        const resetView = () => {
            if (ctn) {
                const list = ctn.children;
                list[0].scrollIntoView({ behavior: "instant" });
            }
        }

        resetView();

        const onResize = () => {
            const ctn = ref.current;
            if (ctn) {
                const list = ctn.children;
                list[focused.current].scrollIntoView({ behavior: "instant" });
            }
        };

        window.addEventListener("resize", onResize);

        if (ctn) {
            ctn.childNodes.forEach(() => {
                const el = document.createElement("div");
                el.className = "carousel-scroll-indicator__step";
                if (indicator) {
                    indicator.append(el);
                    setIndicatorFocus(indicator);
                }
            });
            
            if (indicator) {
                const list = ctn.children;
                indicator.childNodes.forEach((child, index) => {
                    const el = child as HTMLDivElement;
                    el.addEventListener("click", () => {
                        list[index].scrollIntoView({ behavior: "smooth" });
                        focused.current = index;
                        setIndicatorFocus(indicator);
                    });
                });
            }
        }


        return () => {
            if (indicator) {
                indicator.innerHTML = "";
            }
            window.removeEventListener("resize", onResize);
        }
    }, [focused, setIndicatorFocus]);

    return {
        scrollLeft,
        scrollRight,
        ref,
        indicatorRef,
    };
};