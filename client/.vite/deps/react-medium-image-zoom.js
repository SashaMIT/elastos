"use client";
import {
  require_react_dom
} from "./chunk-YU2QM6W5.js";
import {
  require_react
} from "./chunk-A5RJMWOC.js";
import {
  __toESM
} from "./chunk-RDKGUBC5.js";

// node_modules/react-medium-image-zoom/dist/index.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function ICompress() {
  return import_react.default.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": true, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    import_react.default.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function IEnlarge() {
  return import_react.default.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": true, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    import_react.default.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
var testElType = (type, el) => type === el?.tagName?.toUpperCase?.();
var testDiv = (el) => testElType("DIV", el) || testElType("SPAN", el);
var testImg = (el) => testElType("IMG", el);
var testImgLoaded = (el) => el.complete && el.naturalHeight !== 0;
var testSvg = (el) => testElType("SVG", el);
var getScaleToWindow = ({ height, offset, width }) => {
  return Math.min((window.innerWidth - offset * 2) / width, (window.innerHeight - offset * 2) / height);
};
var getScaleToWindowMax = ({ containerHeight, containerWidth, offset, targetHeight, targetWidth }) => {
  const scale = getScaleToWindow({
    height: targetHeight,
    offset,
    width: targetWidth
  });
  const ratio = targetWidth > targetHeight ? targetWidth / containerWidth : targetHeight / containerHeight;
  return scale > 1 ? ratio : scale * ratio;
};
var getScale = ({ containerHeight, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  if (!containerHeight || !containerWidth) {
    return 1;
  }
  return !hasScalableSrc && targetHeight && targetWidth ? getScaleToWindowMax({
    containerHeight,
    containerWidth,
    offset,
    targetHeight,
    targetWidth
  }) : getScaleToWindow({
    height: containerHeight,
    offset,
    width: containerWidth
  });
};
var URL_REGEX = /url(?:\(['"]?)(.*?)(?:['"]?\))/;
var getImgSrc = (imgEl) => {
  if (imgEl) {
    if (testImg(imgEl)) {
      return imgEl.currentSrc;
    } else if (testDiv(imgEl)) {
      const bgImg = window.getComputedStyle(imgEl).backgroundImage;
      if (bgImg) {
        return URL_REGEX.exec(bgImg)?.[1];
      }
    }
  }
};
var getImgAlt = (imgEl) => {
  if (imgEl) {
    if (testImg(imgEl)) {
      return imgEl.alt ?? void 0;
    } else {
      return imgEl.getAttribute("aria-label") ?? void 0;
    }
  }
};
var getImgRegularStyle = ({ containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  const scale = getScale({
    containerHeight,
    containerWidth,
    hasScalableSrc,
    offset,
    targetHeight,
    targetWidth
  });
  return {
    top: containerTop,
    left: containerLeft,
    width: containerWidth * scale,
    height: containerHeight * scale,
    transform: `translate(0,0) scale(${1 / scale})`
  };
};
var parsePosition = ({ position, relativeNum }) => {
  const positionNum = parseFloat(position);
  return position.endsWith("%") ? relativeNum * positionNum / 100 : positionNum;
};
var getImgObjectFitStyle = ({ containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, objectFit, objectPosition, offset, targetHeight, targetWidth }) => {
  if (objectFit === "scale-down") {
    if (targetWidth <= containerWidth && targetHeight <= containerHeight) {
      objectFit = "none";
    } else {
      objectFit = "contain";
    }
  }
  if (objectFit === "cover" || objectFit === "contain") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = objectFit === "cover" ? Math.max(widthRatio, heightRatio) : Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = objectPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (objectFit === "none") {
    const [posLeft = "50%", posTop = "50%"] = objectPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight });
    const scale = getScale({
      containerHeight: targetHeight,
      containerWidth: targetWidth,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * scale,
      height: targetHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (objectFit === "fill") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = Math.max(widthRatio, heightRatio);
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      width: containerWidth * scale,
      height: containerHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else {
    return {};
  }
};
var getDivImgStyle = ({ backgroundPosition, backgroundSize, containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  if (backgroundSize === "cover" || backgroundSize === "contain") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = backgroundSize === "cover" ? Math.max(widthRatio, heightRatio) : Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (backgroundSize === "auto") {
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight });
    const scale = getScale({
      containerHeight: targetHeight,
      containerWidth: targetWidth,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * scale,
      height: targetHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else {
    const [sizeW = "50%", sizeH = "50%"] = backgroundSize.split(" ");
    const sizeWidth = parsePosition({ position: sizeW, relativeNum: containerWidth });
    const sizeHeight = parsePosition({ position: sizeH, relativeNum: containerHeight });
    const widthRatio = sizeWidth / targetWidth;
    const heightRatio = sizeHeight / targetHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  }
};
var SRC_SVG_REGEX = /\.svg$/i;
var getStyleModalImg = ({ hasZoomImg, imgSrc, isSvg, isZoomed, loadedImgEl, offset, shouldRefresh, targetEl }) => {
  const hasScalableSrc = isSvg || imgSrc?.slice?.(0, 18) === "data:image/svg+xml" || hasZoomImg || !!(imgSrc && SRC_SVG_REGEX.test(imgSrc));
  const imgRect = targetEl.getBoundingClientRect();
  const targetElComputedStyle = window.getComputedStyle(targetEl);
  const isDivImg = loadedImgEl != null && testDiv(targetEl);
  const isImgObjectFit = loadedImgEl != null && !isDivImg;
  const styleImgRegular = getImgRegularStyle({
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    offset,
    targetHeight: loadedImgEl?.naturalHeight || imgRect.height,
    targetWidth: loadedImgEl?.naturalWidth || imgRect.width
  });
  const styleImgObjectFit = isImgObjectFit ? getImgObjectFitStyle({
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    objectFit: targetElComputedStyle.objectFit,
    objectPosition: targetElComputedStyle.objectPosition,
    offset,
    targetHeight: loadedImgEl?.naturalHeight || imgRect.height,
    targetWidth: loadedImgEl?.naturalWidth || imgRect.width
  }) : void 0;
  const styleDivImg = isDivImg ? getDivImgStyle({
    backgroundPosition: targetElComputedStyle.backgroundPosition,
    backgroundSize: targetElComputedStyle.backgroundSize,
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    offset,
    targetHeight: loadedImgEl?.naturalHeight || imgRect.height,
    targetWidth: loadedImgEl?.naturalWidth || imgRect.width
  }) : void 0;
  const style = Object.assign({}, styleImgRegular, styleImgObjectFit, styleDivImg);
  if (isZoomed) {
    const viewportX = window.innerWidth / 2;
    const viewportY = window.innerHeight / 2;
    const childCenterX = parseFloat(String(style.left || 0)) + parseFloat(String(style.width || 0)) / 2;
    const childCenterY = parseFloat(String(style.top || 0)) + parseFloat(String(style.height || 0)) / 2;
    const translateX = viewportX - childCenterX;
    const translateY = viewportY - childCenterY;
    if (shouldRefresh) {
      style.transitionDuration = "0.01ms";
    }
    style.transform = `translate(${translateX}px,${translateY}px) scale(1)`;
  }
  return style;
};
var getStyleGhost = (imgEl) => {
  if (!imgEl) {
    return {};
  }
  if (testSvg(imgEl)) {
    const parentEl = imgEl.parentElement;
    const rect = imgEl.getBoundingClientRect();
    if (parentEl) {
      const parentRect = parentEl.getBoundingClientRect();
      return {
        height: rect.height,
        left: parentRect.left - rect.left,
        top: parentRect.top - rect.top,
        width: rect.width
      };
    } else {
      return {
        height: rect.height,
        left: rect.left,
        width: rect.width,
        top: rect.top
      };
    }
  } else {
    return {
      height: imgEl.offsetHeight,
      left: imgEl.offsetLeft,
      width: imgEl.offsetWidth,
      top: imgEl.offsetTop
    };
  }
};
var adjustSvgIDs = (svgEl) => {
  const newIdSuffix = "-zoom";
  const attrs = [
    "clip-path",
    "fill",
    "mask",
    "marker-start",
    "marker-mid",
    "marker-end"
  ];
  const idMap = /* @__PURE__ */ new Map();
  if (svgEl.hasAttribute("id")) {
    const oldId = svgEl.id;
    const newId = oldId + newIdSuffix;
    idMap.set(oldId, newId);
    svgEl.id = newId;
  }
  svgEl.querySelectorAll("[id]").forEach((el) => {
    const oldId = el.id;
    const newId = oldId + newIdSuffix;
    idMap.set(oldId, newId);
    el.id = newId;
  });
  idMap.forEach((newId, oldId) => {
    const urlOldID = `url(#${oldId})`;
    const urlNewID = `url(#${newId})`;
    const attrsQuery = attrs.map((attr) => `[${attr}="${urlOldID}"]`).join(", ");
    svgEl.querySelectorAll(attrsQuery).forEach((usedEl) => {
      attrs.forEach((attr) => {
        if (usedEl.getAttribute(attr) === urlOldID) {
          usedEl.setAttribute(attr, urlNewID);
        }
      });
    });
  });
  svgEl.querySelectorAll("style").forEach((styleEl) => {
    idMap.forEach((newId, oldId) => {
      if (styleEl.textContent) {
        styleEl.textContent = styleEl.textContent.replaceAll(`#${oldId}`, `#${newId}`);
      }
    });
  });
};
var IMAGE_QUERY = ["img", "svg", '[role="img"]', "[data-zoom]"].map((x) => `${x}:not([aria-hidden="true"])`).join(",");
var defaultBodyAttrs = {
  overflow: "",
  width: ""
};
function Controlled(props) {
  return import_react.default.createElement(ControlledBase, { ...props });
}
var ControlledBase = class extends import_react.default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      id: "",
      isZoomImgLoaded: false,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: false,
      styleGhost: {}
    };
    this.refContent = import_react.default.createRef();
    this.refDialog = import_react.default.createRef();
    this.refModalContent = import_react.default.createRef();
    this.refModalImg = import_react.default.createRef();
    this.refWrap = import_react.default.createRef();
    this.imgEl = null;
    this.isScaling = false;
    this.prevBodyAttrs = defaultBodyAttrs;
    this.styleModalImg = {};
    this.handleModalStateChange = (prevModalState) => {
      const { modalState } = this.state;
      if (prevModalState !== "LOADING" && modalState === "LOADING") {
        this.loadZoomImg();
        window.addEventListener("resize", this.handleResize, { passive: true });
        window.addEventListener("touchstart", this.handleTouchStart, { passive: true });
        window.addEventListener("touchmove", this.handleTouchMove, { passive: true });
        window.addEventListener("touchend", this.handleTouchEnd, { passive: true });
        window.addEventListener("touchcancel", this.handleTouchCancel, { passive: true });
        document.addEventListener("keydown", this.handleKeyDown, true);
      } else if (prevModalState !== "LOADED" && modalState === "LOADED") {
        window.addEventListener("wheel", this.handleWheel, { passive: true });
      } else if (prevModalState !== "UNLOADING" && modalState === "UNLOADING") {
        this.ensureImgTransitionEnd();
        window.removeEventListener("wheel", this.handleWheel);
        window.removeEventListener("touchstart", this.handleTouchStart);
        window.removeEventListener("touchmove", this.handleTouchMove);
        window.removeEventListener("touchend", this.handleTouchEnd);
        window.removeEventListener("touchcancel", this.handleTouchCancel);
        document.removeEventListener("keydown", this.handleKeyDown, true);
      } else if (prevModalState !== "UNLOADED" && modalState === "UNLOADED") {
        this.bodyScrollEnable();
        window.removeEventListener("resize", this.handleResize);
        this.refModalImg.current?.removeEventListener?.("transitionend", this.handleImgTransitionEnd);
        this.refDialog.current?.close?.();
      }
    };
    this.getDialogContainer = () => {
      let el = document.querySelector("[data-rmiz-portal]");
      if (el == null) {
        el = document.createElement("div");
        el.setAttribute("data-rmiz-portal", "");
        document.body.appendChild(el);
      }
      return el;
    };
    this.setId = () => {
      const gen4 = () => Math.random().toString(16).slice(-4);
      this.setState({ id: gen4() + gen4() + gen4() });
    };
    this.setAndTrackImg = () => {
      const contentEl = this.refContent.current;
      if (!contentEl)
        return;
      this.imgEl = contentEl.querySelector(IMAGE_QUERY);
      if (this.imgEl) {
        this.contentNotFoundChangeObserver?.disconnect?.();
        this.imgEl.addEventListener("load", this.handleImgLoad);
        this.imgEl.addEventListener("click", this.handleZoom);
        if (!this.state.loadedImgEl) {
          this.handleImgLoad();
        }
        this.imgElResizeObserver = new ResizeObserver((entries) => {
          const entry = entries[0];
          if (entry?.target) {
            this.imgEl = entry.target;
            this.setState({ styleGhost: getStyleGhost(this.imgEl) });
          }
        });
        this.imgElResizeObserver.observe(this.imgEl);
        if (!this.contentChangeObserver) {
          this.contentChangeObserver = new MutationObserver(() => {
            this.setState({ styleGhost: getStyleGhost(this.imgEl) });
          });
          this.contentChangeObserver.observe(contentEl, { attributes: true, childList: true, subtree: true });
        }
      } else if (!this.contentNotFoundChangeObserver) {
        this.contentNotFoundChangeObserver = new MutationObserver(this.setAndTrackImg);
        this.contentNotFoundChangeObserver.observe(contentEl, { childList: true, subtree: true });
      }
    };
    this.handleIfZoomChanged = (prevIsZoomed) => {
      const { isZoomed } = this.props;
      if (!prevIsZoomed && isZoomed) {
        this.zoom();
      } else if (prevIsZoomed && !isZoomed) {
        this.unzoom();
      }
    };
    this.handleImgLoad = () => {
      const imgSrc = getImgSrc(this.imgEl);
      if (!imgSrc)
        return;
      const img = new Image();
      if (testImg(this.imgEl)) {
        img.sizes = this.imgEl.sizes;
        img.srcset = this.imgEl.srcset;
        img.crossOrigin = this.imgEl.crossOrigin;
      }
      img.src = imgSrc;
      const setLoaded = () => {
        this.setState({
          loadedImgEl: img,
          styleGhost: getStyleGhost(this.imgEl)
        });
      };
      img.decode().then(setLoaded).catch(() => {
        if (testImgLoaded(img)) {
          setLoaded();
          return;
        }
        img.onload = setLoaded;
      });
    };
    this.handleZoom = () => {
      if (this.hasImage()) {
        this.props.onZoomChange?.(true);
      }
    };
    this.handleUnzoom = () => {
      this.props.onZoomChange?.(false);
    };
    this.handleBtnUnzoomClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.handleUnzoom();
    };
    this.handleDialogCancel = (e) => {
      e.preventDefault();
    };
    this.handleDialogClick = (e) => {
      if (e.target === this.refModalContent.current || e.target === this.refModalImg.current) {
        e.stopPropagation();
        this.handleUnzoom();
      }
    };
    this.handleDialogClose = (e) => {
      e.stopPropagation();
      this.handleUnzoom();
    };
    this.handleKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.handleUnzoom();
      }
    };
    this.handleWheel = (e) => {
      if (e.ctrlKey)
        return;
      e.stopPropagation();
      queueMicrotask(() => {
        this.handleUnzoom();
      });
    };
    this.handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        this.isScaling = true;
        return;
      }
      if (e.changedTouches.length === 1 && e.changedTouches[0]) {
        this.touchYStart = e.changedTouches[0].screenY;
      }
    };
    this.handleTouchMove = (e) => {
      const browserScale = window.visualViewport?.scale ?? 1;
      if (this.props.canSwipeToUnzoom && !this.isScaling && browserScale <= 1 && this.touchYStart != null && e.changedTouches[0]) {
        this.touchYEnd = e.changedTouches[0].screenY;
        const max = Math.max(this.touchYStart, this.touchYEnd);
        const min = Math.min(this.touchYStart, this.touchYEnd);
        const delta = Math.abs(max - min);
        if (delta > this.props.swipeToUnzoomThreshold) {
          this.touchYStart = void 0;
          this.touchYEnd = void 0;
          this.handleUnzoom();
        }
      }
    };
    this.handleTouchEnd = () => {
      this.isScaling = false;
      this.touchYStart = void 0;
      this.touchYEnd = void 0;
    };
    this.handleTouchCancel = () => {
      this.isScaling = false;
      this.touchYStart = void 0;
      this.touchYEnd = void 0;
    };
    this.handleResize = () => {
      this.setState({ shouldRefresh: true });
    };
    this.hasImage = () => {
      return this.imgEl && (this.state.loadedImgEl || testSvg(this.imgEl)) && window.getComputedStyle(this.imgEl).display !== "none";
    };
    this.zoom = () => {
      this.bodyScrollDisable();
      this.refDialog.current?.showModal?.();
      this.refModalImg.current?.addEventListener?.("transitionend", this.handleImgTransitionEnd);
      this.setState({ modalState: "LOADING" });
    };
    this.unzoom = () => {
      this.setState({ modalState: "UNLOADING" });
    };
    this.handleImgTransitionEnd = () => {
      clearTimeout(this.timeoutTransitionEnd);
      if (this.state.modalState === "LOADING") {
        this.setState({ modalState: "LOADED" });
      } else if (this.state.modalState === "UNLOADING") {
        this.setState({ shouldRefresh: false, modalState: "UNLOADED" });
      }
    };
    this.ensureImgTransitionEnd = () => {
      if (this.refModalImg.current) {
        const td = window.getComputedStyle(this.refModalImg.current).transitionDuration;
        const tdFloat = parseFloat(td);
        if (tdFloat) {
          const tdMs = tdFloat * (td.endsWith("ms") ? 1 : 1e3) + 50;
          this.timeoutTransitionEnd = setTimeout(this.handleImgTransitionEnd, tdMs);
        }
      }
    };
    this.bodyScrollDisable = () => {
      this.prevBodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width
      };
      const clientWidth = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `${clientWidth}px`;
    };
    this.bodyScrollEnable = () => {
      document.body.style.width = this.prevBodyAttrs.width;
      document.body.style.overflow = this.prevBodyAttrs.overflow;
      this.prevBodyAttrs = defaultBodyAttrs;
    };
    this.loadZoomImg = () => {
      const { props: { zoomImg } } = this;
      const zoomImgSrc = zoomImg?.src;
      if (zoomImgSrc) {
        const img = new Image();
        img.sizes = zoomImg?.sizes ?? "";
        img.srcset = zoomImg?.srcSet ?? "";
        img.crossOrigin = zoomImg?.crossOrigin ?? void 0;
        img.src = zoomImgSrc;
        const setLoaded = () => {
          this.setState({ isZoomImgLoaded: true });
        };
        img.decode().then(setLoaded).catch(() => {
          if (testImgLoaded(img)) {
            setLoaded();
            return;
          }
          img.onload = setLoaded;
        });
      }
    };
    this.UNSAFE_handleSvg = () => {
      const { imgEl, refModalImg, styleModalImg } = this;
      if (testSvg(imgEl)) {
        const svgEl = imgEl.cloneNode(true);
        adjustSvgIDs(svgEl);
        svgEl.style.width = `${styleModalImg.width || 0}px`;
        svgEl.style.height = `${styleModalImg.height || 0}px`;
        svgEl.addEventListener("click", this.handleUnzoom);
        refModalImg.current?.firstChild?.remove?.();
        refModalImg.current?.appendChild?.(svgEl);
      }
    };
  }
  render() {
    const { handleBtnUnzoomClick, handleDialogCancel, handleDialogClick, handleDialogClose, handleUnzoom, handleZoom, imgEl, props: { a11yNameButtonUnzoom, a11yNameButtonZoom, children, classDialog, IconUnzoom, IconZoom, isZoomed, wrapElement: WrapElement, ZoomContent, zoomImg, zoomMargin }, refContent, refDialog, refModalContent, refModalImg, refWrap, state: { id, isZoomImgLoaded, loadedImgEl, modalState, shouldRefresh, styleGhost } } = this;
    const idModal = `rmiz-modal-${id}`;
    const idModalImg = `rmiz-modal-img-${id}`;
    const isDiv = testDiv(imgEl);
    const isImg = testImg(imgEl);
    const isSvg = testSvg(imgEl);
    const imgAlt = getImgAlt(imgEl);
    const imgSrc = getImgSrc(imgEl);
    const imgSizes = isImg ? imgEl.sizes : void 0;
    const imgSrcSet = isImg ? imgEl.srcset : void 0;
    const imgCrossOrigin = isImg ? imgEl.crossOrigin : void 0;
    const hasZoomImg = !!zoomImg?.src;
    const hasImage = this.hasImage();
    const labelBtnZoom = imgAlt ? `${a11yNameButtonZoom}: ${imgAlt}` : a11yNameButtonZoom;
    const isModalActive = modalState === "LOADING" || modalState === "LOADED";
    const dataContentState = hasImage ? "found" : "not-found";
    const dataOverlayState = modalState === "UNLOADED" || modalState === "UNLOADING" ? "hidden" : "visible";
    const styleContent = {
      visibility: modalState === "UNLOADED" ? "visible" : "hidden"
    };
    this.styleModalImg = hasImage ? getStyleModalImg({
      hasZoomImg,
      imgSrc,
      isSvg,
      isZoomed: isZoomed && isModalActive,
      loadedImgEl,
      offset: zoomMargin,
      shouldRefresh,
      targetEl: imgEl
    }) : {};
    let modalContent = null;
    if (hasImage) {
      const modalImg = isImg || isDiv ? import_react.default.createElement("img", { alt: imgAlt, crossOrigin: imgCrossOrigin, sizes: imgSizes, src: imgSrc, srcSet: imgSrcSet, ...isZoomImgLoaded && modalState === "LOADED" ? zoomImg : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: idModalImg, ref: refModalImg, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : isSvg ? import_react.default.createElement("div", { "data-rmiz-modal-img": true, ref: refModalImg, style: this.styleModalImg }) : null;
      const modalBtnUnzoom = import_react.default.createElement(
        "button",
        { "aria-label": a11yNameButtonUnzoom, "data-rmiz-btn-unzoom": "", onClick: handleBtnUnzoomClick, type: "button" },
        import_react.default.createElement(IconUnzoom, null)
      );
      modalContent = ZoomContent ? import_react.default.createElement(ZoomContent, { buttonUnzoom: modalBtnUnzoom, modalState, img: modalImg, onUnzoom: handleUnzoom }) : import_react.default.createElement(
        import_react.default.Fragment,
        null,
        modalImg,
        modalBtnUnzoom
      );
    }
    return import_react.default.createElement(
      WrapElement,
      { "aria-owns": idModal, "data-rmiz": "", ref: refWrap },
      import_react.default.createElement(WrapElement, { "data-rmiz-content": dataContentState, ref: refContent, style: styleContent }, children),
      hasImage && import_react.default.createElement(
        WrapElement,
        { "data-rmiz-ghost": "", style: styleGhost },
        import_react.default.createElement(
          "button",
          { "aria-label": labelBtnZoom, "data-rmiz-btn-zoom": "", onClick: handleZoom, type: "button" },
          import_react.default.createElement(IconZoom, null)
        )
      ),
      hasImage && import_react_dom.default.createPortal(import_react.default.createElement(
        "dialog",
        { "aria-labelledby": idModalImg, "aria-modal": "true", className: classDialog, "data-rmiz-modal": "", id: idModal, onClick: handleDialogClick, onClose: handleDialogClose, onCancel: handleDialogCancel, ref: refDialog, role: "dialog" },
        import_react.default.createElement("div", { "data-rmiz-modal-overlay": dataOverlayState }),
        import_react.default.createElement("div", { "data-rmiz-modal-content": "", ref: refModalContent }, modalContent)
      ), this.getDialogContainer())
    );
  }
  componentDidMount() {
    this.setId();
    this.setAndTrackImg();
    this.handleImgLoad();
    this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    if (this.state.modalState !== "UNLOADED") {
      this.bodyScrollEnable();
    }
    this.contentChangeObserver?.disconnect?.();
    this.contentNotFoundChangeObserver?.disconnect?.();
    this.imgElResizeObserver?.disconnect?.();
    this.imgEl?.removeEventListener?.("load", this.handleImgLoad);
    this.imgEl?.removeEventListener?.("click", this.handleZoom);
    this.refModalImg.current?.removeEventListener?.("transitionend", this.handleImgTransitionEnd);
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
    window.removeEventListener("touchcancel", this.handleTouchCancel);
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.handleKeyDown, true);
  }
  componentDidUpdate(prevProps, prevState) {
    this.handleModalStateChange(prevState.modalState);
    this.UNSAFE_handleSvg();
    this.handleIfZoomChanged(prevProps.isZoomed);
  }
};
ControlledBase.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  canSwipeToUnzoom: true,
  IconUnzoom: ICompress,
  IconZoom: IEnlarge,
  swipeToUnzoomThreshold: 10,
  wrapElement: "div",
  zoomMargin: 0
};
function Uncontrolled(props) {
  const [isZoomed, setIsZoomed] = import_react.default.useState(false);
  return import_react.default.createElement(Controlled, { ...props, isZoomed, onZoomChange: setIsZoomed });
}
export {
  Controlled,
  Uncontrolled as default
};
//# sourceMappingURL=react-medium-image-zoom.js.map
