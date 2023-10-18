window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["bgBorder","bgDisable","bgEnable","bgNoise","bgDown","labelTop","iconDisplay_","iconContainer","labelDisplay","groupDisplay","groupContent","labelCorner","groupCorner","labelNum","groupNum","bgMask"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.bgBorder_i(),this.groupContent_i(),this.groupCorner_i(),this.groupNum_i(),this.bgMask_i()];
		this.bgDisable_i();
		
		this.bgEnable_i();
		
		this.bgDown_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("bgEnable","groupContent",2,"bgNoise")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("bgEnable","groupContent",2,"bgNoise"),
					new eui.AddItems("bgDown","groupContent",2,"labelTop")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("bgDisable","groupContent",0,"")
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.bgBorder_i = function () {
		var t = new eui.Image();
		this.bgBorder = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scale9Grid = new egret.Rectangle(15,15,20,20);
		t.source = "adv_bg_png";
		t.visible = false;
		return t;
	};
	_proto.groupContent_i = function () {
		var t = new eui.Group();
		this.groupContent = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bgNoise_i(),this.labelTop_i(),this.groupDisplay_i()];
		return t;
	};
	_proto.bgDisable_i = function () {
		var t = new eui.Image();
		this.bgDisable = t;
		t.percentHeight = 100;
		t.source = "button_bg_grey_png";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.bgEnable_i = function () {
		var t = new eui.Image();
		this.bgEnable = t;
		t.percentHeight = 100;
		t.source = "button_bg_green_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.bgNoise_i = function () {
		var t = new eui.Image();
		this.bgNoise = t;
		t.alpha = 0.5;
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.source = "button_noise_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bgDown_i = function () {
		var t = new eui.Image();
		this.bgDown = t;
		t.alpha = 0.3;
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.source = "bg_black_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelTop_i = function () {
		var t = new eui.Label();
		this.labelTop = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = -20;
		return t;
	};
	_proto.groupDisplay_i = function () {
		var t = new eui.Group();
		this.groupDisplay = t;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconContainer_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconContainer_i = function () {
		var t = new eui.Group();
		this.iconContainer = t;
		t.height = 46;
		t.includeInLayout = false;
		t.visible = false;
		t.width = 46;
		t.x = 29;
		t.y = 19;
		t.elementsContent = [this.iconDisplay__i()];
		return t;
	};
	_proto.iconDisplay__i = function () {
		var t = new eui.Image();
		this.iconDisplay_ = t;
		t.fillMode = "scale";
		t.height = 46;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 46;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.left = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupCorner_i = function () {
		var t = new eui.Group();
		this.groupCorner = t;
		t.height = 74;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 74;
		t.elementsContent = [this._Image1_i(),this.labelCorner_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 74;
		t.left = 0;
		t.right = 0;
		t.source = "icon_ribbon_png";
		t.top = 0;
		t.width = 74;
		return t;
	};
	_proto.labelCorner_i = function () {
		var t = new eui.Label();
		this.labelCorner = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 28;
		t.left = -18;
		t.rotation = -45;
		t.size = 28;
		t.text = "";
		t.textAlign = "center";
		t.top = -18;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.groupNum_i = function () {
		var t = new eui.Group();
		this.groupNum = t;
		t.height = 56;
		t.right = 20;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 56;
		t.elementsContent = [this._Image2_i(),this.labelNum_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.source = "notice_bob_png";
		t.top = 0;
		return t;
	};
	_proto.labelNum_i = function () {
		var t = new eui.Label();
		this.labelNum = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 38;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bgMask_i = function () {
		var t = new eui.Image();
		this.bgMask = t;
		t.alpha = 0.5;
		t.fillMode = "repeat";
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.source = "bg_black_png";
		t.visible = false;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 20;
		this.minWidth = 18;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.source = "";
		t.width = 920;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 64;
		t.source = "hg_btn_normal_png";
		t.verticalCenter = 0;
		t.width = 44;
		t.y = 10;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Microsoft YaHei";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 36;
		this.minWidth = 300;
		this.elementsContent = [this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetX = 144.67;
		t.anchorOffsetY = 28.04;
		t.height = 53;
		t.left = "5";
		t.right = "5";
		t.size = 48;
		t.textColor = 0x000000;
		t.verticalCenter = "-0.5";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.left = 10;
		t.right = 10;
		t.size = 36;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 1;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CashWalletComponentSkin.exml'] = window.CashWalletComponentSkin = (function (_super) {
	__extends(CashWalletComponentSkin, _super);
	function CashWalletComponentSkin() {
		_super.call(this);
		this.skinParts = ["_balanceNumGroup","money_icon"];
		
		this.height = 121;
		this.width = 350;
		this.elementsContent = [this._Image1_i(),this._balanceNumGroup_i(),this._Image2_i(),this.money_icon_i()];
	}
	var _proto = CashWalletComponentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "bg_xz";
		t.scale9Grid = new egret.Rectangle(45,35,9,0);
		t.source = "bg_ziyuandi_png";
		t.width = 261;
		t.x = 87;
		t.y = 30;
		return t;
	};
	_proto._balanceNumGroup_i = function () {
		var t = new eui.Group();
		this._balanceNumGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 81;
		t.verticalCenter = 13.5;
		t.width = 160;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_jinbi_png";
		t.verticalCenter = 5.5;
		t.x = 40;
		return t;
	};
	_proto.money_icon_i = function () {
		var t = new eui.Image();
		this.money_icon = t;
		t.horizontalCenter = -19;
		t.scaleX = 1.2;
		t.scaleY = 1;
		t.source = "renminbi_png";
		t.verticalCenter = 5;
		return t;
	};
	return CashWalletComponentSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ClearStreakRewardWindowSkin.exml'] = window.ClearStreakRewardWindowSkin = (function (_super) {
	__extends(ClearStreakRewardWindowSkin, _super);
	function ClearStreakRewardWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","skip_btn","start_btn_text","ok_btn","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = ClearStreakRewardWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this.skip_btn_i(),this.ok_btn_i()];
		return t;
	};
	_proto.skip_btn_i = function () {
		var t = new eui.Group();
		this.skip_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.ok_btn_i = function () {
		var t = new eui.Group();
		this.ok_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.bottom = 272;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.elementsContent = [this._Image1_i(),this.start_btn_text_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.source = "btn_luchang_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.start_btn_text_i = function () {
		var t = new eui.Label();
		this.start_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.text = "好的";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return ClearStreakRewardWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ClearStreakWindowSkin.exml'] = window.ClearStreakWindowSkin = (function (_super) {
	__extends(ClearStreakWindowSkin, _super);
	function ClearStreakWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","no_reward_group","reward_group","next_reward_status","next_reward_image","text_group","max_level_text_group","huangguan_image","start_btn_text","start_btn","group_close","main_group"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.main_group_i()];
	}
	var _proto = ClearStreakWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.main_group_i = function () {
		var t = new eui.Group();
		this.main_group = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.no_reward_group_i(),this.reward_group_i(),this._Group1_i(),this.start_btn_i(),this.group_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1210;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_tanchuang_4_png";
		t.width = 974;
		t.x = 51;
		t.y = 351;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -33;
		t.source = "title_liansheng_png";
		t.y = 232.16;
		return t;
	};
	_proto.no_reward_group_i = function () {
		var t = new eui.Group();
		this.no_reward_group = t;
		t.height = 660;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 900;
		t.y = 359;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_mission_exit_png";
		t.y = -10.82;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "完成一关即可开启";
		t.textColor = 0x0263bd;
		t.y = 192.82;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "icon_hezi_png";
		t.y = 348.18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "icon_hegai_png";
		t.y = 280.42;
		return t;
	};
	_proto.reward_group_i = function () {
		var t = new eui.Group();
		this.reward_group = t;
		t.height = 660;
		t.horizontalCenter = 0;
		t.width = 900;
		t.y = 459;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 740;
		t.scale9Grid = new egret.Rectangle(100,68,20,16);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_wenzidi_png";
		t.width = 880;
		t.x = 12;
		t.y = -42;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -40.5;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "xingguang_png";
		t.y = 82.16;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -29.5;
		t.source = "icon_hezi_png";
		t.y = 354.07;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 40;
		t.source = "icon_hegai_png";
		t.x = 573.96;
		t.y = 301;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 373;
		t.horizontalCenter = 0.5;
		t.width = 859;
		t.y = 1036.03;
		t.elementsContent = [this._Label2_i(),this.next_reward_status_i(),this.text_group_i(),this.max_level_text_group_i(),this.huangguan_image_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.text = "礼盒等级:";
		t.visible = false;
		t.x = 222;
		t.y = 18;
		return t;
	};
	_proto.next_reward_status_i = function () {
		var t = new eui.Label();
		this.next_reward_status = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.text = "尚未开启";
		t.textColor = 0xfff609;
		t.visible = false;
		t.x = 461.79;
		t.y = 18;
		return t;
	};
	_proto.text_group_i = function () {
		var t = new eui.Group();
		this.text_group = t;
		t.anchorOffsetX = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 859;
		t.y = 100;
		t.elementsContent = [this._Label3_i(),this._Label4_i(),this.next_reward_image_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "在不失去体力的情况下连续通关,\n礼盒就会不断升级!";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.x = 87;
		t.y = 62.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.size = 42;
		t.text = "下一等级即可获得            !";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.y = 172;
		return t;
	};
	_proto.next_reward_image_i = function () {
		var t = new eui.Image();
		this.next_reward_image = t;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ele_color_bomb_png";
		t.x = 551.6;
		t.y = 147;
		return t;
	};
	_proto.max_level_text_group_i = function () {
		var t = new eui.Group();
		this.max_level_text_group = t;
		t.anchorOffsetX = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.width = 859;
		t.x = 10;
		t.y = 110;
		t.elementsContent = [this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "在不失去体力的情况下连续通关,";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.x = 87;
		t.y = 39.34;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "礼盒就会不断升级!";
		t.textAlign = "center";
		t.textColor = 0x8A5036;
		t.y = 88.73;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "快去闯关吧!";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.x = 97;
		t.y = 155.92;
		return t;
	};
	_proto.huangguan_image_i = function () {
		var t = new eui.Image();
		this.huangguan_image = t;
		t.source = "huangguan_png";
		t.visible = false;
		t.x = 615;
		t.y = 15;
		return t;
	};
	_proto.start_btn_i = function () {
		var t = new eui.Group();
		this.start_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.touchEnabled = true;
		t.x = 530.91;
		t.y = 1442.31;
		t.elementsContent = [this._Image10_i(),this.start_btn_text_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.source = "btn_luchang_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.start_btn_text_i = function () {
		var t = new eui.Label();
		this.start_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.text = "好的";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_close_i = function () {
		var t = new eui.Image();
		this.group_close = t;
		t.source = "icon_guanbi_1_png";
		t.x = 947.32;
		t.y = 330.02;
		return t;
	};
	return ClearStreakWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CommingSoonWindowSkin.exml'] = window.CommingSoonWindowSkin = (function (_super) {
	__extends(CommingSoonWindowSkin, _super);
	function CommingSoonWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","effect_gp","group_desc","skip_btn","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = CommingSoonWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this.effect_gp_i(),this.group_desc_i(),this.skip_btn_i()];
		return t;
	};
	_proto.effect_gp_i = function () {
		var t = new eui.Group();
		this.effect_gp = t;
		t.height = 0;
		t.horizontalCenter = -50;
		t.verticalCenter = 450;
		t.width = 0;
		return t;
	};
	_proto.group_desc_i = function () {
		var t = new eui.Group();
		this.group_desc = t;
		t.cacheAsBitmap = false;
		t.horizontalCenter = 0;
		t.top = 250;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.horizontalCenter = 0;
		t.source = "bg_tishi_png";
		t.width = 1080;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.text = "后续关卡还在紧锣密鼓的筹备中~";
		t.textColor = 0x095483;
		t.verticalCenter = 0;
		return t;
	};
	_proto.skip_btn_i = function () {
		var t = new eui.Group();
		this.skip_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	return CommingSoonWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/CookingWindowSkin.exml'] = window.CookingWindowSkin = (function (_super) {
	__extends(CookingWindowSkin, _super);
	function CookingWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","progress_mask","progress_di","progress","progress_bar_group","kedu_group","progress_group","left_days","invisibleTouchLayer","start_btn_text","start_btn","image_food1","image_food2","image_food3","frame_group","chicken_group","get_btn_text","get_btn","main_group"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.main_group_i()];
	}
	var _proto = CookingWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.main_group_i = function () {
		var t = new eui.Group();
		this.main_group = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this.frame_group_i(),this.chicken_group_i(),this.get_btn_i()];
		return t;
	};
	_proto.frame_group_i = function () {
		var t = new eui.Group();
		this.frame_group = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.progress_group_i(),this._Image6_i(),this._Image7_i(),this.left_days_i(),this._Label1_i(),this._Image8_i(),this._Image9_i(),this.invisibleTouchLayer_i(),this.start_btn_i(),this.image_food1_i(),this.image_food2_i(),this.image_food3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mutou_png";
		t.x = 48;
		t.y = 399;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "mutou_png";
		t.x = 1034.06;
		t.y = 399;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bg_xingxingzuo_png";
		t.x = 18;
		t.y = 453;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "bg_xingxingzuo_png";
		t.x = 1080.06;
		t.y = 467;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bg_zhuozi_png";
		t.x = 0.14;
		t.y = 1085.15;
		return t;
	};
	_proto.progress_group_i = function () {
		var t = new eui.Group();
		this.progress_group = t;
		t.height = 115;
		t.width = 1080;
		t.x = 0;
		t.y = 1275;
		t.elementsContent = [this.progress_mask_i(),this.progress_di_i(),this.progress_bar_group_i(),this.kedu_group_i()];
		return t;
	};
	_proto.progress_mask_i = function () {
		var t = new eui.Image();
		this.progress_mask = t;
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(54,0,6,66);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_white_png";
		t.width = 840;
		t.x = 110.6;
		t.y = 53;
		return t;
	};
	_proto.progress_di_i = function () {
		var t = new eui.Image();
		this.progress_di = t;
		t.scale9Grid = new egret.Rectangle(54,0,6,66);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cooking_jindutiaodi_png";
		t.width = 857;
		t.x = 102.6;
		t.y = 44;
		return t;
	};
	_proto.progress_bar_group_i = function () {
		var t = new eui.Group();
		this.progress_bar_group = t;
		t.height = 48;
		t.width = 840;
		t.x = 110.6;
		t.y = 53;
		t.elementsContent = [this.progress_i()];
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Image();
		this.progress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 48;
		t.scale9Grid = new egret.Rectangle(28,20,46,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cooking_jindutiao_png";
		t.width = 840;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kedu_group_i = function () {
		var t = new eui.Group();
		this.kedu_group = t;
		t.height = 48;
		t.width = 840;
		t.x = 110.6;
		t.y = 53;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 367;
		t.y = 1393;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_shijian_png";
		t.x = 452;
		t.y = 1408;
		return t;
	};
	_proto.left_days_i = function () {
		var t = new eui.Label();
		this.left_days = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "3天";
		t.textColor = 0xffffff;
		t.x = 535;
		t.y = 1412;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 78.91;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 44;
		t.text = "每次成功通关都会增加烹饪的进度!";
		t.textColor = 0x0d501d;
		t.verticalAlign = "middle";
		t.y = 1526.36;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_zaotai_png";
		t.x = 354.52;
		t.y = 1006.19;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cooking_title_png";
		t.y = 188.09;
		return t;
	};
	_proto.invisibleTouchLayer_i = function () {
		var t = new eui.Image();
		this.invisibleTouchLayer = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.start_btn_i = function () {
		var t = new eui.Group();
		this.start_btn = t;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 715;
		t.elementsContent = [this._Image10_i(),this.start_btn_text_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_huangchang_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.start_btn_text_i = function () {
		var t = new eui.Label();
		this.start_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "好的";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_food1_i = function () {
		var t = new eui.Image();
		this.image_food1 = t;
		t.source = "icon_shiwu1_png";
		t.x = 123.73;
		t.y = 1181.52;
		return t;
	};
	_proto.image_food2_i = function () {
		var t = new eui.Image();
		this.image_food2 = t;
		t.source = "icon_shiwu2_png";
		t.x = 451.96;
		t.y = 1180.88;
		return t;
	};
	_proto.image_food3_i = function () {
		var t = new eui.Image();
		this.image_food3 = t;
		t.source = "icon_shiwu3_png";
		t.x = 871.7;
		t.y = 1162.71;
		return t;
	};
	_proto.chicken_group_i = function () {
		var t = new eui.Group();
		this.chicken_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.width = 10;
		t.x = 551;
		t.y = 1001;
		return t;
	};
	_proto.get_btn_i = function () {
		var t = new eui.Group();
		this.get_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.y = 1184;
		t.elementsContent = [this._Image11_i(),this.get_btn_text_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_huangchang_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.get_btn_text_i = function () {
		var t = new eui.Label();
		this.get_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "好的";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return CookingWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/DirectlyEnterGameTipsWindowSkin.exml'] = window.DirectlyEnterGameTipsWindowSkin = (function (_super) {
	__extends(DirectlyEnterGameTipsWindowSkin, _super);
	function DirectlyEnterGameTipsWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_bg","reward_group","_desc","_desc2","btn_text","group_btn_start","group_close","_label_not_use","main_group"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.main_group_i()];
	}
	var _proto = DirectlyEnterGameTipsWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.main_group_i = function () {
		var t = new eui.Group();
		this.main_group = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._bg_i(),this.reward_group_i(),this._desc_i(),this._desc2_i(),this.group_btn_start_i(),this.group_close_i(),this._label_not_use_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.anchorOffsetY = 0;
		t.height = 747.33;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_tanchuang_4_png";
		t.width = 935;
		t.y = 547.67;
		return t;
	};
	_proto.reward_group_i = function () {
		var t = new eui.Group();
		this.reward_group = t;
		t.height = 330;
		t.horizontalCenter = 0;
		t.width = 900;
		t.y = 689.3;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 420;
		t.horizontalCenter = -3.5;
		t.scale9Grid = new egret.Rectangle(31,30,11,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_di_1_png";
		t.width = 832.66;
		t.y = -11.36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rewards_list_png";
		t.y = -15.37;
		return t;
	};
	_proto._desc_i = function () {
		var t = new eui.Label();
		this._desc = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 15;
		t.size = 52;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.y = 595.97;
		return t;
	};
	_proto._desc2_i = function () {
		var t = new eui.Label();
		this._desc2 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -2.5;
		t.lineSpacing = 15;
		t.size = 34;
		t.text = "更多好礼等你来拿！ 100%中奖哦~";
		t.textAlign = "center";
		t.textColor = 0xe8381f;
		t.y = 1043.95;
		return t;
	};
	_proto.group_btn_start_i = function () {
		var t = new eui.Group();
		this.group_btn_start = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.horizontalCenter = 0.5;
		t.touchEnabled = true;
		t.y = 1191;
		t.elementsContent = [this._Image3_i(),this.btn_text_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.source = "btn_huangchang_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_text_i = function () {
		var t = new eui.Label();
		this.btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "开始游戏";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = -2;
		return t;
	};
	_proto.group_close_i = function () {
		var t = new eui.Image();
		this.group_close = t;
		t.source = "icon_guanbi_1_png";
		t.x = 917.99;
		t.y = 530.02;
		return t;
	};
	_proto._label_not_use_i = function () {
		var t = new eui.Label();
		this._label_not_use = t;
		t.bold = true;
		t.border = false;
		t.borderColor = 0xa07a57;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = false;
		t.size = 45;
		t.text = "";
		t.textColor = 0xa07a57;
		t.y = 1177.44;
		return t;
	};
	return DirectlyEnterGameTipsWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/EndGameWindowSkin.exml'] = window.EndGameWindowSkin = (function (_super) {
	__extends(EndGameWindowSkin, _super);
	function EndGameWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_closeBtn","_title","show_coin_num_container","group_show_coin","_annaImg","_annaMask","_annaHolder","_bubble1","_label_gather_redbag","_targetImg","_inBubbleGroup1","group_mission","_bubble2","_label_desc","_icon_reward","_inBubbleGroup2","group_clearstreak","_bubble3S","_bubble3","_label_packet","_packetInfo","_bubble_text","_bubble","_shareBtnBg","_shareText","_shareBtnImg","_shareBtn","_label_withdraw","_withdrawNumHolder","_withdrawBtn","_targetGroup","_reason_img_bomb","_reason_img_color_mixer","_reason_img_swap","_reason_label","_reasonGroup","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = EndGameWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._closeBtn_i(),this._Image3_i(),this._title_i(),this.group_show_coin_i(),this._annaHolder_i(),this.group_mission_i(),this.group_clearstreak_i(),this._packetInfo_i(),this._bubble_i(),this._shareBtn_i(),this._withdrawBtn_i(),this._targetGroup_i(),this._reasonGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 560;
		t.left = 41;
		t.right = 41;
		t.scale9Grid = new egret.Rectangle(119,71,22,41);
		t.source = "bg_kaishi_png";
		t.top = 434;
		t.touchEnabled = true;
		t.width = 1000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(79,0,23,125);
		t.source = "bg_titledi_png";
		t.verticalCenter = -504;
		t.width = 538;
		return t;
	};
	_proto._closeBtn_i = function () {
		var t = new eui.Image();
		this._closeBtn = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.source = "icon_guanbi_1_png";
		t.x = 1012;
		t.y = 459;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 285;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(49,51,39,26);
		t.source = "bg_mubiaodi_png";
		t.width = 880;
		t.y = 546;
		return t;
	};
	_proto._title_i = function () {
		var t = new eui.Label();
		this._title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -509;
		t.width = 422;
		return t;
	};
	_proto.group_show_coin_i = function () {
		var t = new eui.Group();
		this.group_show_coin = t;
		t.anchorOffsetY = 0;
		t.height = 410;
		t.visible = false;
		t.width = 665;
		t.x = 208;
		t.y = 850;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this.show_coin_num_container_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.84;
		t.scaleY = 0.84;
		t.source = "icon_jinbi1_png";
		t.x = 200;
		t.y = 123.33;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.stroke = 3;
		t.strokeColor = 0xb74b40;
		t.text = "过关最高可得";
		t.x = 153;
		t.y = 27.27;
		return t;
	};
	_proto.show_coin_num_container_i = function () {
		var t = new eui.Group();
		this.show_coin_num_container = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 414.49;
		t.y = 288;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 44;
		t.text = "获得金币可更快领取商品！";
		t.textColor = 0x8a5036;
		t.x = 69;
		t.y = 366;
		return t;
	};
	_proto._annaHolder_i = function () {
		var t = new eui.Group();
		this._annaHolder = t;
		t.anchorOffsetY = 0;
		t.height = 456.97;
		t.width = 580;
		t.x = 250;
		t.y = 812.77;
		t.elementsContent = [this._annaImg_i(),this._annaMask_i()];
		return t;
	};
	_proto._annaImg_i = function () {
		var t = new eui.Image();
		this._annaImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 426;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "girl4_png";
		t.visible = false;
		t.width = 313;
		t.x = 134;
		t.y = 30.97;
		return t;
	};
	_proto._annaMask_i = function () {
		var t = new eui.Image();
		this._annaMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 486.66;
		t.source = "bg_black_png";
		t.visible = false;
		t.width = 786.66;
		t.x = -147.45;
		t.y = -27.78;
		return t;
	};
	_proto.group_mission_i = function () {
		var t = new eui.Group();
		this.group_mission = t;
		t.height = 452;
		t.visible = false;
		t.width = 697;
		t.x = 364;
		t.y = 811;
		t.elementsContent = [this._Image5_i(),this._bubble1_i(),this._inBubbleGroup1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 426;
		t.left = -209;
		t.source = "girl4_png";
		t.top = 29;
		t.width = 313;
		return t;
	};
	_proto._bubble1_i = function () {
		var t = new eui.Image();
		this._bubble1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 2.83;
		t.scaleY = 2.83;
		t.source = "liansheng_qipaoda_png";
		t.x = 50;
		t.y = 10;
		return t;
	};
	_proto._inBubbleGroup1_i = function () {
		var t = new eui.Group();
		this._inBubbleGroup1 = t;
		t.height = 316;
		t.width = 400;
		t.x = 139;
		t.y = 108;
		t.elementsContent = [this._label_gather_redbag_i(),this._targetImg_i()];
		return t;
	};
	_proto._label_gather_redbag_i = function () {
		var t = new eui.Label();
		this._label_gather_redbag = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 118.48;
		t.horizontalCenter = 1.5;
		t.size = 42;
		t.text = "真的要放弃已经获得的红包吗？";
		t.textColor = 0x8a5036;
		t.top = -20;
		t.verticalAlign = "middle";
		t.width = 403;
		return t;
	};
	_proto._targetImg_i = function () {
		var t = new eui.Image();
		this._targetImg = t;
		t.horizontalCenter = 0;
		t.rotation = 0.15;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "fund_hongbaodiejia_png";
		t.verticalCenter = 36.5;
		return t;
	};
	_proto.group_clearstreak_i = function () {
		var t = new eui.Group();
		this.group_clearstreak = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 452;
		t.visible = false;
		t.width = 697;
		t.x = 310;
		t.y = 793;
		t.elementsContent = [this._bubble2_i(),this._inBubbleGroup2_i()];
		return t;
	};
	_proto._bubble2_i = function () {
		var t = new eui.Image();
		this._bubble2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 3.33;
		t.scaleY = 3.33;
		t.source = "liansheng_qipaoda_png";
		t.x = -4;
		t.y = -28;
		return t;
	};
	_proto._inBubbleGroup2_i = function () {
		var t = new eui.Group();
		this._inBubbleGroup2 = t;
		t.left = 99;
		t.top = 32;
		t.elementsContent = [this._label_desc_i(),this._Image6_i(),this._Group1_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._label_desc_i = function () {
		var t = new eui.Label();
		this._label_desc = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 150;
		t.lineSpacing = 15;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0263BD;
		t.verticalAlign = "middle";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_xiangzihou_png";
		t.x = 114;
		t.y = 135;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 138;
		t.y = 155;
		t.elementsContent = [this._icon_reward_i()];
		return t;
	};
	_proto._icon_reward_i = function () {
		var t = new eui.Image();
		this._icon_reward = t;
		t.horizontalCenter = 0;
		t.source = "icon_jiangli1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_xiangziqian_png";
		t.x = 114;
		t.y = 135;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "liansheng_chahao_png";
		t.x = 304;
		t.y = 305;
		return t;
	};
	_proto._packetInfo_i = function () {
		var t = new eui.Group();
		this._packetInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 531.24;
		t.visible = false;
		t.width = 658.68;
		t.x = 348;
		t.y = 739;
		t.elementsContent = [this._bubble3S_i(),this._bubble3_i(),this._label_packet_i()];
		return t;
	};
	_proto._bubble3S_i = function () {
		var t = new eui.Image();
		this._bubble3S = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 2.7;
		t.scaleY = 2.7;
		t.source = "liansheng_qipaoxiao_png";
		t.x = 77.03;
		t.y = 298.79;
		return t;
	};
	_proto._bubble3_i = function () {
		var t = new eui.Image();
		this._bubble3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 2.6;
		t.scaleY = 2.8;
		t.source = "liansheng_qipaoda_png";
		t.x = 118;
		t.y = 57.25;
		return t;
	};
	_proto._label_packet_i = function () {
		var t = new eui.Label();
		this._label_packet = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 200;
		t.lineSpacing = 15;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0263BD;
		t.verticalAlign = "middle";
		t.width = 400;
		t.x = 203.21;
		t.y = 172.24;
		return t;
	};
	_proto._bubble_i = function () {
		var t = new eui.Group();
		this._bubble = t;
		t.visible = false;
		t.x = 660;
		t.y = 1198;
		t.elementsContent = [this._Image9_i(),this._bubble_text_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "spin_qipao_png";
		t.y = 0;
		return t;
	};
	_proto._bubble_text_i = function () {
		var t = new eui.Label();
		this._bubble_text = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "";
		t.textColor = 0x8a5036;
		t.y = 14.92;
		return t;
	};
	_proto._shareBtn_i = function () {
		var t = new eui.Group();
		this._shareBtn = t;
		t.horizontalCenter = 208.5;
		t.verticalCenter = 389;
		t.visible = false;
		t.elementsContent = [this._Image10_i(),this._shareBtnBg_i(),this._shareText_i(),this._shareBtnImg_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_anniudi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._shareBtnBg_i = function () {
		var t = new eui.Image();
		this._shareBtnBg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "btn_luchang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._shareText_i = function () {
		var t = new eui.Label();
		this._shareText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 65;
		t.horizontalCenter = 11;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 309;
		return t;
	};
	_proto._shareBtnImg_i = function () {
		var t = new eui.Image();
		this._shareBtnImg = t;
		t.source = "icon_five_moves_png";
		t.verticalCenter = 0;
		t.x = 260.1;
		return t;
	};
	_proto._withdrawBtn_i = function () {
		var t = new eui.Group();
		this._withdrawBtn = t;
		t.anchorOffsetX = 214;
		t.anchorOffsetY = 77;
		t.horizontalCenter = -211.5;
		t.verticalCenter = 389;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._label_withdraw_i(),this._Image13_i(),this._Image14_i(),this._withdrawNumHolder_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_anniudi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "btn_fenchang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._label_withdraw_i = function () {
		var t = new eui.Label();
		this._label_withdraw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 62;
		t.left = 51;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xbd0c57;
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 168;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.right = 46;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_xinsui_png";
		t.verticalCenter = 5;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.right = 101;
		t.source = "icon_minus_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._withdrawNumHolder_i = function () {
		var t = new eui.Group();
		this._withdrawNumHolder = t;
		t.height = 40;
		t.horizontalCenter = 115.5;
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto._targetGroup_i = function () {
		var t = new eui.Group();
		this._targetGroup = t;
		t.anchorOffsetY = 0;
		t.height = 210.39;
		t.width = 750;
		t.x = 165;
		t.y = 600.62;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 60;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._reasonGroup_i = function () {
		var t = new eui.Group();
		this._reasonGroup = t;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 750;
		t.y = 564.25;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._reason_img_bomb_i(),this._reason_img_color_mixer_i(),this._reason_img_swap_i(),this._reason_label_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._reason_img_bomb_i = function () {
		var t = new eui.Image();
		this._reason_img_bomb = t;
		t.bottom = 63;
		t.horizontalCenter = 0;
		t.source = "icon_baozha_png";
		t.visible = false;
		return t;
	};
	_proto._reason_img_color_mixer_i = function () {
		var t = new eui.Image();
		this._reason_img_color_mixer = t;
		t.bottom = 63;
		t.horizontalCenter = 0;
		t.source = "icon_tiaoseban_png";
		t.visible = false;
		return t;
	};
	_proto._reason_img_swap_i = function () {
		var t = new eui.Image();
		this._reason_img_swap = t;
		t.bottom = 75;
		t.horizontalCenter = 0;
		t.source = "icon_jiaohuan_png";
		return t;
	};
	_proto._reason_label_i = function () {
		var t = new eui.Label();
		this._reason_label = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 47;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x912d13;
		t.y = 184;
		return t;
	};
	return EndGameWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ExitComfirmWindowSkin.exml'] = window.ExitComfirmWindowSkin = (function (_super) {
	__extends(ExitComfirmWindowSkin, _super);
	function ExitComfirmWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_closeBtn","_title","_stanima_icon","_stanima_minus","_withdrawNumHolder","_desc","_targetGroup","_bubble_big1","_label_gather_redbag","_targetImg","_inBubbleGroup1","_anna1","_bubble_small1","group_mission","_bubble_big2","_label_desc","_icon_reward","_inBubbleGroup2","_anna2","_bubble_small2","group_clearstreak","_continueLabel","_continueBtn","_returnLabel","_returnBtn","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = ExitComfirmWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,8,3,4);
		t.source = "bg_black_png";
		t.top = 0;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 757.88;
		t.horizontalCenter = 0;
		t.verticalCenter = 32;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._closeBtn_i(),this._title_i(),this._targetGroup_i(),this.group_mission_i(),this.group_clearstreak_i(),this._continueBtn_i(),this._returnBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 634;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(6,6,38,10);
		t.source = "bg_tuichu_png";
		t.verticalCenter = -48.94;
		t.width = 1080;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "bg_tuichushang_png";
		t.verticalCenter = -300.44;
		return t;
	};
	_proto._closeBtn_i = function () {
		var t = new eui.Image();
		this._closeBtn = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.source = "icon_guanbi_1_png";
		t.x = 1012;
		t.y = 80.22;
		return t;
	};
	_proto._title_i = function () {
		var t = new eui.Label();
		this._title = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 118.48;
		t.horizontalCenter = 0;
		t.size = 56;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -307.94;
		return t;
	};
	_proto._targetGroup_i = function () {
		var t = new eui.Group();
		this._targetGroup = t;
		t.height = 300;
		t.width = 900;
		t.x = 91;
		t.y = 157.58;
		t.elementsContent = [this._stanima_icon_i(),this._stanima_minus_i(),this._withdrawNumHolder_i(),this._desc_i()];
		return t;
	};
	_proto._stanima_icon_i = function () {
		var t = new eui.Image();
		this._stanima_icon = t;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_xinsui_png";
		t.y = 56;
		return t;
	};
	_proto._stanima_minus_i = function () {
		var t = new eui.Image();
		this._stanima_minus = t;
		t.source = "icon_minus_png";
		t.x = 412.1;
		t.y = 110.45;
		return t;
	};
	_proto._withdrawNumHolder_i = function () {
		var t = new eui.Group();
		this._withdrawNumHolder = t;
		t.height = 40;
		t.width = 30;
		t.x = 453.01;
		t.y = 96.45;
		return t;
	};
	_proto._desc_i = function () {
		var t = new eui.Label();
		this._desc = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 46;
		t.textColor = 0x8a5036;
		t.verticalCenter = 100;
		return t;
	};
	_proto.group_mission_i = function () {
		var t = new eui.Group();
		this.group_mission = t;
		t.height = 452;
		t.horizontalCenter = 74.5;
		t.verticalCenter = -216;
		t.visible = false;
		t.width = 697;
		t.elementsContent = [this._bubble_big1_i(),this._inBubbleGroup1_i(),this._anna1_i(),this._bubble_small1_i()];
		return t;
	};
	_proto._bubble_big1_i = function () {
		var t = new eui.Image();
		this._bubble_big1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 2.83;
		t.scaleY = 2.83;
		t.source = "liansheng_qipaoda_png";
		t.x = 50;
		t.y = 10;
		return t;
	};
	_proto._inBubbleGroup1_i = function () {
		var t = new eui.Group();
		this._inBubbleGroup1 = t;
		t.height = 316;
		t.width = 400;
		t.x = 139;
		t.y = 108;
		t.elementsContent = [this._label_gather_redbag_i(),this._targetImg_i()];
		return t;
	};
	_proto._label_gather_redbag_i = function () {
		var t = new eui.Label();
		this._label_gather_redbag = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 118.48;
		t.horizontalCenter = 1.5;
		t.size = 42;
		t.text = "退出游戏，会损失已获取的红包哦~";
		t.textColor = 0x8a5036;
		t.top = -20;
		t.verticalAlign = "middle";
		t.width = 403;
		return t;
	};
	_proto._targetImg_i = function () {
		var t = new eui.Image();
		this._targetImg = t;
		t.horizontalCenter = 0;
		t.rotation = 0.15;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "fund_hongbaodiejia_png";
		t.verticalCenter = 36.5;
		return t;
	};
	_proto._anna1_i = function () {
		var t = new eui.Image();
		this._anna1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 580;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "girl5_png";
		t.width = 299;
		t.x = -212.61;
		t.y = 47.16;
		return t;
	};
	_proto._bubble_small1_i = function () {
		var t = new eui.Image();
		this._bubble_small1 = t;
		t.scaleX = 3.33;
		t.scaleY = 3.33;
		t.source = "liansheng_qipaoxiao_png";
		t.x = -6.67;
		t.y = 276.79;
		return t;
	};
	_proto.group_clearstreak_i = function () {
		var t = new eui.Group();
		this.group_clearstreak = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 452;
		t.horizontalCenter = 75.5;
		t.verticalCenter = -242;
		t.visible = false;
		t.width = 697;
		t.elementsContent = [this._bubble_big2_i(),this._inBubbleGroup2_i(),this._anna2_i(),this._bubble_small2_i()];
		return t;
	};
	_proto._bubble_big2_i = function () {
		var t = new eui.Image();
		this._bubble_big2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 3.15;
		t.scaleY = 3.4;
		t.source = "liansheng_qipaoda_png";
		t.x = 33;
		t.y = 10;
		return t;
	};
	_proto._inBubbleGroup2_i = function () {
		var t = new eui.Group();
		this._inBubbleGroup2 = t;
		t.x = 101.82;
		t.y = 74;
		t.elementsContent = [this._label_desc_i(),this._Image3_i(),this._Group1_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._label_desc_i = function () {
		var t = new eui.Label();
		this._label_desc = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 150;
		t.lineSpacing = 10;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0263BD;
		t.verticalAlign = "middle";
		t.width = 530;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_xiangzihou_png";
		t.x = 119;
		t.y = 129;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 146.12;
		t.y = 154.5;
		t.elementsContent = [this._icon_reward_i()];
		return t;
	};
	_proto._icon_reward_i = function () {
		var t = new eui.Image();
		this._icon_reward = t;
		t.horizontalCenter = 0;
		t.source = "icon_jiangli1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_xiangziqian_png";
		t.x = 119;
		t.y = 129;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "liansheng_chahao_png";
		t.x = 305;
		t.y = 299;
		return t;
	};
	_proto._anna2_i = function () {
		var t = new eui.Image();
		this._anna2 = t;
		t.height = 580;
		t.source = "girl5_png";
		t.width = 299;
		t.x = -214.73;
		t.y = 62.19;
		return t;
	};
	_proto._bubble_small2_i = function () {
		var t = new eui.Image();
		this._bubble_small2 = t;
		t.scaleX = 3;
		t.scaleY = 3;
		t.source = "liansheng_qipaoxiao_png";
		t.x = -12.67;
		t.y = 306.91;
		return t;
	};
	_proto._continueBtn_i = function () {
		var t = new eui.Group();
		this._continueBtn = t;
		t.anchorOffsetX = 214.79;
		t.anchorOffsetY = 70;
		t.width = 430;
		t.x = 785.79;
		t.y = 527;
		t.elementsContent = [this._Image6_i(),this._continueLabel_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 236.46;
		t.anchorOffsetY = 64.73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_luchang_png";
		t.verticalCenter = 0;
		t.width = 427;
		return t;
	};
	_proto._continueLabel_i = function () {
		var t = new eui.Label();
		this._continueLabel = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.textColor = 0xffffff;
		t.verticalCenter = -2;
		return t;
	};
	_proto._returnBtn_i = function () {
		var t = new eui.Group();
		this._returnBtn = t;
		t.anchorOffsetY = 68.55;
		t.horizontalCenter = -237;
		t.y = 525.15;
		t.elementsContent = [this._Image7_i(),this._returnLabel_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 259.09;
		t.anchorOffsetY = 78.79;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_fenchang_png";
		t.verticalCenter = 0;
		t.width = 427;
		return t;
	};
	_proto._returnLabel_i = function () {
		var t = new eui.Label();
		this._returnLabel = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xbd0c57;
		t.textColor = 0xffffff;
		t.verticalCenter = -2;
		return t;
	};
	return ExitComfirmWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameTargetDisplaySkin.exml'] = window.GameTargetDisplaySkin = (function (_super) {
	__extends(GameTargetDisplaySkin, _super);
	function GameTargetDisplaySkin() {
		_super.call(this);
		this.skinParts = ["img_","img_x","group_num","label_group","checkImg_"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameTargetDisplaySkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 128;
		t.width = 103;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img__i(),this.label_group_i(),this.checkImg__i()];
		return t;
	};
	_proto.img__i = function () {
		var t = new eui.Image();
		this.img_ = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_renwufang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_group_i = function () {
		var t = new eui.Group();
		this.label_group = t;
		t.bottom = 14;
		t.height = 37;
		t.horizontalCenter = 0.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_x_i(),this.group_num_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -5;
		t.horizontalAlign = "center";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.img_x_i = function () {
		var t = new eui.Image();
		this.img_x = t;
		t.scaleX = 0.82;
		t.scaleY = 0.82;
		t.source = "non_11_x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_num_i = function () {
		var t = new eui.Group();
		this.group_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.width = 32;
		t.x = 29;
		t.y = 2;
		return t;
	};
	_proto.checkImg__i = function () {
		var t = new eui.Image();
		this.checkImg_ = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_duihao2_png";
		t.verticalCenter = 18.5;
		return t;
	};
	return GameTargetDisplaySkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameTargetViewSkin.exml'] = window.GameTargetViewSkin = (function (_super) {
	__extends(GameTargetViewSkin, _super);
	function GameTargetViewSkin() {
		_super.call(this);
		this.skinParts = ["img_","img_x","group_num","label_group"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameTargetViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 125;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img__i(),this.label_group_i()];
		return t;
	};
	_proto.img__i = function () {
		var t = new eui.Image();
		this.img_ = t;
		t.horizontalCenter = 0;
		t.source = "icon_renwucao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.label_group_i = function () {
		var t = new eui.Group();
		this.label_group = t;
		t.bottom = -11;
		t.x = 43;
		t.elementsContent = [this.img_x_i(),this.group_num_i()];
		return t;
	};
	_proto.img_x_i = function () {
		var t = new eui.Image();
		this.img_x = t;
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.source = "non_k_x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_num_i = function () {
		var t = new eui.Group();
		this.group_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.x = 43;
		t.y = 17;
		return t;
	};
	return GameTargetViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameWindowSkin.exml'] = window.GameWindowSkin = (function (_super) {
	__extends(GameWindowSkin, _super);
	function GameWindowSkin() {
		_super.call(this);
		this.skinParts = ["_bgImg","group_bg","group_cache","score_","score_bar_","star_3","star_2","star_1","star_group","btn_confirm","text_input","group_gm","step_","_annaheadbg","_annahead","_fundHead","_headmask","head","stage_","black_mask","group_target","group_top","_itemMask","group_board","_item4_mask","_item4_tips_label","btn_2_color_select_1_Img","group_2_color_select_1","btn_2_color_select_2_Img","group_2_color_select_2","group_2_color_select","btn_3_color_select_1_Img","group_3_color_select_1","btn_3_color_select_2_Img","group_3_color_select_2","btn_3_color_select_3_Img","group_3_color_select_3","group_3_color_select","btn_4_color_select_1_Img","group_4_color_select_1","btn_4_color_select_2_Img","group_4_color_select_2","btn_4_color_select_3_Img","group_4_color_select_3","btn_4_color_select_4_Img","group_4_color_select_4","group_4_color_select","btn_5_color_select_1_Img","group_5_color_select_1","btn_5_color_select_2_Img","group_5_color_select_2","btn_5_color_select_3_Img","group_5_color_select_3","btn_5_color_select_4_Img","group_5_color_select_4","btn_5_color_select_5_Img","group_5_color_select_5","group_5_color_select","btn_6_color_select_1_Img","group_6_color_select_1","btn_6_color_select_2_Img","group_6_color_select_2","btn_6_color_select_3_Img","group_6_color_select_3","btn_6_color_select_4_Img","group_6_color_select_4","btn_6_color_select_5_Img","group_6_color_select_5","btn_6_color_select_6_Img","group_6_color_select_6","group_6_color_select","color_select_confirm_btn","group_color_select","img_item0","item0_reach_limit_img","time_limited_img0","item_num_0","item_num_group0","img_add_0","timer0_img","timer0_label","timer0_group","group_item0","img_item1","item1_reach_limit_img","time_limited_img1","item_num_1","item_num_group1","img_add_1","timer1_img","timer1_label","timer1_group","group_item1","img_item2","item2_reach_limit_img","time_limited_img2","item_num_2","item_num_group2","img_add_2","timer2_img","timer2_label","timer2_group","group_item2","label_item3_col","group_item3_col","label_item3_row","group_item3_row","img_item3","item3_reach_limit_img","time_limited_img3","item_num_3","item_num_group3","img_add_3","timer3_img","timer3_label","timer3_group","group_item3_normal","group_item3","img_item4","item4_reach_limit_img","time_limited_img4","item_num_4","item_num_group4","img_add_4","timer4_img","timer4_label","timer4_group","group_item4_normal0","group_item4","item4_bubble_text","group_item4_bubble","group_bottom","_settingBgGroup","_group_item4_bubble_bg","bg_shezhi","group_exit","group_question","sound_eff_disable","group_sound_effect","sound_bg_disable","group_sound_bg","remider_disable","group_remider","setting_btn","setting_group","label_redpacket1","label_redpacket2","group_newuser_redpacket","label_first_ten","group_first_ten","label_get_cash","group_get_cash","guide_area","item_tip","item_img","group_item_tip","label_shuffle","group_shuffle","mode1_score1","mode1_score2","mode1_score3","charEffHolder1","charImg1","group_mode1","label_mode2_tips1","label_mode2_tips2","target_mode2_1","charEffHolder2","charImg2","group_mode2","label_mode3_tips1","label_mode3_tips2","target_mode3_1","target_mode3_2","charEffHolder3","charImg3","group_mode3","label_mode4_tips","charEffHolder4","charImg4","group_start_target","group_mode4","label_skip","group_skip","group_tips","fps_label"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.group_bg_i(),this.group_top_i(),this._itemMask_i(),this.group_board_i(),this._item4_mask_i(),this._item4_tips_label_i(),this.group_color_select_i(),this.group_bottom_i(),this._settingBgGroup_i(),this._group_item4_bubble_bg_i(),this.setting_group_i(),this.group_newuser_redpacket_i(),this.group_first_ten_i(),this.group_get_cash_i(),this.guide_area_i(),this.group_item_tip_i(),this.group_shuffle_i(),this.group_mode1_i(),this.group_mode2_i(),this.group_mode3_i(),this.group_mode4_i(),this.group_skip_i(),this.group_tips_i(),this.fps_label_i()];
	}
	var _proto = GameWindowSkin.prototype;

	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._bgImg_i()];
		return t;
	};
	_proto._bgImg_i = function () {
		var t = new eui.Image();
		this._bgImg = t;
		t.height = 1920;
		t.source = "game_bg1_png";
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 300;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 1080;
		t.elementsContent = [this.group_cache_i(),this._Group1_i(),this._Group2_i(),this.group_gm_i(),this._Group3_i(),this.head_i(),this._Group4_i(),this.black_mask_i(),this._Image7_i(),this.group_target_i()];
		return t;
	};
	_proto.group_cache_i = function () {
		var t = new eui.Group();
		this.group_cache = t;
		t.cacheAsBitmap = true;
		t.y = 44;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 211;
		t.source = "bg_shang_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 43;
		t.width = 232;
		t.x = 215;
		t.y = 85.86;
		t.elementsContent = [this._Image2_i(),this.score__i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "text_fenshu_png";
		t.verticalCenter = 0;
		t.x = -4;
		return t;
	};
	_proto.score__i = function () {
		var t = new eui.Group();
		this.score_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 4.5;
		t.width = 0;
		t.x = 177;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 211;
		t.width = 240;
		t.x = 208;
		t.y = 44;
		t.elementsContent = [this._Image3_i(),this.score_bar__i(),this.star_group_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.scale9Grid = new egret.Rectangle(18,21,28,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jindutiao_png";
		t.verticalCenter = 0;
		t.width = 240;
		t.x = 0;
		return t;
	};
	_proto.score_bar__i = function () {
		var t = new eui.Image();
		this.score_bar_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.scale9Grid = new egret.Rectangle(13,17,30,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jindutiao2_png";
		t.width = 234;
		t.x = 3;
		t.y = 85;
		return t;
	};
	_proto.star_group_i = function () {
		var t = new eui.Group();
		this.star_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 186;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 222;
		t.x = 18;
		t.y = 0;
		t.elementsContent = [this.star_3_i(),this.star_2_i(),this.star_1_i()];
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.source = "icon_star4_png";
		t.visible = false;
		t.width = 52;
		t.x = 172;
		t.y = 119;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.source = "icon_star4_png";
		t.visible = false;
		t.width = 52;
		t.x = 134;
		t.y = 119;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.source = "icon_star4_png";
		t.visible = false;
		t.width = 52;
		t.x = 6;
		t.y = 119;
		return t;
	};
	_proto.group_gm_i = function () {
		var t = new eui.Group();
		this.group_gm = t;
		t.height = 80;
		t.visible = false;
		t.width = 700;
		t.x = 234;
		t.y = 194;
		t.elementsContent = [this._Image4_i(),this.btn_confirm_i(),this.text_input_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.scale9Grid = new egret.Rectangle(32,30,10,13);
		t.source = "bg_di_1_png";
		t.width = 500;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_confirm_i = function () {
		var t = new eui.Image();
		this.btn_confirm = t;
		t.scaleX = 0.3;
		t.scaleY = 0.5;
		t.source = "btn_huangchang_1_png";
		t.x = 538.61;
		t.y = 1.25;
		return t;
	};
	_proto.text_input_i = function () {
		var t = new eui.TextInput();
		this.text_input = t;
		t.height = 50;
		t.width = 400;
		t.x = 31;
		t.y = 15;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 158;
		t.width = 152;
		t.x = 488.1;
		t.y = 63.48;
		t.elementsContent = [this.step__i(),this._Image5_i()];
		return t;
	};
	_proto.step__i = function () {
		var t = new eui.Group();
		this.step_ = t;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 150;
		t.layout = this._BasicLayout1_i();
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_bushu_png";
		t.width = 25;
		t.x = 64;
		t.y = 108;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Group();
		this.head = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 179;
		t.x = 26;
		t.y = 35;
		t.elementsContent = [this._annaheadbg_i(),this._annahead_i(),this._fundHead_i(),this._headmask_i()];
		return t;
	};
	_proto._annaheadbg_i = function () {
		var t = new eui.Image();
		this._annaheadbg = t;
		t.height = 172;
		t.source = "bg_touxiangditop_png";
		t.width = 172;
		t.x = 1;
		t.y = 30;
		return t;
	};
	_proto._annahead_i = function () {
		var t = new eui.Image();
		this._annahead = t;
		t.height = 200;
		t.source = "bg_touxiangtop_png";
		t.width = 179;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._fundHead_i = function () {
		var t = new eui.Image();
		this._fundHead = t;
		t.anchorOffsetX = 188;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -2;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "fund_hongbaodiejia_png";
		t.verticalCenter = 3.5;
		t.visible = false;
		return t;
	};
	_proto._headmask_i = function () {
		var t = new eui.Image();
		this._headmask = t;
		t.height = 200;
		t.source = "bg_black_png";
		t.visible = false;
		t.width = 179;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 37;
		t.width = 125;
		t.x = 52;
		t.y = 211;
		t.elementsContent = [this._Image6_i(),this.stage__i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(15,18,95,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_guanqiadi_png";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.stage__i = function () {
		var t = new eui.Group();
		this.stage_ = t;
		t.anchorOffsetX = 0;
		t.height = 37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.black_mask_i = function () {
		var t = new eui.Image();
		this.black_mask = t;
		t.height = 300;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_black_png";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(55,47,32,32);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_mubiaodi_png";
		t.width = 371;
		t.x = 640;
		t.y = 77;
		return t;
	};
	_proto.group_target_i = function () {
		var t = new eui.Group();
		this.group_target = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.width = 375;
		t.x = 640;
		t.y = 84;
		return t;
	};
	_proto._itemMask_i = function () {
		var t = new eui.Image();
		this._itemMask = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_black_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.group_board_i = function () {
		var t = new eui.Group();
		this.group_board = t;
		t.anchorOffsetX = 531;
		t.anchorOffsetY = 558;
		t.x = 540;
		t.y = 910;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 531;
		t.anchorOffsetY = 508;
		t.height = 1116;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_xiaochu_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1062;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._item4_mask_i = function () {
		var t = new eui.Image();
		this._item4_mask = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_black_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._item4_tips_label_i = function () {
		var t = new eui.Label();
		this._item4_tips_label = t;
		t.bold = true;
		t.size = 48;
		t.text = "点击选择要使用的颜色吧";
		t.textAlign = "center";
		t.verticalCenter = 252;
		t.visible = false;
		t.width = 1080;
		return t;
	};
	_proto.group_color_select_i = function () {
		var t = new eui.Group();
		this.group_color_select = t;
		t.height = 1920;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.group_2_color_select_i(),this.group_3_color_select_i(),this.group_4_color_select_i(),this.group_5_color_select_i(),this.group_6_color_select_i(),this.color_select_confirm_btn_i()];
		return t;
	};
	_proto.group_2_color_select_i = function () {
		var t = new eui.Group();
		this.group_2_color_select = t;
		t.height = 1920;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.group_2_color_select_1_i(),this.group_2_color_select_2_i()];
		return t;
	};
	_proto.group_2_color_select_1_i = function () {
		var t = new eui.Group();
		this.group_2_color_select_1 = t;
		t.height = 224;
		t.horizontalCenter = -150;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image9_i(),this.btn_2_color_select_1_Img_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_2_color_select_1_Img_i = function () {
		var t = new eui.Image();
		this.btn_2_color_select_1_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_2_color_select_2_i = function () {
		var t = new eui.Group();
		this.group_2_color_select_2 = t;
		t.height = 224;
		t.horizontalCenter = 150;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image10_i(),this.btn_2_color_select_2_Img_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_2_color_select_2_Img_i = function () {
		var t = new eui.Image();
		this.btn_2_color_select_2_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_3_color_select_i = function () {
		var t = new eui.Group();
		this.group_3_color_select = t;
		t.height = 1920;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.group_3_color_select_1_i(),this.group_3_color_select_2_i(),this.group_3_color_select_3_i()];
		return t;
	};
	_proto.group_3_color_select_1_i = function () {
		var t = new eui.Group();
		this.group_3_color_select_1 = t;
		t.height = 224;
		t.horizontalCenter = -250;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image11_i(),this.btn_3_color_select_1_Img_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_3_color_select_1_Img_i = function () {
		var t = new eui.Image();
		this.btn_3_color_select_1_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_3_color_select_2_i = function () {
		var t = new eui.Group();
		this.group_3_color_select_2 = t;
		t.height = 224;
		t.horizontalCenter = 0;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image12_i(),this.btn_3_color_select_2_Img_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_3_color_select_2_Img_i = function () {
		var t = new eui.Image();
		this.btn_3_color_select_2_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_3_color_select_3_i = function () {
		var t = new eui.Group();
		this.group_3_color_select_3 = t;
		t.height = 224;
		t.horizontalCenter = 250;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image13_i(),this.btn_3_color_select_3_Img_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_3_color_select_3_Img_i = function () {
		var t = new eui.Image();
		this.btn_3_color_select_3_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_4_color_select_i = function () {
		var t = new eui.Group();
		this.group_4_color_select = t;
		t.height = 1920;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.group_4_color_select_1_i(),this.group_4_color_select_2_i(),this.group_4_color_select_3_i(),this.group_4_color_select_4_i()];
		return t;
	};
	_proto.group_4_color_select_1_i = function () {
		var t = new eui.Group();
		this.group_4_color_select_1 = t;
		t.height = 224;
		t.horizontalCenter = -150;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image14_i(),this.btn_4_color_select_1_Img_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_4_color_select_1_Img_i = function () {
		var t = new eui.Image();
		this.btn_4_color_select_1_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_4_color_select_2_i = function () {
		var t = new eui.Group();
		this.group_4_color_select_2 = t;
		t.height = 224;
		t.horizontalCenter = 150;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image15_i(),this.btn_4_color_select_2_Img_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_4_color_select_2_Img_i = function () {
		var t = new eui.Image();
		this.btn_4_color_select_2_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_4_color_select_3_i = function () {
		var t = new eui.Group();
		this.group_4_color_select_3 = t;
		t.height = 224;
		t.horizontalCenter = -150;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image16_i(),this.btn_4_color_select_3_Img_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_4_color_select_3_Img_i = function () {
		var t = new eui.Image();
		this.btn_4_color_select_3_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_4_color_select_4_i = function () {
		var t = new eui.Group();
		this.group_4_color_select_4 = t;
		t.height = 224;
		t.horizontalCenter = 150;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image17_i(),this.btn_4_color_select_4_Img_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_4_color_select_4_Img_i = function () {
		var t = new eui.Image();
		this.btn_4_color_select_4_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_5_color_select_i = function () {
		var t = new eui.Group();
		this.group_5_color_select = t;
		t.height = 1920;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.group_5_color_select_1_i(),this.group_5_color_select_2_i(),this.group_5_color_select_3_i(),this.group_5_color_select_4_i(),this.group_5_color_select_5_i()];
		return t;
	};
	_proto.group_5_color_select_1_i = function () {
		var t = new eui.Group();
		this.group_5_color_select_1 = t;
		t.height = 224;
		t.horizontalCenter = -150;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image18_i(),this.btn_5_color_select_1_Img_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_5_color_select_1_Img_i = function () {
		var t = new eui.Image();
		this.btn_5_color_select_1_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_5_color_select_2_i = function () {
		var t = new eui.Group();
		this.group_5_color_select_2 = t;
		t.height = 224;
		t.horizontalCenter = 150;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image19_i(),this.btn_5_color_select_2_Img_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_5_color_select_2_Img_i = function () {
		var t = new eui.Image();
		this.btn_5_color_select_2_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_5_color_select_3_i = function () {
		var t = new eui.Group();
		this.group_5_color_select_3 = t;
		t.height = 224;
		t.horizontalCenter = -250;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image20_i(),this.btn_5_color_select_3_Img_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_5_color_select_3_Img_i = function () {
		var t = new eui.Image();
		this.btn_5_color_select_3_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_5_color_select_4_i = function () {
		var t = new eui.Group();
		this.group_5_color_select_4 = t;
		t.height = 224;
		t.horizontalCenter = 0;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image21_i(),this.btn_5_color_select_4_Img_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_5_color_select_4_Img_i = function () {
		var t = new eui.Image();
		this.btn_5_color_select_4_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_5_color_select_5_i = function () {
		var t = new eui.Group();
		this.group_5_color_select_5 = t;
		t.height = 224;
		t.horizontalCenter = 250;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image22_i(),this.btn_5_color_select_5_Img_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_5_color_select_5_Img_i = function () {
		var t = new eui.Image();
		this.btn_5_color_select_5_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_6_color_select_i = function () {
		var t = new eui.Group();
		this.group_6_color_select = t;
		t.height = 1920;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this.group_6_color_select_1_i(),this.group_6_color_select_2_i(),this.group_6_color_select_3_i(),this.group_6_color_select_4_i(),this.group_6_color_select_5_i(),this.group_6_color_select_6_i()];
		return t;
	};
	_proto.group_6_color_select_1_i = function () {
		var t = new eui.Group();
		this.group_6_color_select_1 = t;
		t.height = 224;
		t.horizontalCenter = -250;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image23_i(),this.btn_6_color_select_1_Img_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_6_color_select_1_Img_i = function () {
		var t = new eui.Image();
		this.btn_6_color_select_1_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_6_color_select_2_i = function () {
		var t = new eui.Group();
		this.group_6_color_select_2 = t;
		t.height = 224;
		t.horizontalCenter = 0;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image24_i(),this.btn_6_color_select_2_Img_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_6_color_select_2_Img_i = function () {
		var t = new eui.Image();
		this.btn_6_color_select_2_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_6_color_select_3_i = function () {
		var t = new eui.Group();
		this.group_6_color_select_3 = t;
		t.height = 224;
		t.horizontalCenter = 250;
		t.verticalCenter = -280;
		t.width = 224;
		t.elementsContent = [this._Image25_i(),this.btn_6_color_select_3_Img_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_6_color_select_3_Img_i = function () {
		var t = new eui.Image();
		this.btn_6_color_select_3_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_6_color_select_4_i = function () {
		var t = new eui.Group();
		this.group_6_color_select_4 = t;
		t.height = 224;
		t.horizontalCenter = -250;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image26_i(),this.btn_6_color_select_4_Img_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_6_color_select_4_Img_i = function () {
		var t = new eui.Image();
		this.btn_6_color_select_4_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_6_color_select_5_i = function () {
		var t = new eui.Group();
		this.group_6_color_select_5 = t;
		t.height = 224;
		t.horizontalCenter = 0;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image27_i(),this.btn_6_color_select_5_Img_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_6_color_select_5_Img_i = function () {
		var t = new eui.Image();
		this.btn_6_color_select_5_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_6_color_select_6_i = function () {
		var t = new eui.Group();
		this.group_6_color_select_6 = t;
		t.height = 224;
		t.horizontalCenter = 250;
		t.verticalCenter = -30;
		t.width = 224;
		t.elementsContent = [this._Image28_i(),this.btn_6_color_select_6_Img_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "bg_icon_png";
		return t;
	};
	_proto.btn_6_color_select_6_Img_i = function () {
		var t = new eui.Image();
		this.btn_6_color_select_6_Img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "icon_renwuhengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.color_select_confirm_btn_i = function () {
		var t = new eui.Group();
		this.color_select_confirm_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.verticalCenter = 252;
		t.visible = false;
		t.width = 427;
		t.x = 322;
		t.y = 363.64;
		t.elementsContent = [this._Image29_i(),this._Label1_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.horizontalCenter = 0;
		t.source = "btn_luse_png";
		t.width = 427;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 120;
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.text = "确定";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 427;
		return t;
	};
	_proto.group_bottom_i = function () {
		var t = new eui.Group();
		this.group_bottom = t;
		t.bottom = 10;
		t.height = 164;
		t.left = 180;
		t.right = 17;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this.group_item0_i(),this.group_item1_i(),this.group_item2_i(),this.group_item3_i(),this.group_item4_i(),this.group_item4_bubble_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.group_item0_i = function () {
		var t = new eui.Group();
		this.group_item0 = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 101;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 130;
		t.y = 98;
		t.elementsContent = [this._Image30_i(),this.img_item0_i(),this.item0_reach_limit_img_i(),this.item_num_group0_i(),this.img_add_0_i(),this.timer0_group_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 12.12;
		return t;
	};
	_proto.img_item0_i = function () {
		var t = new eui.Image();
		this.img_item0 = t;
		t.horizontalCenter = -1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_chuizi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item0_reach_limit_img_i = function () {
		var t = new eui.Image();
		this.item0_reach_limit_img = t;
		t.horizontalCenter = 3;
		t.source = "icon_yidashangxian_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.item_num_group0_i = function () {
		var t = new eui.Group();
		this.item_num_group0 = t;
		t.height = 65;
		t.width = 65;
		t.x = 134;
		t.y = -3;
		t.elementsContent = [this.time_limited_img0_i(),this.item_num_0_i()];
		return t;
	};
	_proto.time_limited_img0_i = function () {
		var t = new eui.Image();
		this.time_limited_img0 = t;
		t.height = 71;
		t.scaleX = 0.93;
		t.scaleY = 0.93;
		t.source = "icon_shuliang_png";
		t.width = 71;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item_num_0_i = function () {
		var t = new eui.Group();
		this.item_num_0 = t;
		t.horizontalCenter = -2.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -1;
		return t;
	};
	_proto.img_add_0_i = function () {
		var t = new eui.Image();
		this.img_add_0 = t;
		t.source = "icon_add_png";
		t.visible = false;
		t.x = 46.67;
		t.y = 19.33;
		return t;
	};
	_proto.timer0_group_i = function () {
		var t = new eui.Group();
		this.timer0_group = t;
		t.bottom = 0;
		t.visible = false;
		t.x = 27;
		t.elementsContent = [this.timer0_img_i(),this.timer0_label_i()];
		return t;
	};
	_proto.timer0_img_i = function () {
		var t = new eui.Image();
		this.timer0_img = t;
		t.height = 58;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_xianshidaoju_png";
		t.width = 158;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timer0_label_i = function () {
		var t = new eui.Label();
		this.timer0_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = -4;
		return t;
	};
	_proto.group_item1_i = function () {
		var t = new eui.Group();
		this.group_item1 = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 101;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 199;
		t.x = 330;
		t.y = 98;
		t.elementsContent = [this._Image31_i(),this.img_item1_i(),this.item1_reach_limit_img_i(),this.item_num_group1_i(),this.img_add_1_i(),this.timer1_group_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 6.06;
		return t;
	};
	_proto.img_item1_i = function () {
		var t = new eui.Image();
		this.img_item1 = t;
		t.horizontalCenter = -8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_weizhijiaohuan_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item1_reach_limit_img_i = function () {
		var t = new eui.Image();
		this.item1_reach_limit_img = t;
		t.horizontalCenter = -10;
		t.source = "icon_yidashangxian_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.item_num_group1_i = function () {
		var t = new eui.Group();
		this.item_num_group1 = t;
		t.height = 65;
		t.width = 65;
		t.x = 134;
		t.y = -3;
		t.elementsContent = [this.time_limited_img1_i(),this.item_num_1_i()];
		return t;
	};
	_proto.time_limited_img1_i = function () {
		var t = new eui.Image();
		this.time_limited_img1 = t;
		t.height = 71;
		t.scaleX = 0.93;
		t.scaleY = 0.93;
		t.source = "icon_shuliang_png";
		t.width = 71;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item_num_1_i = function () {
		var t = new eui.Group();
		this.item_num_1 = t;
		t.horizontalCenter = -2.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -1;
		return t;
	};
	_proto.img_add_1_i = function () {
		var t = new eui.Image();
		this.img_add_1 = t;
		t.source = "icon_add_png";
		t.visible = false;
		t.x = 46.67;
		t.y = 19.33;
		return t;
	};
	_proto.timer1_group_i = function () {
		var t = new eui.Group();
		this.timer1_group = t;
		t.bottom = 0;
		t.visible = false;
		t.x = 21;
		t.elementsContent = [this.timer1_img_i(),this.timer1_label_i()];
		return t;
	};
	_proto.timer1_img_i = function () {
		var t = new eui.Image();
		this.timer1_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer1_label_i = function () {
		var t = new eui.Label();
		this.timer1_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = -4;
		return t;
	};
	_proto.group_item2_i = function () {
		var t = new eui.Group();
		this.group_item2 = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 101;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 530;
		t.y = 98;
		t.elementsContent = [this._Image32_i(),this.img_item2_i(),this.item2_reach_limit_img_i(),this.item_num_group2_i(),this.img_add_2_i(),this.timer2_group_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 6.06;
		return t;
	};
	_proto.img_item2_i = function () {
		var t = new eui.Image();
		this.img_item2 = t;
		t.horizontalCenter = -8.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_mobang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item2_reach_limit_img_i = function () {
		var t = new eui.Image();
		this.item2_reach_limit_img = t;
		t.horizontalCenter = 0;
		t.source = "icon_yidashangxian_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.item_num_group2_i = function () {
		var t = new eui.Group();
		this.item_num_group2 = t;
		t.height = 65;
		t.width = 65;
		t.x = 134;
		t.y = -3;
		t.elementsContent = [this.time_limited_img2_i(),this.item_num_2_i()];
		return t;
	};
	_proto.time_limited_img2_i = function () {
		var t = new eui.Image();
		this.time_limited_img2 = t;
		t.height = 71;
		t.scaleX = 0.93;
		t.scaleY = 0.93;
		t.source = "icon_shuliang_png";
		t.width = 71;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item_num_2_i = function () {
		var t = new eui.Group();
		this.item_num_2 = t;
		t.horizontalCenter = -2.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -1;
		return t;
	};
	_proto.img_add_2_i = function () {
		var t = new eui.Image();
		this.img_add_2 = t;
		t.source = "icon_add_png";
		t.visible = false;
		t.x = 46.67;
		t.y = 19.33;
		return t;
	};
	_proto.timer2_group_i = function () {
		var t = new eui.Group();
		this.timer2_group = t;
		t.bottom = 0;
		t.visible = false;
		t.x = 21;
		t.elementsContent = [this.timer2_img_i(),this.timer2_label_i()];
		return t;
	};
	_proto.timer2_img_i = function () {
		var t = new eui.Image();
		this.timer2_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer2_label_i = function () {
		var t = new eui.Label();
		this.timer2_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = -4;
		return t;
	};
	_proto.group_item3_i = function () {
		var t = new eui.Group();
		this.group_item3 = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 101;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.x = 730;
		t.y = 98;
		t.elementsContent = [this.group_item3_col_i(),this.group_item3_row_i(),this.group_item3_normal_i()];
		return t;
	};
	_proto.group_item3_col_i = function () {
		var t = new eui.Group();
		this.group_item3_col = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this._Image33_i(),this._Image34_i(),this.label_item3_col_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 12.12;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 6.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_tiezhi_png";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.label_item3_col_i = function () {
		var t = new eui.Label();
		this.label_item3_col = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0x653719;
		t.textColor = 0xffffff;
		t.x = 26.68;
		t.y = 140.69;
		return t;
	};
	_proto.group_item3_row_i = function () {
		var t = new eui.Group();
		this.group_item3_row = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this._Image35_i(),this._Image36_i(),this.label_item3_row_i()];
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 12.12;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 2.5;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_tiezhi_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.label_item3_row_i = function () {
		var t = new eui.Label();
		this.label_item3_row = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0x653719;
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 26.68;
		t.y = 140.71;
		return t;
	};
	_proto.group_item3_normal_i = function () {
		var t = new eui.Group();
		this.group_item3_normal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.elementsContent = [this._Image37_i(),this.img_item3_i(),this.item3_reach_limit_img_i(),this.item_num_group3_i(),this.img_add_3_i(),this.timer3_group_i()];
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 12.12;
		return t;
	};
	_proto.img_item3_i = function () {
		var t = new eui.Image();
		this.img_item3 = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_tiezhi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item3_reach_limit_img_i = function () {
		var t = new eui.Image();
		this.item3_reach_limit_img = t;
		t.horizontalCenter = 3;
		t.source = "icon_yidashangxian_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.item_num_group3_i = function () {
		var t = new eui.Group();
		this.item_num_group3 = t;
		t.height = 65;
		t.width = 65;
		t.x = 134;
		t.y = -3;
		t.elementsContent = [this.time_limited_img3_i(),this.item_num_3_i()];
		return t;
	};
	_proto.time_limited_img3_i = function () {
		var t = new eui.Image();
		this.time_limited_img3 = t;
		t.height = 71;
		t.scaleX = 0.93;
		t.scaleY = 0.93;
		t.source = "icon_shuliang_png";
		t.width = 71;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item_num_3_i = function () {
		var t = new eui.Group();
		this.item_num_3 = t;
		t.horizontalCenter = -2.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -1;
		return t;
	};
	_proto.img_add_3_i = function () {
		var t = new eui.Image();
		this.img_add_3 = t;
		t.source = "icon_add_png";
		t.visible = false;
		t.x = 46.67;
		t.y = 19.33;
		return t;
	};
	_proto.timer3_group_i = function () {
		var t = new eui.Group();
		this.timer3_group = t;
		t.bottom = 0;
		t.visible = false;
		t.x = 27;
		t.elementsContent = [this.timer3_img_i(),this.timer3_label_i()];
		return t;
	};
	_proto.timer3_img_i = function () {
		var t = new eui.Image();
		this.timer3_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer3_label_i = function () {
		var t = new eui.Label();
		this.timer3_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "";
		t.textColor = 0xffffff;
		t.verticalCenter = -4;
		return t;
	};
	_proto.group_item4_i = function () {
		var t = new eui.Group();
		this.group_item4 = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 101;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.x = 100;
		t.y = 98;
		t.elementsContent = [this.group_item4_normal0_i()];
		return t;
	};
	_proto.group_item4_normal0_i = function () {
		var t = new eui.Group();
		this.group_item4_normal0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.elementsContent = [this._Image38_i(),this.img_item4_i(),this.item4_reach_limit_img_i(),this.item_num_group4_i(),this.img_add_4_i(),this.timer4_group_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.source = "icon_daoju_png";
		t.width = 170;
		t.x = 12.12;
		return t;
	};
	_proto.img_item4_i = function () {
		var t = new eui.Image();
		this.img_item4 = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_tiezhi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item4_reach_limit_img_i = function () {
		var t = new eui.Image();
		this.item4_reach_limit_img = t;
		t.horizontalCenter = 3;
		t.source = "icon_yidashangxian_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.item_num_group4_i = function () {
		var t = new eui.Group();
		this.item_num_group4 = t;
		t.height = 65;
		t.width = 65;
		t.x = 134;
		t.y = -3;
		t.elementsContent = [this.time_limited_img4_i(),this.item_num_4_i()];
		return t;
	};
	_proto.time_limited_img4_i = function () {
		var t = new eui.Image();
		this.time_limited_img4 = t;
		t.height = 71;
		t.scaleX = 0.93;
		t.scaleY = 0.93;
		t.source = "icon_shuliang_png";
		t.width = 71;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item_num_4_i = function () {
		var t = new eui.Group();
		this.item_num_4 = t;
		t.horizontalCenter = -2.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.verticalCenter = -1;
		return t;
	};
	_proto.img_add_4_i = function () {
		var t = new eui.Image();
		this.img_add_4 = t;
		t.source = "icon_add_png";
		t.visible = false;
		t.x = 46.67;
		t.y = 19.33;
		return t;
	};
	_proto.timer4_group_i = function () {
		var t = new eui.Group();
		this.timer4_group = t;
		t.bottom = 0;
		t.visible = false;
		t.x = 27;
		t.elementsContent = [this.timer4_img_i(),this.timer4_label_i()];
		return t;
	};
	_proto.timer4_img_i = function () {
		var t = new eui.Image();
		this.timer4_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer4_label_i = function () {
		var t = new eui.Label();
		this.timer4_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 1;
		t.strokeColor = 0x3B2372;
		t.text = "";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -4;
		return t;
	};
	_proto.group_item4_bubble_i = function () {
		var t = new eui.Group();
		this.group_item4_bubble = t;
		t.anchorOffsetX = 310.67;
		t.anchorOffsetY = 78.67;
		t.height = 80;
		t.visible = false;
		t.width = 400;
		t.x = 180;
		t.y = 3.07;
		t.elementsContent = [this._Image39_i(),this.item4_bubble_text_i()];
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1.1;
		t.scaleY = 1;
		t.source = "bg_qipaodi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item4_bubble_text_i = function () {
		var t = new eui.Label();
		this.item4_bubble_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 49.33;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "使用后很容易就过关了";
		t.textAlign = "center";
		t.textColor = 0xa0582d;
		t.verticalAlign = "middle";
		t.verticalCenter = -6;
		t.width = 344;
		return t;
	};
	_proto._settingBgGroup_i = function () {
		var t = new eui.Group();
		this._settingBgGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._group_item4_bubble_bg_i = function () {
		var t = new eui.Group();
		this._group_item4_bubble_bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.setting_group_i = function () {
		var t = new eui.Group();
		this.setting_group = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 60;
		t.bottom = 8;
		t.height = 700;
		t.left = 32;
		t.touchEnabled = false;
		t.width = 144;
		t.elementsContent = [this.bg_shezhi_i(),this.group_exit_i(),this.group_question_i(),this.group_sound_effect_i(),this.group_sound_bg_i(),this.group_remider_i(),this.setting_btn_i()];
		return t;
	};
	_proto.bg_shezhi_i = function () {
		var t = new eui.Image();
		this.bg_shezhi = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 594.5;
		t.bottom = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(60,74,0,31);
		t.source = "bg_shezhi_png";
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto.group_exit_i = function () {
		var t = new eui.Group();
		this.group_exit = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.y = 638;
		t.elementsContent = [this._Image40_i()];
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_tuichu_png";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.group_question_i = function () {
		var t = new eui.Group();
		this.group_question = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.y = 638;
		t.elementsContent = [this._Image41_i()];
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_wenhao_png";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.group_sound_effect_i = function () {
		var t = new eui.Group();
		this.group_sound_effect = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.y = 638;
		t.elementsContent = [this._Image42_i(),this.sound_eff_disable_i()];
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_yinxiao_png";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.sound_eff_disable_i = function () {
		var t = new eui.Image();
		this.sound_eff_disable = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_shezhiguanbi_png";
		t.x = 76;
		t.y = 72;
		return t;
	};
	_proto.group_sound_bg_i = function () {
		var t = new eui.Group();
		this.group_sound_bg = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 60;
		t.height = 121;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.visible = false;
		t.width = 120;
		t.y = 638;
		t.elementsContent = [this._Image43_i(),this.sound_bg_disable_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_yinyue_png";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.sound_bg_disable_i = function () {
		var t = new eui.Image();
		this.sound_bg_disable = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_shezhiguanbi_png";
		t.x = 76;
		t.y = 72;
		return t;
	};
	_proto.group_remider_i = function () {
		var t = new eui.Group();
		this.group_remider = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 60;
		t.height = 121;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 305;
		t.visible = false;
		t.width = 120;
		t.elementsContent = [this._Image44_i(),this.remider_disable_i()];
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_tongzhi_png";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.remider_disable_i = function () {
		var t = new eui.Image();
		this.remider_disable = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "icon_shezhiguanbi_png";
		t.x = 76;
		t.y = 72;
		return t;
	};
	_proto.setting_btn_i = function () {
		var t = new eui.Group();
		this.setting_btn = t;
		t.anchorOffsetX = 49.5;
		t.anchorOffsetY = 49;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.verticalCenter = 290;
		t.y = 638;
		t.elementsContent = [this._Image45_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 49.5;
		t.anchorOffsetY = 99;
		t.horizontalCenter = -1;
		t.source = "icon_setting_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_newuser_redpacket_i = function () {
		var t = new eui.Group();
		this.group_newuser_redpacket = t;
		t.anchorOffsetX = 355;
		t.anchorOffsetY = 114;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 227;
		t.elementsContent = [this._Image46_i(),this.label_redpacket1_i(),this.label_redpacket2_i()];
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(151,0,12,114);
		t.source = "hongbao_png";
		t.width = 700;
		t.y = 0;
		return t;
	};
	_proto.label_redpacket1_i = function () {
		var t = new eui.Label();
		this.label_redpacket1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.textColor = 0xa0582d;
		t.x = 160.68;
		t.y = 38.67;
		return t;
	};
	_proto.label_redpacket2_i = function () {
		var t = new eui.Label();
		this.label_redpacket2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.textColor = 0xed380e;
		t.x = 414.58;
		t.y = 35.67;
		return t;
	};
	_proto.group_first_ten_i = function () {
		var t = new eui.Group();
		this.group_first_ten = t;
		t.anchorOffsetX = 350;
		t.anchorOffsetY = 114;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 327;
		t.elementsContent = [this._Image47_i(),this.label_first_ten_i()];
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(153,68,11,46);
		t.source = "hongbao_png";
		t.width = 720;
		t.y = 0;
		return t;
	};
	_proto.label_first_ten_i = function () {
		var t = new eui.Label();
		this.label_first_ten = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 80;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xA0582D;
		t.verticalAlign = "middle";
		t.width = 560;
		t.x = 150;
		t.y = 18.94;
		return t;
	};
	_proto.group_get_cash_i = function () {
		var t = new eui.Group();
		this.group_get_cash = t;
		t.anchorOffsetX = 350;
		t.anchorOffsetY = 114;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 327;
		t.elementsContent = [this._Image48_i(),this.label_get_cash_i()];
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(153,68,11,46);
		t.source = "hongbao_png";
		t.width = 720;
		t.y = 0;
		return t;
	};
	_proto.label_get_cash_i = function () {
		var t = new eui.Label();
		this.label_get_cash = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 80;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xA0582D;
		t.verticalAlign = "middle";
		t.width = 560;
		t.x = 150;
		t.y = 18.94;
		return t;
	};
	_proto.guide_area_i = function () {
		var t = new eui.Group();
		this.guide_area = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.group_item_tip_i = function () {
		var t = new eui.Group();
		this.group_item_tip = t;
		t.anchorOffsetY = 0;
		t.height = 211;
		t.horizontalCenter = 0;
		t.top = 45;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 1080;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group5_i(),this.item_img_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 211;
		t.width = 443;
		t.x = 184;
		t.y = 0;
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this.item_tip_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.item_tip_i = function () {
		var t = new eui.Label();
		this.item_tip = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = -32;
		t.lineSpacing = 20;
		t.right = 25;
		t.size = 48;
		t.textAlign = "center";
		t.textColor = 0xfefefe;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.item_img_i = function () {
		var t = new eui.Image();
		this.item_img = t;
		t.scaleX = 1.7;
		t.scaleY = 1.7;
		t.source = "icon_chuizi_png";
		t.x = 804.61;
		t.y = -9;
		return t;
	};
	_proto.group_shuffle_i = function () {
		var t = new eui.Group();
		this.group_shuffle = t;
		t.cacheAsBitmap = false;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this._Image49_i(),this.label_shuffle_i()];
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.horizontalCenter = 0;
		t.source = "bg_tishi_png";
		t.width = 1080;
		t.y = 0;
		return t;
	};
	_proto.label_shuffle_i = function () {
		var t = new eui.Label();
		this.label_shuffle = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "";
		t.textColor = 0x8a5036;
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_mode1_i = function () {
		var t = new eui.Group();
		this.group_mode1 = t;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 799;
		t.elementsContent = [this._Image50_i(),this.mode1_score1_i(),this.mode1_score2_i(),this.mode1_score3_i(),this._Scroller1_i(),this.charImg1_i()];
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.horizontalCenter = 0;
		t.source = "bg_tishi_png";
		t.width = 1080;
		return t;
	};
	_proto.mode1_score1_i = function () {
		var t = new eui.Label();
		this.mode1_score1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 52;
		t.textColor = 0x8a5036;
		t.x = 449;
		t.y = 134;
		return t;
	};
	_proto.mode1_score2_i = function () {
		var t = new eui.Label();
		this.mode1_score2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 52;
		t.textColor = 0x8A5036;
		t.x = 609;
		t.y = 134;
		return t;
	};
	_proto.mode1_score3_i = function () {
		var t = new eui.Label();
		this.mode1_score3 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 52;
		t.textColor = 0x8A5036;
		t.x = 857;
		t.y = 134;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 470;
		t.touchEnabled = false;
		t.width = 313;
		t.y = -184.1;
		t.viewport = this.charEffHolder1_i();
		return t;
	};
	_proto.charEffHolder1_i = function () {
		var t = new eui.Group();
		this.charEffHolder1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = false;
		return t;
	};
	_proto.charImg1_i = function () {
		var t = new eui.Image();
		this.charImg1 = t;
		t.source = "girl1_png";
		t.visible = false;
		t.y = -184.1;
		return t;
	};
	_proto.group_mode2_i = function () {
		var t = new eui.Group();
		this.group_mode2 = t;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 799;
		t.elementsContent = [this._Image51_i(),this.label_mode2_tips1_i(),this.label_mode2_tips2_i(),this.target_mode2_1_i(),this._Scroller2_i(),this.charImg2_i()];
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.horizontalCenter = 0;
		t.source = "bg_tishi_png";
		t.width = 1080;
		return t;
	};
	_proto.label_mode2_tips1_i = function () {
		var t = new eui.Label();
		this.label_mode2_tips1 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 73.21;
		t.horizontalCenter = 36;
		t.size = 52;
		t.textColor = 0x8a5036;
		t.verticalCenter = 10.5;
		return t;
	};
	_proto.label_mode2_tips2_i = function () {
		var t = new eui.Label();
		this.label_mode2_tips2 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 73.21;
		t.horizontalCenter = 372;
		t.size = 52;
		t.textColor = 0x8A5036;
		t.verticalCenter = 8.5;
		return t;
	};
	_proto.target_mode2_1_i = function () {
		var t = new eui.Image();
		this.target_mode2_1 = t;
		t.source = "icon_renwucao_png";
		t.x = 715.57;
		t.y = 104;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 470;
		t.touchEnabled = false;
		t.width = 313;
		t.y = -184.1;
		t.viewport = this.charEffHolder2_i();
		return t;
	};
	_proto.charEffHolder2_i = function () {
		var t = new eui.Group();
		this.charEffHolder2 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = false;
		return t;
	};
	_proto.charImg2_i = function () {
		var t = new eui.Image();
		this.charImg2 = t;
		t.source = "girl1_png";
		t.visible = false;
		t.y = -184.1;
		return t;
	};
	_proto.group_mode3_i = function () {
		var t = new eui.Group();
		this.group_mode3 = t;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 799;
		t.elementsContent = [this._Image52_i(),this.label_mode3_tips1_i(),this.label_mode3_tips2_i(),this.target_mode3_1_i(),this.target_mode3_2_i(),this._Scroller3_i(),this.charImg3_i()];
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.horizontalCenter = 0;
		t.source = "bg_tishi_png";
		t.width = 1080;
		return t;
	};
	_proto.label_mode3_tips1_i = function () {
		var t = new eui.Label();
		this.label_mode3_tips1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -20;
		t.size = 52;
		t.textColor = 0x8a5036;
		t.verticalCenter = 0;
		return t;
	};
	_proto.label_mode3_tips2_i = function () {
		var t = new eui.Label();
		this.label_mode3_tips2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 409.5;
		t.size = 52;
		t.textColor = 0x8A5036;
		t.verticalCenter = 0;
		return t;
	};
	_proto.target_mode3_1_i = function () {
		var t = new eui.Image();
		this.target_mode3_1 = t;
		t.source = "lantern_1_png";
		t.x = 649.52;
		t.y = 104;
		return t;
	};
	_proto.target_mode3_2_i = function () {
		var t = new eui.Image();
		this.target_mode3_2 = t;
		t.source = "lantern_2_png";
		t.x = 745.28;
		t.y = 102;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.height = 470;
		t.touchEnabled = false;
		t.width = 313;
		t.y = -184.1;
		t.viewport = this.charEffHolder3_i();
		return t;
	};
	_proto.charEffHolder3_i = function () {
		var t = new eui.Group();
		this.charEffHolder3 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = false;
		return t;
	};
	_proto.charImg3_i = function () {
		var t = new eui.Image();
		this.charImg3 = t;
		t.source = "girl1_png";
		t.visible = false;
		t.y = -184.1;
		return t;
	};
	_proto.group_mode4_i = function () {
		var t = new eui.Group();
		this.group_mode4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.visible = false;
		t.width = 1080;
		t.x = 0;
		t.y = 799;
		t.elementsContent = [this._Image53_i(),this.label_mode4_tips_i(),this._Scroller4_i(),this.charImg4_i(),this.group_start_target_i()];
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.horizontalCenter = 0;
		t.source = "bg_tishi_png";
		t.width = 1080;
		return t;
	};
	_proto.label_mode4_tips_i = function () {
		var t = new eui.Label();
		this.label_mode4_tips = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 142.5;
		t.size = 52;
		t.textColor = 0x8a5036;
		t.verticalCenter = -76;
		return t;
	};
	_proto._Scroller4_i = function () {
		var t = new eui.Scroller();
		t.height = 470;
		t.touchEnabled = false;
		t.width = 313;
		t.y = -184.1;
		t.viewport = this.charEffHolder4_i();
		return t;
	};
	_proto.charEffHolder4_i = function () {
		var t = new eui.Group();
		this.charEffHolder4 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = false;
		return t;
	};
	_proto.charImg4_i = function () {
		var t = new eui.Image();
		this.charImg4 = t;
		t.source = "girl1_png";
		t.visible = false;
		t.y = -184.1;
		return t;
	};
	_proto.group_start_target_i = function () {
		var t = new eui.Group();
		this.group_start_target = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 640;
		t.x = 330.61;
		t.y = 112.3;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 100;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.group_skip_i = function () {
		var t = new eui.Group();
		this.group_skip = t;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 1080;
		t.elementsContent = [this._Image54_i(),this.label_skip_i()];
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 6;
		t.source = "icon_diancitiaoguo_png";
		return t;
	};
	_proto.label_skip_i = function () {
		var t = new eui.Label();
		this.label_skip = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.stroke = 3;
		t.strokeColor = 0x924a17;
		t.text = "點擊此處跳過";
		t.textColor = 0xfffdec;
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_tips_i = function () {
		var t = new eui.Group();
		this.group_tips = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1080;
		t.elementsContent = [this._Image55_i()];
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 13.78;
		t.visible = false;
		t.width = 20;
		t.x = 496;
		t.y = 489;
		return t;
	};
	_proto.fps_label_i = function () {
		var t = new eui.Label();
		this.fps_label = t;
		t.bold = true;
		t.size = 60;
		t.text = "";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		return t;
	};
	return GameWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GuideSkin.exml'] = window.GuideSkin = (function (_super) {
	__extends(GuideSkin, _super);
	function GuideSkin() {
		_super.call(this);
		this.skinParts = ["_guideLayerout","_guideText1","_guideImg","_guideText2","_guideImg2","_guideText3","_guideGroup","_guideText4","_guideText","_guideBanner","guide_redbag_1","guide_redbag_2","guide_redbag_3","_redBagGuide","_skipBtn","_touchText","_charImg","_charEffHolder","_charHolder","_skipLabel"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this._guideBanner_i(),this._redBagGuide_i(),this._skipBtn_i(),this._touchText_i(),this._charHolder_i(),this._skipLabel_i()];
	}
	var _proto = GuideSkin.prototype;

	_proto._guideBanner_i = function () {
		var t = new eui.Group();
		this._guideBanner = t;
		t.touchEnabled = false;
		t.visible = false;
		t.y = 400;
		t.elementsContent = [this._Image1_i(),this._guideGroup_i(),this._guideText4_i(),this._guideText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.source = "bg_tishi_png";
		t.touchEnabled = false;
		t.width = 1080;
		return t;
	};
	_proto._guideGroup_i = function () {
		var t = new eui.Group();
		this._guideGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221.57;
		t.touchEnabled = false;
		t.width = 712;
		t.x = 311.68;
		t.y = -2.51;
		t.layout = this._guideLayerout_i();
		t.elementsContent = [this._guideText1_i(),this._guideImg_i(),this._guideText2_i(),this._guideImg2_i(),this._guideText3_i()];
		return t;
	};
	_proto._guideLayerout_i = function () {
		var t = new eui.HorizontalLayout();
		this._guideLayerout = t;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._guideText1_i = function () {
		var t = new eui.Label();
		this._guideText1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._guideImg_i = function () {
		var t = new eui.Image();
		this._guideImg = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ele_blue_png";
		return t;
	};
	_proto._guideText2_i = function () {
		var t = new eui.Label();
		this._guideText2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._guideImg2_i = function () {
		var t = new eui.Image();
		this._guideImg2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "ele_blue_png";
		return t;
	};
	_proto._guideText3_i = function () {
		var t = new eui.Label();
		this._guideText3 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._guideText4_i = function () {
		var t = new eui.Label();
		this._guideText4 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.lineSpacing = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "4444";
		t.textAlign = "center";
		t.textColor = 0x8A5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 714;
		t.x = 300;
		t.y = 187.46;
		return t;
	};
	_proto._guideText_i = function () {
		var t = new eui.Label();
		this._guideText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 221.57;
		t.lineSpacing = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0x8A5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 712;
		t.x = 298;
		t.y = 48.7;
		return t;
	};
	_proto._redBagGuide_i = function () {
		var t = new eui.Group();
		this._redBagGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.elementsContent = [this.guide_redbag_1_i(),this.guide_redbag_2_i(),this.guide_redbag_3_i()];
		return t;
	};
	_proto.guide_redbag_1_i = function () {
		var t = new eui.Group();
		this.guide_redbag_1 = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 215;
		t.horizontalCenter = 0;
		t.verticalCenter = -266;
		t.width = 185;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 110;
		t.rotation = 22;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -5;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "fund_hongbaodakai_png";
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 19;
		t.source = "guide_zuigao_png";
		t.verticalCenter = -45;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 66;
		t.text = "¥30";
		t.textColor = 0xec2515;
		t.verticalCenter = -59.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -110;
		t.rotation = -22;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = -5;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "fund_hongbaodakai_png";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 32;
		t.source = "guide_zuigao_png";
		t.verticalCenter = -58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 66;
		t.text = "¥30";
		t.textColor = 0xec2515;
		t.verticalCenter = -59.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "fund_hongbaodakai_png";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = 32;
		t.source = "guide_zuigao_png";
		t.verticalCenter = -58;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 8;
		t.size = 66;
		t.text = "¥30";
		t.textColor = 0xec2515;
		t.verticalCenter = -61.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "guide_dotted_line2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 14;
		t.size = 48;
		t.text = "玩游戏就能领取微信现金啦！";
		t.textColor = 0xfffcd5;
		t.verticalCenter = 0;
		return t;
	};
	_proto.guide_redbag_2_i = function () {
		var t = new eui.Group();
		this.guide_redbag_2 = t;
		t.anchorOffsetX = 693.65;
		t.anchorOffsetY = 272.35;
		t.height = 159;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.visible = false;
		t.width = 669;
		t.x = 991;
		t.y = 1166;
		t.elementsContent = [this._Image9_i(),this._Label5_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "guide_dotted_line1_png";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 159;
		t.horizontalCenter = -1.5;
		t.lineSpacing = 5;
		t.size = 48;
		t.text = "消除带有红包的元素就可以收集现金啦~";
		t.textAlign = "left";
		t.textColor = 0xfff495;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 585;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = -91;
		t.horizontalCenter = 275;
		t.source = "guide_dotted_arrow_png";
		return t;
	};
	_proto.guide_redbag_3_i = function () {
		var t = new eui.Group();
		this.guide_redbag_3 = t;
		t.height = 267;
		t.visible = false;
		t.width = 725;
		t.x = 35;
		t.y = 25;
		t.elementsContent = [this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 179;
		t.width = 215;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleY = 1;
		t.source = "guide_redbeg_icon_png";
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = -13;
		t.horizontalCenter = 0;
		t.source = "bg_guanqiadi_png";
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "non_10_1_png";
		t.verticalCenter = 82.5;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -19.5;
		t.source = "non_11_x_png";
		t.verticalCenter = 42;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 11.5;
		t.source = "non_11_3_png";
		t.verticalCenter = 42;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 159;
		t.horizontalCenter = 238;
		t.verticalCenter = 130;
		t.width = 669;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Label6_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -303;
		t.scaleX = -1;
		t.scaleY = -1;
		t.source = "guide_dotted_arrow_png";
		t.top = -91;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "guide_dotted_line1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.left = 16;
		t.lineSpacing = 5;
		t.right = 0;
		t.size = 48;
		t.text = "红包越多过关后提现的微信现金越多~";
		t.textAlign = "left";
		t.textColor = 0xfff495;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._skipBtn_i = function () {
		var t = new eui.Group();
		this._skipBtn = t;
		t.anchorOffsetX = 171;
		t.anchorOffsetY = 48;
		t.bottom = 78;
		t.height = 96;
		t.visible = false;
		t.width = 342;
		t.x = 540;
		t.elementsContent = [this._Image18_i(),this._Label7_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btn_fenchang_png";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xbd0c57;
		t.text = "跳过";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._touchText_i = function () {
		var t = new eui.Label();
		this._touchText = t;
		t.bottom = 224;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "点击任意位置，继续游戏";
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto._charHolder_i = function () {
		var t = new eui.Scroller();
		this._charHolder = t;
		t.height = 470;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 320;
		t.y = 1020;
		t.viewport = this._charEffHolder_i();
		return t;
	};
	_proto._charEffHolder_i = function () {
		var t = new eui.Group();
		this._charEffHolder = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = false;
		t.elementsContent = [this._charImg_i()];
		return t;
	};
	_proto._charImg_i = function () {
		var t = new eui.Image();
		this._charImg = t;
		t.touchEnabled = false;
		t.visible = false;
		return t;
	};
	_proto._skipLabel_i = function () {
		var t = new eui.Label();
		this._skipLabel = t;
		t.bottom = 62;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "跳过";
		t.visible = false;
		t.x = 46;
		return t;
	};
	return GuideSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ItemLockWindowSkin.exml'] = window.ItemLockWindowSkin = (function (_super) {
	__extends(ItemLockWindowSkin, _super);
	function ItemLockWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","group_close","group_all"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_all_i()];
	}
	var _proto = ItemLockWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,16,11);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -20;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_close_i(),this._Label1_i(),this._Label2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 425;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.source = "bg_tanchuang_4_png";
		t.touchEnabled = true;
		t.width = 934;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(79,0,23,125);
		t.source = "bg_titledi_png";
		t.width = 538;
		t.y = -42.68;
		return t;
	};
	_proto.group_close_i = function () {
		var t = new eui.Image();
		this.group_close = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 54;
		t.source = "icon_guanbi_1_png";
		t.x = 914.5;
		t.y = 36.33;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 66;
		t.horizontalCenter = 0.5;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.text = "此道具已被锁定!";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "justify";
		t.width = 500;
		t.y = -12.67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 115;
		t.lineSpacing = 20;
		t.size = 42;
		t.text = "别担心！你尚未解锁，继续游戏便可解锁道具！";
		t.textColor = 0x8a5036;
		t.width = 515;
		t.x = 90.31;
		t.y = 162.36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bg_nvzhujue_png";
		t.x = 640.25;
		t.y = 55.55;
		return t;
	};
	return ItemLockWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ItemRewardWindowSkin.exml'] = window.ItemRewardWindowSkin = (function (_super) {
	__extends(ItemRewardWindowSkin, _super);
	function ItemRewardWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","skip_btn","start_btn_text","ok_btn","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = ItemRewardWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this.skip_btn_i(),this.ok_btn_i()];
		return t;
	};
	_proto.skip_btn_i = function () {
		var t = new eui.Group();
		this.skip_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.ok_btn_i = function () {
		var t = new eui.Group();
		this.ok_btn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.touchEnabled = true;
		t.x = 534;
		t.y = 1523;
		t.elementsContent = [this._Image1_i(),this.start_btn_text_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 213.5;
		t.anchorOffsetY = 60;
		t.source = "btn_luchang_png";
		t.touchEnabled = false;
		t.x = 213.5;
		t.y = 60;
		return t;
	};
	_proto.start_btn_text_i = function () {
		var t = new eui.Label();
		this.start_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 72;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.text = "好的";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = -4;
		return t;
	};
	return ItemRewardWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ItemSupplyWindowSkin.exml'] = window.ItemSupplyWindowSkin = (function (_super) {
	__extends(ItemSupplyWindowSkin, _super);
	function ItemSupplyWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_bg","_desc","reward_group","btn_text","group_btnuse","btn_text_buy","group_btnbuy","group_close","_label_not_use","main_group"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.main_group_i()];
	}
	var _proto = ItemSupplyWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.main_group_i = function () {
		var t = new eui.Group();
		this.main_group = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._bg_i(),this._desc_i(),this._Image1_i(),this.reward_group_i(),this.group_btnuse_i(),this.group_btnbuy_i(),this.group_close_i(),this._label_not_use_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.height = 870;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_tanchuang_4_png";
		t.width = 935;
		t.y = 445;
		return t;
	};
	_proto._desc_i = function () {
		var t = new eui.Label();
		this._desc = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 120;
		t.horizontalCenter = 0;
		t.lineSpacing = 15;
		t.size = 46;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.width = 750;
		t.y = 552;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -26;
		t.source = "text_itemsupply_png";
		t.y = 322.16;
		return t;
	};
	_proto.reward_group_i = function () {
		var t = new eui.Group();
		this.reward_group = t;
		t.height = 330;
		t.horizontalCenter = 0;
		t.width = 900;
		t.y = 689.3;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 280;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(39,39,22,22);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_tanchuang_5_png";
		t.width = 854;
		t.y = 20.64;
		return t;
	};
	_proto.group_btnuse_i = function () {
		var t = new eui.Group();
		this.group_btnuse = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.horizontalCenter = 0.5;
		t.touchEnabled = true;
		t.y = 1108;
		t.elementsContent = [this._Image3_i(),this.btn_text_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.source = "btn_huangchang_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_text_i = function () {
		var t = new eui.Label();
		this.btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "使用道具重试";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = -2;
		return t;
	};
	_proto.group_btnbuy_i = function () {
		var t = new eui.Group();
		this.group_btnbuy = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.horizontalCenter = 0.5;
		t.touchEnabled = true;
		t.visible = false;
		t.y = 1108;
		t.elementsContent = [this._Image4_i(),this.btn_text_buy_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.source = "btn_huangchang_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_text_buy_i = function () {
		var t = new eui.Label();
		this.btn_text_buy = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xC26807;
		t.text = "50兑换";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 169;
		t.y = 31;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_zuanshi_png";
		t.x = 77.56;
		t.y = 21.28;
		return t;
	};
	_proto.group_close_i = function () {
		var t = new eui.Image();
		this.group_close = t;
		t.source = "icon_guanbi_1_png";
		t.x = 919.32;
		t.y = 426.02;
		return t;
	};
	_proto._label_not_use_i = function () {
		var t = new eui.Label();
		this._label_not_use = t;
		t.bold = true;
		t.border = false;
		t.borderColor = 0xa07a57;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.italic = false;
		t.size = 45;
		t.text = "";
		t.textColor = 0xa07a57;
		t.y = 1177.44;
		return t;
	};
	return ItemSupplyWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/MovesTargetComponentSkin.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = ["_targetNumGroup"];
		
		this.height = 200;
		this.width = 620;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._targetNumGroup_i()];
	}
	var _proto = $exmlClass1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 177;
		t.source = "icon_chahao_png";
		t.y = 12;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 177;
		t.size = 48;
		t.text = "获得分数";
		t.textColor = 0x095483;
		t.y = 16;
		return t;
	};
	_proto._targetNumGroup_i = function () {
		var t = new eui.Group();
		this._targetNumGroup = t;
		t.height = 60;
		t.width = 620;
		t.x = 0;
		t.y = 100;
		return t;
	};
	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/skins/ObjectTargetComponentSkin.exml'] = window.ObjectTargetComponentSkin = (function (_super) {
	__extends(ObjectTargetComponentSkin, _super);
	function ObjectTargetComponentSkin() {
		_super.call(this);
		this.skinParts = ["_targetImg","_statusImg","_targetNumGroup"];
		
		this.height = 210;
		this.width = 210;
		this.elementsContent = [this._targetImg_i(),this._statusImg_i(),this._targetNumGroup_i()];
	}
	var _proto = ObjectTargetComponentSkin.prototype;

	_proto._targetImg_i = function () {
		var t = new eui.Image();
		this._targetImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_renwucao_png";
		t.verticalCenter = -33;
		return t;
	};
	_proto._statusImg_i = function () {
		var t = new eui.Image();
		this._statusImg = t;
		t.horizontalCenter = 47;
		t.source = "icon_chahao_png";
		t.verticalCenter = 2;
		return t;
	};
	_proto._targetNumGroup_i = function () {
		var t = new eui.Group();
		this._targetNumGroup = t;
		t.anchorOffsetX = -0.5;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.width = 210;
		t.x = -0.5;
		t.y = 143.2;
		return t;
	};
	return ObjectTargetComponentSkin;
})(eui.Skin);generateEUI.paths['resource/skins/OpenMapPacketWindowSkin.exml'] = window.OpenMapPacketWindowSkin = (function (_super) {
	__extends(OpenMapPacketWindowSkin, _super);
	function OpenMapPacketWindowSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_closeBtn","_claimedNumText","_shareBtnText","_shareBtn","_enterBtn","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this._bg_i(),this.group_bg_i()];
	}
	var _proto = OpenMapPacketWindowSkin.prototype;

	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._closeBtn_i(),this._claimedNumText_i(),this._shareBtn_i(),this._enterBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1062;
		t.horizontalCenter = 0.5;
		t.source = "open_redpack_bg_png";
		t.touchEnabled = true;
		t.verticalCenter = -124;
		t.width = 835;
		return t;
	};
	_proto._closeBtn_i = function () {
		var t = new eui.Group();
		this._closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.height = 50;
		t.left = 890;
		t.top = 329;
		t.width = 50;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "open_redpack_close_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._claimedNumText_i = function () {
		var t = new eui.Label();
		this._claimedNumText = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "已有0人领取";
		t.textColor = 0xaa2d1b;
		t.y = 1036.36;
		return t;
	};
	_proto._shareBtn_i = function () {
		var t = new eui.Group();
		this._shareBtn = t;
		t.anchorOffsetX = 305;
		t.anchorOffsetY = 63;
		t.horizontalCenter = 0;
		t.y = 1177;
		t.elementsContent = [this._Image3_i(),this._shareBtnText_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(69,55,14,16);
		t.source = "open_redpack_btn_bg_png";
		t.width = 610;
		return t;
	};
	_proto._shareBtnText_i = function () {
		var t = new eui.Label();
		this._shareBtnText = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "立即拆开";
		t.textColor = 0xe82c00;
		t.verticalCenter = 0;
		return t;
	};
	_proto._enterBtn_i = function () {
		var t = new eui.Group();
		this._enterBtn = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 1413;
		t.elementsContent = [this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 305;
		t.anchorOffsetY = 63;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(69,55,14,16);
		t.source = "open_redpack_btn_bg_png";
		t.width = 610;
		t.y = 63;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "进入关卡";
		t.textColor = 0xe82c00;
		t.verticalCenter = 0;
		return t;
	};
	return OpenMapPacketWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PacketGuideWindowSkin.exml'] = window.PacketGuideWindowSkin = (function (_super) {
	__extends(PacketGuideWindowSkin, _super);
	function PacketGuideWindowSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_guideText","_guideBanner","_redPacket","_fingerHolder","_chickHolder","_clickGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this._bg_i(),this._guideBanner_i(),this._redPacket_i(),this._fingerHolder_i(),this._chickHolder_i(),this._clickGroup_i()];
	}
	var _proto = PacketGuideWindowSkin.prototype;

	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._guideBanner_i = function () {
		var t = new eui.Group();
		this._guideBanner = t;
		t.touchEnabled = false;
		t.y = 250;
		t.elementsContent = [this._Image1_i(),this._guideText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.source = "bg_tishi_png";
		t.touchEnabled = false;
		t.width = 1080;
		return t;
	};
	_proto._guideText_i = function () {
		var t = new eui.Label();
		this._guideText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 164;
		t.lineSpacing = 27;
		t.size = 52;
		t.text = "前面出现个大红包！ 快点击看看~";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 940;
		t.x = 70;
		t.y = 79;
		return t;
	};
	_proto._redPacket_i = function () {
		var t = new eui.Image();
		this._redPacket = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 54.5;
		t.source = "red_packet_png";
		t.x = 823;
		t.y = 1649.5;
		return t;
	};
	_proto._fingerHolder_i = function () {
		var t = new eui.Group();
		this._fingerHolder = t;
		t.height = 150;
		t.touchEnabled = false;
		t.width = 150;
		t.x = 831.94;
		t.y = 1631;
		return t;
	};
	_proto._chickHolder_i = function () {
		var t = new eui.Group();
		this._chickHolder = t;
		t.height = 40;
		t.touchEnabled = false;
		t.width = 40;
		t.x = 394.06;
		t.y = 1746.67;
		return t;
	};
	_proto._clickGroup_i = function () {
		var t = new eui.Group();
		this._clickGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return PacketGuideWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PacketInfoWindowSkin.exml'] = window.PacketInfoWindowSkin = (function (_super) {
	__extends(PacketInfoWindowSkin, _super);
	function PacketInfoWindowSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_desc","_label","_effectGroup"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this._bg_i(),this._Group2_i(),this._effectGroup_i()];
	}
	var _proto = PacketInfoWindowSkin.prototype;

	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 200;
		t.touchEnabled = false;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.height = 320;
		t.source = "bg_tishi_png";
		t.touchEnabled = false;
		t.width = 1080;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._desc_i(),this._label_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 164;
		t.lineSpacing = 27;
		t.size = 52;
		t.text = "再玩";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._desc_i = function () {
		var t = new eui.Label();
		this._desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 164;
		t.lineSpacing = 27;
		t.size = 52;
		t.text = "4";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._label_i = function () {
		var t = new eui.Label();
		this._label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 164;
		t.lineSpacing = 27;
		t.size = 52;
		t.text = "关还能开启下一个红包！";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._effectGroup_i = function () {
		var t = new eui.Group();
		this._effectGroup = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 200;
		t.y = 1320;
		return t;
	};
	return PacketInfoWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PreGameWindowSkin.exml'] = window.PreGameWindowSkin = (function (_super) {
	__extends(PreGameWindowSkin, _super);
	function PreGameWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","fund_text1","fund_text2","fund_time","fund_text_amount","fund_text_time","_fundInfoPanel","bg_kuang","close_btn","star_2","star_0","star_1","star_3","bg_mubiao","icon_diff","selectItemText_","taget_","icon_liansheng","lianshengNumber_","lianshengText_","liansheng_scope","score_","group_target","icon_vip","vip","group_vip","bg_title","stage_txt1_","stage_container_","stage_txt2_","item_bg_1","item_img_1","time_limited_img1","img_add_1","num_container_1","num_group_1","timer1_img","timer1_label","timer1_group","select_1","newuser_benefits_img_1","group_item1","item_bg_2","item_img_2","time_limited_img2","img_add_2","num_container_2","num_group_2","timer2_img","timer2_label","timer2_group","select_2","newuser_benefits_img_2","group_item2","item_bg_3","item_img_3","time_limited_img3","img_add_3","num_container_3","num_group_3","timer3_img","timer3_label","timer3_group","select_3","newuser_benefits_img_3","group_item3","item_bg_4","item_img_4","time_limited_img4","img_add_4","num_container_4","num_group_4","timer4_img","timer4_label","timer4_group","select_4","newuser_benefits_img_4","group_item4","bg_rank","rank_img","rankingList_","rankingScroller","_leardboard","_enteranceGuide","_rankPanel","bg_outer","goods_icon","goods_mask","group_icon","_banner1_textImg","_banner1_textBtn","_banner1_btnGroup","_banner1","_coinBar","_barLabel","_barGroup","_missionLabel1","_missionLabel2","_missionLabel3","_banner2_textBtn","_banner2_btnGroup","_banner2","_showGoodsPanel","gacha_","gacha_reward_","_retainPanel","btn_bg_","start_btn_text","start_btn","shate_btn_bubble_text","shate_btn_bubble","share_btn_bg_","share_btn_up_bg","share_btn_text","share_btn","share_btn_group","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = PreGameWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._fundInfoPanel_i(),this.bg_kuang_i(),this.close_btn_i(),this._Image5_i(),this.star_2_i(),this.star_0_i(),this.star_1_i(),this.star_3_i(),this.bg_mubiao_i(),this.icon_diff_i(),this.selectItemText__i(),this.taget__i(),this.liansheng_scope_i(),this.score__i(),this.group_target_i(),this.group_vip_i(),this._Group2_i(),this.group_item1_i(),this.group_item2_i(),this.group_item3_i(),this.group_item4_i(),this._rankPanel_i(),this._showGoodsPanel_i(),this._retainPanel_i(),this._Group7_i()];
		return t;
	};
	_proto._fundInfoPanel_i = function () {
		var t = new eui.Group();
		this._fundInfoPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 298;
		t.height = 350;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.fund_text1_i(),this.fund_text2_i(),this.fund_time_i(),this.fund_text_amount_i(),this.fund_text_time_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 337;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(71,72,37,36);
		t.source = "bg_shouji_png";
		t.verticalCenter = 0;
		t.width = 1000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -182;
		t.x = 126;
		t.y = -56;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -182;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_banner_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.fund_text1_i = function () {
		var t = new eui.Image();
		this.fund_text1 = t;
		t.horizontalCenter = 167;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_wenzi_7_png";
		t.verticalCenter = -57.5;
		return t;
	};
	_proto.fund_text2_i = function () {
		var t = new eui.Image();
		this.fund_text2 = t;
		t.horizontalCenter = 198;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_wenzi_6_png";
		t.verticalCenter = 28;
		return t;
	};
	_proto.fund_time_i = function () {
		var t = new eui.Image();
		this.fund_time = t;
		t.horizontalCenter = 52;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_shijian_png";
		t.verticalCenter = 93;
		return t;
	};
	_proto.fund_text_amount_i = function () {
		var t = new eui.Label();
		this.fund_text_amount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -302.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 74;
		t.text = "￥15.55";
		t.textColor = 0xec2512;
		t.verticalCenter = -17;
		return t;
	};
	_proto.fund_text_time_i = function () {
		var t = new eui.Label();
		this.fund_text_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "08:22:33后活动结束";
		t.textColor = 0xfaf0c8;
		t.verticalCenter = 93;
		t.x = 575;
		return t;
	};
	_proto.bg_kuang_i = function () {
		var t = new eui.Image();
		this.bg_kuang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 695;
		t.left = 32;
		t.right = 32;
		t.scale9Grid = new egret.Rectangle(119,71,22,41);
		t.source = "bg_kaishi_png";
		t.top = 334;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Image();
		this.close_btn = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 54;
		t.source = "icon_guanbi_1_png";
		t.x = 1012;
		t.y = 353;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "bg_mubiaofenshu_png";
		t.visible = false;
		t.y = 726.68;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.y = 518.24;
		return t;
	};
	_proto.star_0_i = function () {
		var t = new eui.Image();
		this.star_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -207;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.y = 725.89;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = -10;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 263.94;
		t.y = 548.15;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 10;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_big_star_1_png";
		t.verticalCenter = -344;
		t.visible = false;
		t.x = 654;
		return t;
	};
	_proto.bg_mubiao_i = function () {
		var t = new eui.Image();
		this.bg_mubiao = t;
		t.anchorOffsetX = 441.5;
		t.anchorOffsetY = 144.5;
		t.height = 289;
		t.scale9Grid = new egret.Rectangle(55,50,31,25);
		t.source = "bg_mubiaodi_png";
		t.width = 883;
		t.x = 540.5;
		t.y = 590.93;
		return t;
	};
	_proto.icon_diff_i = function () {
		var t = new eui.Image();
		this.icon_diff = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "icon_difficulty_1_png";
		t.x = 11.84;
		t.y = 409.48;
		return t;
	};
	_proto.selectItemText__i = function () {
		var t = new eui.Label();
		this.selectItemText_ = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.strokeColor = 0xa97936;
		t.textColor = 0xffffff;
		t.y = 784.03;
		return t;
	};
	_proto.taget__i = function () {
		var t = new eui.Label();
		this.taget_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.left = 368;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 52;
		t.textColor = 0x8a5036;
		t.verticalCenter = -371;
		t.width = 143.76;
		return t;
	};
	_proto.liansheng_scope_i = function () {
		var t = new eui.Group();
		this.liansheng_scope = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 50;
		t.x = 51;
		t.y = 600;
		t.elementsContent = [this.icon_liansheng_i(),this.lianshengNumber__i(),this.lianshengText__i()];
		return t;
	};
	_proto.icon_liansheng_i = function () {
		var t = new eui.Image();
		this.icon_liansheng = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 205;
		t.includeInLayout = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_liansheng_png";
		t.width = 168;
		t.x = -59;
		t.y = -70;
		return t;
	};
	_proto.lianshengNumber__i = function () {
		var t = new eui.Label();
		this.lianshengNumber_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x893720;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0xfffeda;
		t.verticalAlign = "middle";
		t.y = 0;
		return t;
	};
	_proto.lianshengText__i = function () {
		var t = new eui.Label();
		this.lianshengText_ = t;
		t.bold = true;
		t.border = false;
		t.borderColor = 0xffffff;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x893720;
		t.textColor = 0xfffeda;
		t.x = -15;
		t.y = 41.139999999999986;
		return t;
	};
	_proto.score__i = function () {
		var t = new eui.Group();
		this.score_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 494;
		t.scaleX = 0.68;
		t.scaleY = 0.68;
		t.verticalCenter = -368.5;
		return t;
	};
	_proto.group_target_i = function () {
		var t = new eui.Group();
		this.group_target = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.width = 640;
		t.x = 220;
		t.y = 497.14;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 100;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.group_vip_i = function () {
		var t = new eui.Group();
		this.group_vip = t;
		t.anchorOffsetX = 70.5;
		t.anchorOffsetY = 63;
		t.visible = false;
		t.x = 954;
		t.y = 455;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.icon_vip_i(),this.vip_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.icon_vip_i = function () {
		var t = new eui.Image();
		this.icon_vip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_vip_add_step_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.vip_i = function () {
		var t = new eui.Label();
		this.vip = t;
		t.anchorOffsetX = 0;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.stroke = 0;
		t.strokeColor = 0x893720;
		t.text = "加步数";
		t.textAlign = "center";
		t.textColor = 0xFFFEDA;
		t.verticalAlign = "middle";
		t.y = 89;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 289;
		t.elementsContent = [this.bg_title_i(),this._Group1_i()];
		return t;
	};
	_proto.bg_title_i = function () {
		var t = new eui.Image();
		this.bg_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(79,0,23,125);
		t.source = "bg_titledi_png";
		t.width = 538;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 76;
		t.width = 290;
		t.x = 123.65;
		t.y = 20;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.stage_txt1__i(),this.stage_container__i(),this.stage_txt2__i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.stage_txt1__i = function () {
		var t = new eui.Label();
		this.stage_txt1_ = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.textColor = 0xffffff;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.stage_container__i = function () {
		var t = new eui.Group();
		this.stage_container_ = t;
		t.scaleX = 0.64;
		t.scaleY = 0.64;
		t.x = 145.35;
		t.y = 31;
		return t;
	};
	_proto.stage_txt2__i = function () {
		var t = new eui.Label();
		this.stage_txt2_ = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.textColor = 0xffffff;
		t.x = 237.69;
		t.y = 0;
		return t;
	};
	_proto.group_item1_i = function () {
		var t = new eui.Group();
		this.group_item1 = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 111;
		t.height = 222;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 224;
		t.x = 208;
		t.y = 987;
		t.elementsContent = [this.item_bg_1_i(),this.item_img_1_i(),this.num_group_1_i(),this.timer1_group_i(),this.select_1_i(),this.newuser_benefits_img_1_i()];
		return t;
	};
	_proto.item_bg_1_i = function () {
		var t = new eui.Image();
		this.item_bg_1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.84;
		t.scaleY = 0.84;
		t.source = "bg_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item_img_1_i = function () {
		var t = new eui.Image();
		this.item_img_1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_fengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num_group_1_i = function () {
		var t = new eui.Group();
		this.num_group_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 7;
		t.y = 13;
		t.elementsContent = [this.time_limited_img1_i(),this.img_add_1_i(),this.num_container_1_i()];
		return t;
	};
	_proto.time_limited_img1_i = function () {
		var t = new eui.Image();
		this.time_limited_img1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_shuliang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_add_1_i = function () {
		var t = new eui.Image();
		this.img_add_1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_add1_png";
		t.verticalCenter = -3;
		return t;
	};
	_proto.num_container_1_i = function () {
		var t = new eui.Group();
		this.num_container_1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -3;
		return t;
	};
	_proto.timer1_group_i = function () {
		var t = new eui.Group();
		this.timer1_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.y = 163;
		t.elementsContent = [this.timer1_img_i(),this.timer1_label_i()];
		return t;
	};
	_proto.timer1_img_i = function () {
		var t = new eui.Image();
		this.timer1_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer1_label_i = function () {
		var t = new eui.Label();
		this.timer1_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "--:--:--";
		t.textColor = 0xffffff;
		t.verticalCenter = -5;
		return t;
	};
	_proto.select_1_i = function () {
		var t = new eui.Image();
		this.select_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_xuanzhong2_png";
		t.visible = false;
		t.x = 149;
		t.y = 145;
		return t;
	};
	_proto.newuser_benefits_img_1_i = function () {
		var t = new eui.Image();
		this.newuser_benefits_img_1 = t;
		t.source = "icon_biaoqian_png";
		t.visible = false;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.group_item2_i = function () {
		var t = new eui.Group();
		this.group_item2 = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 111;
		t.height = 222;
		t.width = 224;
		t.x = 433;
		t.y = 987;
		t.elementsContent = [this.item_bg_2_i(),this.item_img_2_i(),this.num_group_2_i(),this.timer2_group_i(),this.select_2_i(),this.newuser_benefits_img_2_i()];
		return t;
	};
	_proto.item_bg_2_i = function () {
		var t = new eui.Image();
		this.item_bg_2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.84;
		t.scaleY = 0.84;
		t.source = "bg_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item_img_2_i = function () {
		var t = new eui.Image();
		this.item_img_2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_teshuqizi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num_group_2_i = function () {
		var t = new eui.Group();
		this.num_group_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 7;
		t.y = 13;
		t.elementsContent = [this.time_limited_img2_i(),this.img_add_2_i(),this.num_container_2_i()];
		return t;
	};
	_proto.time_limited_img2_i = function () {
		var t = new eui.Image();
		this.time_limited_img2 = t;
		t.source = "icon_shuliang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_add_2_i = function () {
		var t = new eui.Image();
		this.img_add_2 = t;
		t.horizontalCenter = 0;
		t.source = "icon_add1_png";
		t.verticalCenter = -3;
		return t;
	};
	_proto.num_container_2_i = function () {
		var t = new eui.Group();
		this.num_container_2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		return t;
	};
	_proto.timer2_group_i = function () {
		var t = new eui.Group();
		this.timer2_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.y = 163;
		t.elementsContent = [this.timer2_img_i(),this.timer2_label_i()];
		return t;
	};
	_proto.timer2_img_i = function () {
		var t = new eui.Image();
		this.timer2_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer2_label_i = function () {
		var t = new eui.Label();
		this.timer2_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "--:--:--";
		t.textColor = 0xffffff;
		t.verticalCenter = -5;
		return t;
	};
	_proto.select_2_i = function () {
		var t = new eui.Image();
		this.select_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_xuanzhong2_png";
		t.visible = false;
		t.x = 149;
		t.y = 145;
		return t;
	};
	_proto.newuser_benefits_img_2_i = function () {
		var t = new eui.Image();
		this.newuser_benefits_img_2 = t;
		t.source = "icon_biaoqian_png";
		t.visible = false;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.group_item3_i = function () {
		var t = new eui.Group();
		this.group_item3 = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 111;
		t.height = 222;
		t.width = 224;
		t.x = 656;
		t.y = 987;
		t.elementsContent = [this.item_bg_3_i(),this.item_img_3_i(),this.num_group_3_i(),this.timer3_group_i(),this.select_3_i(),this.newuser_benefits_img_3_i()];
		return t;
	};
	_proto.item_bg_3_i = function () {
		var t = new eui.Image();
		this.item_bg_3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.84;
		t.scaleY = 0.84;
		t.source = "bg_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item_img_3_i = function () {
		var t = new eui.Image();
		this.item_img_3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_fengche_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num_group_3_i = function () {
		var t = new eui.Group();
		this.num_group_3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 7;
		t.y = 13;
		t.elementsContent = [this.time_limited_img3_i(),this.img_add_3_i(),this.num_container_3_i()];
		return t;
	};
	_proto.time_limited_img3_i = function () {
		var t = new eui.Image();
		this.time_limited_img3 = t;
		t.source = "icon_shuliang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_add_3_i = function () {
		var t = new eui.Image();
		this.img_add_3 = t;
		t.horizontalCenter = 0;
		t.source = "icon_add1_png";
		t.verticalCenter = -3;
		return t;
	};
	_proto.num_container_3_i = function () {
		var t = new eui.Group();
		this.num_container_3 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		return t;
	};
	_proto.timer3_group_i = function () {
		var t = new eui.Group();
		this.timer3_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.y = 163;
		t.elementsContent = [this.timer3_img_i(),this.timer3_label_i()];
		return t;
	};
	_proto.timer3_img_i = function () {
		var t = new eui.Image();
		this.timer3_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer3_label_i = function () {
		var t = new eui.Label();
		this.timer3_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "--:--:--";
		t.textColor = 0xffffff;
		t.verticalCenter = -5;
		return t;
	};
	_proto.select_3_i = function () {
		var t = new eui.Image();
		this.select_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_xuanzhong2_png";
		t.visible = false;
		t.x = 149;
		t.y = 145;
		return t;
	};
	_proto.newuser_benefits_img_3_i = function () {
		var t = new eui.Image();
		this.newuser_benefits_img_3 = t;
		t.source = "icon_biaoqian_png";
		t.visible = false;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto.group_item4_i = function () {
		var t = new eui.Group();
		this.group_item4 = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 111;
		t.height = 222;
		t.width = 224;
		t.x = 879;
		t.y = 987;
		t.elementsContent = [this.item_bg_4_i(),this.item_img_4_i(),this.num_group_4_i(),this.timer4_group_i(),this.select_4_i(),this.newuser_benefits_img_4_i()];
		return t;
	};
	_proto.item_bg_4_i = function () {
		var t = new eui.Image();
		this.item_bg_4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.84;
		t.scaleY = 0.84;
		t.source = "bg_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item_img_4_i = function () {
		var t = new eui.Image();
		this.item_img_4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_hengshuxiao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num_group_4_i = function () {
		var t = new eui.Group();
		this.num_group_4 = t;
		t.x = 7;
		t.y = 13;
		t.elementsContent = [this.time_limited_img4_i(),this.img_add_4_i(),this.num_container_4_i()];
		return t;
	};
	_proto.time_limited_img4_i = function () {
		var t = new eui.Image();
		this.time_limited_img4 = t;
		t.source = "icon_shuliang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_add_4_i = function () {
		var t = new eui.Image();
		this.img_add_4 = t;
		t.horizontalCenter = 0;
		t.source = "icon_add1_png";
		t.verticalCenter = -3;
		return t;
	};
	_proto.num_container_4_i = function () {
		var t = new eui.Group();
		this.num_container_4 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		return t;
	};
	_proto.timer4_group_i = function () {
		var t = new eui.Group();
		this.timer4_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.y = 163;
		t.elementsContent = [this.timer4_img_i(),this.timer4_label_i()];
		return t;
	};
	_proto.timer4_img_i = function () {
		var t = new eui.Image();
		this.timer4_img = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.source = "bg_xianshidaoju_png";
		t.verticalCenter = 0;
		t.width = 158;
		return t;
	};
	_proto.timer4_label_i = function () {
		var t = new eui.Label();
		this.timer4_label = t;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 1;
		t.strokeColor = 0x3b2372;
		t.text = "--:--:--";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -5;
		return t;
	};
	_proto.select_4_i = function () {
		var t = new eui.Image();
		this.select_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_xuanzhong2_png";
		t.visible = false;
		t.x = 149;
		t.y = 145;
		return t;
	};
	_proto.newuser_benefits_img_4_i = function () {
		var t = new eui.Image();
		this.newuser_benefits_img_4 = t;
		t.source = "icon_biaoqian_png";
		t.visible = false;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto._rankPanel_i = function () {
		var t = new eui.Group();
		this._rankPanel = t;
		t.anchorOffsetY = 0;
		t.bottom = 271;
		t.height = 366.66;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this.bg_rank_i(),this.rank_img_i(),this._leardboard_i(),this._enteranceGuide_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto.bg_rank_i = function () {
		var t = new eui.Image();
		this.bg_rank = t;
		t.anchorOffsetY = 0;
		t.height = 351.36;
		t.scale9Grid = new egret.Rectangle(71,72,37,36);
		t.source = "bg_shouji_png";
		t.width = 1000;
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto.rank_img_i = function () {
		var t = new eui.Image();
		this.rank_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(53,56,24,18);
		t.source = "bg_paiming_png";
		t.verticalCenter = -7.3300000000000125;
		t.width = 940;
		return t;
	};
	_proto._leardboard_i = function () {
		var t = new eui.Group();
		this._leardboard = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.width = 878.66;
		t.y = 56.66999999999999;
		t.elementsContent = [this.rankingScroller_i()];
		return t;
	};
	_proto.rankingScroller_i = function () {
		var t = new eui.Scroller();
		this.rankingScroller = t;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.touchEnabled = true;
		t.width = 890;
		t.y = 0;
		t.viewport = this.rankingList__i();
		return t;
	};
	_proto.rankingList__i = function () {
		var t = new eui.List();
		this.rankingList_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.itemRendererSkinName = RankListItemSkin;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = true;
		t.width = 890;
		t.y = -30.3;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._enteranceGuide_i = function () {
		var t = new eui.Image();
		this._enteranceGuide = t;
		t.height = 250;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_rukou_png";
		t.verticalCenter = 0;
		t.width = 786;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 94.00000000000003;
		t.y = -64;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._showGoodsPanel_i = function () {
		var t = new eui.Group();
		this._showGoodsPanel = t;
		t.anchorOffsetY = 0;
		t.bottom = 271;
		t.height = 366.66;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this.bg_outer_i(),this._Image8_i(),this._Image9_i(),this.group_icon_i(),this._banner1_i(),this._banner2_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto.bg_outer_i = function () {
		var t = new eui.Image();
		this.bg_outer = t;
		t.anchorOffsetY = 0;
		t.height = 351.36;
		t.scale9Grid = new egret.Rectangle(71,72,37,36);
		t.source = "bg_shouji_png";
		t.width = 1000;
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(53,56,24,18);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_png";
		t.verticalCenter = -8.330000000000013;
		t.width = 940;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 132;
		t.anchorOffsetY = 132;
		t.horizontalCenter = -320.5;
		t.scaleX = 1.12;
		t.scaleY = 1.12;
		t.source = "bg_shangpin_kuang_png";
		t.verticalCenter = -8.330000000000013;
		return t;
	};
	_proto.group_icon_i = function () {
		var t = new eui.Group();
		this.group_icon = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 116;
		t.height = 232;
		t.horizontalCenter = -320.5;
		t.verticalCenter = -8.330000000000013;
		t.width = 232;
		t.elementsContent = [this.goods_icon_i(),this.goods_mask_i()];
		return t;
	};
	_proto.goods_icon_i = function () {
		var t = new eui.Image();
		this.goods_icon = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 116;
		t.height = 232;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_shangpin_png";
		t.verticalCenter = 0;
		t.width = 232;
		return t;
	};
	_proto.goods_mask_i = function () {
		var t = new eui.Image();
		this.goods_mask = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 116;
		t.height = 232;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_shangpin_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 232;
		return t;
	};
	_proto._banner1_i = function () {
		var t = new eui.Group();
		this._banner1 = t;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -10.330000000000013;
		t.visible = false;
		t.width = 940;
		t.elementsContent = [this._banner1_textImg_i(),this._banner1_btnGroup_i()];
		return t;
	};
	_proto._banner1_textImg_i = function () {
		var t = new eui.Image();
		this._banner1_textImg = t;
		t.horizontalCenter = 48.5;
		t.source = "text1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner1_btnGroup_i = function () {
		var t = new eui.Group();
		this._banner1_btnGroup = t;
		t.height = 177;
		t.horizontalCenter = 375.5;
		t.verticalCenter = 0;
		t.width = 177;
		t.elementsContent = [this._Image10_i(),this._banner1_textBtn_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_anniu_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner1_textBtn_i = function () {
		var t = new eui.Image();
		this._banner1_textBtn = t;
		t.horizontalCenter = 0;
		t.source = "text_anniu_qiang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner2_i = function () {
		var t = new eui.Group();
		this._banner2 = t;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -10.330000000000013;
		t.visible = false;
		t.width = 940;
		t.elementsContent = [this._barGroup_i(),this._Group3_i(),this._banner2_btnGroup_i()];
		return t;
	};
	_proto._barGroup_i = function () {
		var t = new eui.Group();
		this._barGroup = t;
		t.height = 75;
		t.horizontalCenter = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -72.685;
		t.width = 644;
		t.elementsContent = [this._Image11_i(),this._coinBar_i(),this._barLabel_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(38,0,31,75);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bar2_png";
		t.width = 644;
		return t;
	};
	_proto._coinBar_i = function () {
		var t = new eui.Image();
		this._coinBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 16;
		t.scale9Grid = new egret.Rectangle(23,0,28,45);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bar_png";
		t.top = 13;
		t.width = 610;
		return t;
	};
	_proto._barLabel_i = function () {
		var t = new eui.Label();
		this._barLabel = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = -3.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 94;
		t.width = 670;
		t.x = 270;
		t.y = 164;
		t.elementsContent = [this._Image12_i(),this._missionLabel1_i(),this._missionLabel2_i(),this._missionLabel3_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_textdi2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._missionLabel1_i = function () {
		var t = new eui.Label();
		this._missionLabel1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.stroke = 3;
		t.strokeColor = 0xae4a08;
		t.text = "";
		t.textColor = 0xfefbef;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	_proto._missionLabel2_i = function () {
		var t = new eui.Label();
		this._missionLabel2 = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0xAE4A08;
		t.text = "";
		t.textColor = 0xffe139;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 405;
		return t;
	};
	_proto._missionLabel3_i = function () {
		var t = new eui.Label();
		this._missionLabel3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.stroke = 3;
		t.strokeColor = 0xAE4A08;
		t.text = "";
		t.textColor = 0xFEFBEF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 483;
		return t;
	};
	_proto._banner2_btnGroup_i = function () {
		var t = new eui.Group();
		this._banner2_btnGroup = t;
		t.height = 177;
		t.horizontalCenter = 387.5;
		t.verticalCenter = 62.315;
		t.visible = false;
		t.width = 177;
		t.elementsContent = [this._Image13_i(),this._banner2_textBtn_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_anniu_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner2_textBtn_i = function () {
		var t = new eui.Image();
		this._banner2_textBtn = t;
		t.horizontalCenter = 0;
		t.source = "text_anniu_xiadan_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 94.00000000000003;
		t.y = -64;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._retainPanel_i = function () {
		var t = new eui.Group();
		this._retainPanel = t;
		t.anchorOffsetY = 0;
		t.bottom = 271;
		t.height = 366.66;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this._Image16_i(),this._Group5_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 351.36;
		t.scale9Grid = new egret.Rectangle(37,45,25,58);
		t.source = "bg_textdi_png";
		t.width = 1000;
		t.x = 1;
		t.y = -23.77;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.width = 878.66;
		t.y = 23.33;
		t.elementsContent = [this.gacha__i(),this._Group4_i(),this._Image18_i()];
		return t;
	};
	_proto.gacha__i = function () {
		var t = new eui.Label();
		this.gacha_ = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "";
		t.textColor = 0x895035;
		t.y = 40.89;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 130.64;
		t.elementsContent = [this._Image17_i(),this.gacha_reward__i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(47,10,50,60);
		t.source = "bg_di_png";
		t.width = 668;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gacha_reward__i = function () {
		var t = new eui.Label();
		this.gacha_reward_ = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 36;
		t.size = 56;
		t.stroke = 4;
		t.strokeColor = 0xfa5702;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "icon_hongbao2_png";
		t.x = 53;
		t.y = 111.64;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 94.00000000000003;
		t.y = -64;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 142;
		t.width = 1080;
		t.x = 0;
		t.y = 1121;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Group6_i(),this.share_btn_group_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 142;
		t.width = 452;
		t.elementsContent = [this.start_btn_i()];
		return t;
	};
	_proto.start_btn_i = function () {
		var t = new eui.Group();
		this.start_btn = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 71;
		t.height = 142;
		t.width = 452;
		t.x = 226;
		t.y = 71;
		t.elementsContent = [this.btn_bg__i(),this._Image21_i(),this.start_btn_text_i()];
		return t;
	};
	_proto.btn_bg__i = function () {
		var t = new eui.Image();
		this.btn_bg_ = t;
		t.source = "bg_anniudi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "btn_luchang_png";
		t.touchEnabled = false;
		t.x = 12.5;
		t.y = 11;
		return t;
	};
	_proto.start_btn_text_i = function () {
		var t = new eui.Label();
		this.start_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.share_btn_group_i = function () {
		var t = new eui.Group();
		this.share_btn_group = t;
		t.height = 142;
		t.includeInLayout = false;
		t.visible = false;
		t.width = 452;
		t.elementsContent = [this.shate_btn_bubble_i(),this.share_btn_i()];
		return t;
	};
	_proto.shate_btn_bubble_i = function () {
		var t = new eui.Group();
		this.shate_btn_bubble = t;
		t.visible = false;
		t.x = 160;
		t.y = -87;
		t.elementsContent = [this._Image22_i(),this.shate_btn_bubble_text_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "spin_qipao_png";
		t.y = 0;
		return t;
	};
	_proto.shate_btn_bubble_text_i = function () {
		var t = new eui.Label();
		this.shate_btn_bubble_text = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "";
		t.textColor = 0x8a5036;
		t.y = 14.92;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Group();
		this.share_btn = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 71;
		t.height = 142;
		t.width = 452;
		t.x = 226;
		t.y = 71;
		t.elementsContent = [this.share_btn_bg__i(),this.share_btn_up_bg_i(),this.share_btn_text_i()];
		return t;
	};
	_proto.share_btn_bg__i = function () {
		var t = new eui.Image();
		this.share_btn_bg_ = t;
		t.source = "bg_anniudi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.share_btn_up_bg_i = function () {
		var t = new eui.Image();
		this.share_btn_up_bg = t;
		t.source = "btn_fenchang_png";
		t.touchEnabled = false;
		t.x = 12.5;
		t.y = 11;
		return t;
	};
	_proto.share_btn_text_i = function () {
		var t = new eui.Label();
		this.share_btn_text = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xbd0c57;
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return PreGameWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RankListItemSkin.exml'] = window.RankListItemSkin = (function (_super) {
	__extends(RankListItemSkin, _super);
	function RankListItemSkin() {
		_super.call(this);
		this.skinParts = ["avatarImg_","maskImg_","listImg_","rankImg","rank_group_","nameLabel_","scoreLabel_","txt_diamond_num","btn_single_recall","img_plus","btn_all_recall"];
		
		this.currentState = "normal";
		this.height = 250;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this.avatarImg__i(),this.maskImg__i(),this.listImg__i(),this.rank_group__i(),this._Image2_i(),this.nameLabel__i(),this.scoreLabel__i()];
		this._Image3_i();
		
		this._Label1_i();
		
		this._Image4_i();
		
		this.txt_diamond_num_i();
		
		this.btn_single_recall_i();
		
		this.img_plus_i();
		
		this._Image5_i();
		
		this._Label2_i();
		
		this._Image6_i();
		
		this.btn_all_recall_i();
		
		this.states = [
			new eui.State ("all_recall",
				[
					new eui.AddItems("img_plus","",1,""),
					new eui.AddItems("_Image5","btn_all_recall",0,""),
					new eui.AddItems("_Label2","btn_all_recall",1,""),
					new eui.AddItems("_Image6","btn_all_recall",1,""),
					new eui.AddItems("btn_all_recall","",1,""),
					new eui.SetProperty("avatarImg_","visible",false),
					new eui.SetProperty("maskImg_","visible",false),
					new eui.SetProperty("listImg_","visible",false),
					new eui.SetProperty("rank_group_","visible",false),
					new eui.SetProperty("nameLabel_","visible",false),
					new eui.SetProperty("scoreLabel_","visible",false)
				])
			,
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("single_recall",
				[
					new eui.AddItems("_Image3","btn_single_recall",0,""),
					new eui.AddItems("_Label1","btn_single_recall",1,""),
					new eui.AddItems("_Image4","btn_single_recall",1,""),
					new eui.AddItems("txt_diamond_num","btn_single_recall",1,""),
					new eui.AddItems("btn_single_recall","",1,""),
					new eui.SetProperty("nameLabel_","visible",false),
					new eui.SetProperty("scoreLabel_","visible",false)
				])
		];
	}
	var _proto = RankListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "bg_touxiang_png";
		t.touchEnabled = false;
		t.verticalCenter = -50;
		return t;
	};
	_proto.avatarImg__i = function () {
		var t = new eui.Image();
		this.avatarImg_ = t;
		t.height = 128;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "touxiangmengban_png";
		t.touchEnabled = false;
		t.verticalCenter = -50;
		t.width = 128;
		return t;
	};
	_proto.maskImg__i = function () {
		var t = new eui.Image();
		this.maskImg_ = t;
		t.height = 128;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "touxiangmengban_png";
		t.touchEnabled = false;
		t.verticalCenter = -50;
		t.width = 128;
		return t;
	};
	_proto.listImg__i = function () {
		var t = new eui.Image();
		this.listImg_ = t;
		t.scaleX = 0.82;
		t.scaleY = 0.82;
		t.source = "stage_rank_1_png";
		t.touchEnabled = false;
		t.x = 17;
		t.y = 2;
		return t;
	};
	_proto.rank_group__i = function () {
		var t = new eui.Group();
		this.rank_group_ = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 27;
		t.height = 54;
		t.touchEnabled = false;
		t.width = 54;
		t.x = 46;
		t.y = 49;
		t.elementsContent = [this.rankImg_i()];
		return t;
	};
	_proto.rankImg_i = function () {
		var t = new eui.Image();
		this.rankImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.82;
		t.scaleY = 0.82;
		t.source = "bg_mingci_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.name = "bg_xz";
		t.source = "fengexian_shu_png";
		t.x = 197;
		t.y = 0;
		return t;
	};
	_proto.nameLabel__i = function () {
		var t = new eui.Label();
		this.nameLabel_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 5;
		t.right = 5;
		t.size = 34;
		t.text = "玩家名字";
		t.textAlign = "center";
		t.textColor = 0x663018;
		t.y = 143;
		return t;
	};
	_proto.scoreLabel__i = function () {
		var t = new eui.Label();
		this.scoreLabel_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.right = 0;
		t.size = 38;
		t.text = "65535";
		t.textAlign = "center";
		t.textColor = 0x912d13;
		t.y = 189;
		return t;
	};
	_proto.btn_single_recall_i = function () {
		var t = new eui.Group();
		this.btn_single_recall = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 32.5;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 62.5;
		t.width = 164;
		t.elementsContent = [];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btn_huangxiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.stroke = 3;
		t.strokeColor = 0xC26807;
		t.text = "领";
		t.x = 18.4;
		t.y = 14;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "icon_zuanshi_png";
		t.x = 62.8;
		t.y = 8;
		return t;
	};
	_proto.txt_diamond_num_i = function () {
		var t = new eui.Label();
		this.txt_diamond_num = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.minWidth = 62;
		t.right = 13;
		t.size = 34;
		t.stroke = 3;
		t.strokeColor = 0xC26807;
		t.text = "x20";
		t.y = 21.4;
		return t;
	};
	_proto.img_plus_i = function () {
		var t = new eui.Image();
		this.img_plus = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "icon_plus_png";
		t.verticalCenter = -50;
		return t;
	};
	_proto.btn_all_recall_i = function () {
		var t = new eui.Group();
		this.btn_all_recall = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 32.5;
		t.height = 65;
		t.horizontalCenter = 0;
		t.verticalCenter = 62.5;
		t.width = 164;
		t.elementsContent = [];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btn_huangxiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "领";
		t.x = 34;
		t.y = 14;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "icon_zuanshi_png";
		t.x = 81;
		t.y = 8;
		return t;
	};
	return RankListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RedPacketWindowSkin.exml'] = window.GameWindowSkin = (function (_super) {
	__extends(GameWindowSkin, _super);
	function GameWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_titleImg","_bgImg","group_bg","_closeImg","group_close","group_share","_helpImg","_timeImg","_leftTimeLabel","group_left_tiem","rankingList_","rankingScroller","group_list","_targetLabel","_barBg","_barProgress","_barProgressMask","_target1","_target2","_target3","_progress","_targetImg","_threeBonus","_lineDown","targetMe_","_groupMe","_threeText","group_all"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_all_i()];
	}
	var _proto = GameWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		return t;
	};
	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.group_bg_i(),this.group_close_i(),this.group_share_i(),this.group_left_tiem_i(),this.group_list_i(),this._Label2_i(),this._targetLabel_i(),this._barBg_i(),this._progress_i(),this._targetImg_i(),this._threeBonus_i(),this._Image2_i(),this._lineDown_i(),this._groupMe_i(),this._threeText_i(),this._Label3_i()];
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0.5;
		t.width = 1080;
		t.y = 0;
		t.elementsContent = [this._titleImg_i(),this._bgImg_i()];
		return t;
	};
	_proto._titleImg_i = function () {
		var t = new eui.Image();
		this._titleImg = t;
		t.height = 162;
		t.source = "bg_diban1_png";
		t.width = 506;
		t.x = 98.58;
		t.y = 205.33;
		return t;
	};
	_proto._bgImg_i = function () {
		var t = new eui.Image();
		this._bgImg = t;
		t.height = 1069;
		t.scaleX = 1.44;
		t.scaleY = 1.44;
		t.source = "bg_diban2_png";
		t.width = 727;
		t.x = 33.31;
		t.y = 238.62;
		return t;
	};
	_proto.group_close_i = function () {
		var t = new eui.Group();
		this.group_close = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 490.5;
		t.width = 100;
		t.y = 404.48;
		t.elementsContent = [this._closeImg_i()];
		return t;
	};
	_proto._closeImg_i = function () {
		var t = new eui.Image();
		this._closeImg = t;
		t.horizontalCenter = 0;
		t.source = "icon_close_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.group_share_i = function () {
		var t = new eui.Group();
		this.group_share = t;
		t.anchorOffsetX = 305;
		t.anchorOffsetY = 63;
		t.horizontalCenter = 0;
		t.y = 1667.58;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn_anniu_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 63.33;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "喊好友一起玩";
		t.textAlign = "center";
		t.textColor = 0x872e06;
		t.verticalCenter = 0;
		t.width = 609.34;
		return t;
	};
	_proto.group_left_tiem_i = function () {
		var t = new eui.Group();
		this.group_left_tiem = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.horizontalCenter = -261.5;
		t.width = 392;
		t.y = 331.36;
		t.elementsContent = [this._helpImg_i(),this._timeImg_i(),this._leftTimeLabel_i()];
		return t;
	};
	_proto._helpImg_i = function () {
		var t = new eui.Image();
		this._helpImg = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 45;
		t.source = "icon_huodongxinxi_png";
		t.x = 56;
		t.y = 50;
		return t;
	};
	_proto._timeImg_i = function () {
		var t = new eui.Image();
		this._timeImg = t;
		t.left = 149;
		t.source = "icon_naozhong_png";
		t.verticalCenter = 1;
		return t;
	};
	_proto._leftTimeLabel_i = function () {
		var t = new eui.Label();
		this._leftTimeLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 63.33;
		t.size = 48;
		t.text = "";
		t.textColor = 0xd32d0c;
		t.width = 144.67;
		t.x = 217.99;
		t.y = 26.98;
		return t;
	};
	_proto.group_list_i = function () {
		var t = new eui.Group();
		this.group_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 675;
		t.horizontalCenter = -0.5;
		t.width = 800;
		t.y = 670;
		t.elementsContent = [this.rankingScroller_i()];
		return t;
	};
	_proto.rankingScroller_i = function () {
		var t = new eui.Scroller();
		this.rankingScroller = t;
		t.anchorOffsetY = 0;
		t.height = 675;
		t.percentWidth = 100;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.touchEnabled = true;
		t.viewport = this.rankingList__i();
		return t;
	};
	_proto.rankingList__i = function () {
		var t = new eui.List();
		this.rankingList_ = t;
		t.anchorOffsetY = 0;
		t.height = 677.33;
		t.itemRendererSkinName = TargetListItemSkin;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = true;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 63.33;
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "团队目标";
		t.textAlign = "center";
		t.textColor = 0x963c00;
		t.width = 311.34;
		t.y = 423.52;
		return t;
	};
	_proto._targetLabel_i = function () {
		var t = new eui.Label();
		this._targetLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 63.33;
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "0/0";
		t.textAlign = "center";
		t.textColor = 0xc95b11;
		t.width = 638.62;
		t.y = 598.14;
		return t;
	};
	_proto._barBg_i = function () {
		var t = new eui.Image();
		this._barBg = t;
		t.horizontalCenter = 3.5;
		t.source = "jindutiaodi_png";
		t.y = 514;
		return t;
	};
	_proto._progress_i = function () {
		var t = new eui.Group();
		this._progress = t;
		t.horizontalCenter = 26.5;
		t.width = 782;
		t.y = 488;
		t.elementsContent = [this._barProgress_i(),this._barProgressMask_i(),this._target1_i(),this._target2_i(),this._target3_i()];
		return t;
	};
	_proto._barProgress_i = function () {
		var t = new eui.Image();
		this._barProgress = t;
		t.source = "jindutiao_png";
		t.width = 737;
		t.x = 0;
		t.y = 28;
		return t;
	};
	_proto._barProgressMask_i = function () {
		var t = new eui.Image();
		this._barProgressMask = t;
		t.height = 42;
		t.scaleX = 0;
		t.scaleY = 1;
		t.source = "bg_white_png";
		t.width = 737;
		t.x = 0;
		t.y = 28;
		return t;
	};
	_proto._target1_i = function () {
		var t = new eui.Image();
		this._target1 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 54;
		t.scaleX = 0.82;
		t.scaleY = 0.82;
		t.source = "red_packet_png";
		t.x = 259;
		t.y = 51;
		return t;
	};
	_proto._target2_i = function () {
		var t = new eui.Image();
		this._target2 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 54;
		t.scaleX = 0.92;
		t.scaleY = 0.92;
		t.source = "red_packet_png";
		t.x = 498;
		t.y = 54;
		return t;
	};
	_proto._target3_i = function () {
		var t = new eui.Image();
		this._target3 = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_png";
		t.x = 733;
		t.y = 54;
		return t;
	};
	_proto._targetImg_i = function () {
		var t = new eui.Image();
		this._targetImg = t;
		t.horizontalCenter = -357.5;
		t.source = "ele_orange_png";
		t.y = 475;
		return t;
	};
	_proto._threeBonus_i = function () {
		var t = new eui.Image();
		this._threeBonus = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 70;
		t.horizontalCenter = 341.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_dalibao_png";
		t.y = 1430.42;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.5;
		t.source = "fengexian_png";
		t.y = 654;
		return t;
	};
	_proto._lineDown_i = function () {
		var t = new eui.Image();
		this._lineDown = t;
		t.horizontalCenter = 2.5;
		t.source = "fengexian_png";
		t.y = 1358;
		return t;
	};
	_proto._groupMe_i = function () {
		var t = new eui.Group();
		this._groupMe = t;
		t.height = 150;
		t.verticalCenter = 310;
		t.width = 800;
		t.x = 139;
		t.elementsContent = [this.targetMe__i()];
		return t;
	};
	_proto.targetMe__i = function () {
		var t = new TargetListItemRenderer();
		this.targetMe_ = t;
		t.enabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._threeText_i = function () {
		var t = new eui.Label();
		this._threeText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 63.33;
		t.horizontalCenter = -64;
		t.size = 40;
		t.text = "成为好友中的前三名，获得额外奖励！";
		t.textAlign = "center";
		t.textColor = 0xb35b0d;
		t.width = 711.34;
		t.y = 1413;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 63.33;
		t.horizontalCenter = 12;
		t.size = 40;
		t.text = "好友越多，拿红包的速度越快哦！";
		t.textAlign = "center";
		t.textColor = 0x811c08;
		t.width = 711.34;
		t.y = 1553;
		return t;
	};
	return GameWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SendStaminaItemSkin.exml'] = window.SendStaminaItemSkin = (function (_super) {
	__extends(SendStaminaItemSkin, _super);
	function SendStaminaItemSkin() {
		_super.call(this);
		this.skinParts = ["_avatar"];
		
		this.height = 190;
		this.width = 190;
		this.elementsContent = [this._avatar_i()];
	}
	var _proto = SendStaminaItemSkin.prototype;

	_proto._avatar_i = function () {
		var t = new eui.Image();
		this._avatar = t;
		t.height = 190;
		t.name = "bg_xz";
		t.source = "bg_haoyoutouxiang_png";
		t.width = 190;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SendStaminaItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/SevernMapWindowSkin.exml'] = window.SevernMapWindowSkin = (function (_super) {
	__extends(SevernMapWindowSkin, _super);
	function SevernMapWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg","spring_bg","btn_test1","btn_test2","btn_level","btn_pdd_spring_fes","pre_game_pdd_spring_fes"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_i(),this.spring_bg_i(),this.btn_test1_i(),this.btn_test2_i(),this.btn_level_i(),this.btn_pdd_spring_fes_i(),this.pre_game_pdd_spring_fes_i()];
	}
	var _proto = SevernMapWindowSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.height = 2338.56;
		t.horizontalCenter = 0;
		t.source = "severn_map_jpg";
		t.visible = false;
		t.width = 1080;
		return t;
	};
	_proto.spring_bg_i = function () {
		var t = new eui.Image();
		this.spring_bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "spring_map_png";
		t.top = 0;
		return t;
	};
	_proto.btn_test1_i = function () {
		var t = new eui.Image();
		this.btn_test1 = t;
		t.bottom = 76;
		t.right = 68;
		t.source = "icon_guanqiaditu_png";
		t.visible = false;
		return t;
	};
	_proto.btn_test2_i = function () {
		var t = new eui.Image();
		this.btn_test2 = t;
		t.bottom = 76;
		t.left = 92;
		t.source = "icon_guanqiaditu_png";
		t.visible = false;
		return t;
	};
	_proto.btn_level_i = function () {
		var t = new eui.Image();
		this.btn_level = t;
		t.horizontalCenter = 0;
		t.source = "icon_guanqiaditu_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.btn_pdd_spring_fes_i = function () {
		var t = new eui.Image();
		this.btn_pdd_spring_fes = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 131;
		t.horizontalCenter = 0;
		t.source = "";
		t.visible = false;
		t.width = 315;
		t.y = 508;
		return t;
	};
	_proto.pre_game_pdd_spring_fes_i = function () {
		var t = new eui.Image();
		this.pre_game_pdd_spring_fes = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 603;
		t.horizontalCenter = 0;
		t.source = "icon_guanqiaditu_png";
		t.visible = false;
		t.width = 591;
		return t;
	};
	return SevernMapWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ShowLetterComponentSkin.exml'] = window.ShowLetterComponentSkin = (function (_super) {
	__extends(ShowLetterComponentSkin, _super);
	function ShowLetterComponentSkin() {
		_super.call(this);
		this.skinParts = ["bg_black","eff_container","letter1","letter_bg","text_to","content","text_from","letter2","group_all","show_letter_component"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.show_letter_component_i()];
	}
	var _proto = ShowLetterComponentSkin.prototype;

	_proto.show_letter_component_i = function () {
		var t = new eui.Group();
		this.show_letter_component = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bg_black_i(),this.eff_container_i(),this.group_all_i()];
		return t;
	};
	_proto.bg_black_i = function () {
		var t = new eui.Image();
		this.bg_black = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_black_png";
		t.top = 0;
		return t;
	};
	_proto.eff_container_i = function () {
		var t = new eui.Group();
		this.eff_container = t;
		t.height = 2;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 2;
		t.x = 0;
		t.y = 1920;
		return t;
	};
	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this.letter1_i(),this.letter2_i()];
		return t;
	};
	_proto.letter1_i = function () {
		var t = new eui.Image();
		this.letter1 = t;
		t.height = 1120;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto.letter2_i = function () {
		var t = new eui.Group();
		this.letter2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.letter_bg_i(),this.text_to_i(),this.content_i(),this.text_from_i()];
		return t;
	};
	_proto.letter_bg_i = function () {
		var t = new eui.Image();
		this.letter_bg = t;
		t.height = 1120;
		t.horizontalCenter = 0;
		t.source = "letter_bg_png";
		t.verticalCenter = 0;
		t.width = 1080;
		return t;
	};
	_proto.text_to_i = function () {
		var t = new eui.Image();
		this.text_to = t;
		t.height = 39;
		t.horizontalCenter = -240;
		t.verticalCenter = -302;
		t.width = 205;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.height = 394;
		t.horizontalCenter = 0;
		t.verticalCenter = -60;
		t.width = 622;
		return t;
	};
	_proto.text_from_i = function () {
		var t = new eui.Image();
		this.text_from = t;
		t.height = 97;
		t.horizontalCenter = 226;
		t.verticalCenter = 224;
		t.width = 120;
		return t;
	};
	return ShowLetterComponentSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StageListItemSkin.exml'] = window.StageListItemSkin = (function (_super) {
	__extends(StageListItemSkin, _super);
	function StageListItemSkin() {
		_super.call(this);
		this.skinParts = ["stageBg_"];
		
		this.height = 1051;
		this.width = 1080;
		this.elementsContent = [this.stageBg__i()];
	}
	var _proto = StageListItemSkin.prototype;

	_proto.stageBg__i = function () {
		var t = new eui.Image();
		this.stageBg_ = t;
		t.name = "bg_xz";
		t.source = "stage_middle1_png";
		return t;
	};
	return StageListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StageRankListItemSkin.exml'] = window.StageRankListItemSkin = (function (_super) {
	__extends(StageRankListItemSkin, _super);
	function StageRankListItemSkin() {
		_super.call(this);
		this.skinParts = ["bg_","nameLabel_","targetImg_","avatarImg_","maskImg_","img_txt_bg_","label2_","label3_","stageLabelCont_","starLabelX_","starLabelCont_","listImg_","rank_group_","group_all"];
		
		this.height = 170;
		this.width = 884;
		this.elementsContent = [this.group_all_i()];
	}
	var _proto = StageRankListItemSkin.prototype;

	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.height = 170;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.bg__i(),this.nameLabel__i(),this.targetImg__i(),this._Image1_i(),this.avatarImg__i(),this.maskImg__i(),this.img_txt_bg__i(),this._Group1_i(),this.starLabelX__i(),this._Image2_i(),this.starLabelCont__i(),this.listImg__i(),this.rank_group__i()];
		return t;
	};
	_proto.bg__i = function () {
		var t = new eui.Image();
		this.bg_ = t;
		t.height = 170;
		t.name = "bg_xz";
		t.scale9Grid = new egret.Rectangle(32,32,68,59);
		t.source = "bg_neiban_3_png";
		t.touchEnabled = false;
		t.width = 884;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameLabel__i = function () {
		var t = new eui.Label();
		this.nameLabel_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "---";
		t.textAlign = "left";
		t.textColor = 0x92553a;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -25.5;
		t.width = 240;
		t.x = 300;
		return t;
	};
	_proto.targetImg__i = function () {
		var t = new eui.Image();
		this.targetImg_ = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 37.5;
		t.source = "icon_songtili_png";
		t.touchEnabled = false;
		t.verticalCenter = 0.5;
		t.x = 803;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -236;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "bg_touxiang_png";
		t.touchEnabled = false;
		t.verticalCenter = 1;
		return t;
	};
	_proto.avatarImg__i = function () {
		var t = new eui.Image();
		this.avatarImg_ = t;
		t.height = 128;
		t.horizontalCenter = -236;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "touxiangmengban_png";
		t.touchEnabled = false;
		t.verticalCenter = 1;
		t.width = 128;
		return t;
	};
	_proto.maskImg__i = function () {
		var t = new eui.Image();
		this.maskImg_ = t;
		t.height = 128;
		t.horizontalCenter = -236;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "touxiangmengban_png";
		t.touchEnabled = false;
		t.verticalCenter = 1;
		t.width = 128;
		return t;
	};
	_proto.img_txt_bg__i = function () {
		var t = new eui.Image();
		this.img_txt_bg_ = t;
		t.horizontalCenter = -42;
		t.scale9Grid = new egret.Rectangle(14,4,88,29);
		t.source = "rank_bg_text_1_png";
		t.touchEnabled = false;
		t.verticalCenter = 31;
		t.width = 208;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -42;
		t.verticalCenter = 31;
		t.width = 160;
		t.elementsContent = [this.label2__i(),this.label3__i(),this.stageLabelCont__i()];
		return t;
	};
	_proto.label2__i = function () {
		var t = new eui.Label();
		this.label2_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.size = 34;
		t.text = "第";
		t.textAlign = "left";
		t.textColor = 0xfff4d6;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 37;
		return t;
	};
	_proto.label3__i = function () {
		var t = new eui.Label();
		this.label3_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 0;
		t.size = 34;
		t.text = "关";
		t.textAlign = "left";
		t.textColor = 0xfff4d6;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 37;
		return t;
	};
	_proto.stageLabelCont__i = function () {
		var t = new eui.Label();
		this.stageLabelCont_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "1004";
		t.textAlign = "center";
		t.textColor = 0xfff4d6;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.starLabelX__i = function () {
		var t = new eui.Image();
		this.starLabelX_ = t;
		t.source = "non_t_x_png";
		t.touchEnabled = false;
		t.x = 595.64;
		t.y = 75;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_star1_png";
		t.touchEnabled = false;
		t.x = 547.64;
		t.y = 63;
		return t;
	};
	_proto.starLabelCont__i = function () {
		var t = new eui.Group();
		this.starLabelCont_ = t;
		t.height = 50;
		t.touchEnabled = false;
		t.width = 100;
		t.x = 620.96;
		t.y = 61;
		return t;
	};
	_proto.listImg__i = function () {
		var t = new eui.Image();
		this.listImg_ = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "stage_rank_1_png";
		t.touchEnabled = false;
		t.x = 37;
		t.y = 41;
		return t;
	};
	_proto.rank_group__i = function () {
		var t = new eui.Group();
		this.rank_group_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.touchEnabled = false;
		t.x = 69;
		t.y = 85;
		return t;
	};
	return StageRankListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StageRankSendWindowSkin.exml'] = window.StageRankSendWindowSkin = (function (_super) {
	__extends(StageRankSendWindowSkin, _super);
	function StageRankSendWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_closeBtn","_star1","_star2","_star3","_receiveBtnText","_heart","_receiveNum","_sendBtnText","_receiveBtn","rankingList_","rankingScroller","group_list","_receivedNumText","group_all"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_all_i()];
	}
	var _proto = StageRankSendWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._closeBtn_i(),this._star1_i(),this._star2_i(),this._star3_i(),this._receiveBtn_i(),this.group_list_i(),this._Label1_i(),this._receivedNumText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 740.9;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.source = "bg_tanchuang_4_png";
		t.width = 959.08;
		t.x = 61.18;
		t.y = 512.09;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1252;
		t.left = 59;
		t.right = 59;
		t.scale9Grid = new egret.Rectangle(62,60,28,21);
		t.source = "title3_png";
		t.top = 511;
		t.touchEnabled = true;
		return t;
	};
	_proto._closeBtn_i = function () {
		var t = new eui.Image();
		this._closeBtn = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 54;
		t.source = "icon_guanbi_1_png";
		t.x = 949.53;
		t.y = 578.71;
		return t;
	};
	_proto._star1_i = function () {
		var t = new eui.Image();
		this._star1 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 99;
		t.rotation = -15;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 349;
		t.y = 529;
		return t;
	};
	_proto._star2_i = function () {
		var t = new eui.Image();
		this._star2 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 99;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 540;
		t.y = 506;
		return t;
	};
	_proto._star3_i = function () {
		var t = new eui.Image();
		this._star3 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 99;
		t.rotation = 15;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 732;
		t.y = 529;
		return t;
	};
	_proto._receiveBtn_i = function () {
		var t = new eui.Group();
		this._receiveBtn = t;
		t.anchorOffsetX = 213.5;
		t.anchorOffsetY = 60.5;
		t.x = 549.21;
		t.y = 1105.33;
		t.elementsContent = [this._Image3_i(),this._receiveBtnText_i(),this._heart_i(),this._receiveNum_i(),this._sendBtnText_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.source = "btn_huangchang_1_png";
		t.y = 71.21;
		return t;
	};
	_proto._receiveBtnText_i = function () {
		var t = new eui.Label();
		this._receiveBtnText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 82.67;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "收取";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		t.width = 162.97;
		t.x = 32.82;
		return t;
	};
	_proto._heart_i = function () {
		var t = new eui.Image();
		this._heart = t;
		t.anchorOffsetX = 143.46;
		t.anchorOffsetY = 72.73;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "icon_tili_png";
		t.verticalCenter = -3.5;
		t.width = 280;
		t.x = 231.34;
		return t;
	};
	_proto._receiveNum_i = function () {
		var t = new eui.Label();
		this._receiveNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 79.64;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "x4";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -2.5;
		t.width = 140.24;
		t.x = 243.4;
		return t;
	};
	_proto._sendBtnText_i = function () {
		var t = new eui.Label();
		this._sendBtnText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "一键回赠";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.group_list_i = function () {
		var t = new eui.Group();
		this.group_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195;
		t.horizontalCenter = 0;
		t.width = 698;
		t.y = 740;
		t.elementsContent = [this.rankingScroller_i()];
		return t;
	};
	_proto.rankingScroller_i = function () {
		var t = new eui.Scroller();
		this.rankingScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195;
		t.percentWidth = 100;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.touchEnabled = true;
		t.width = 698;
		t.x = 0;
		t.y = 0;
		t.viewport = this.rankingList__i();
		return t;
	};
	_proto.rankingList__i = function () {
		var t = new eui.Group();
		this.rankingList_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195;
		t.maxHeight = 195;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = true;
		t.width = 698;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 54;
		t.text = "体力赠送";
		t.textColor = 0xffffff;
		t.x = 434;
		t.y = 557;
		return t;
	};
	_proto._receivedNumText_i = function () {
		var t = new eui.Label();
		this._receivedNumText = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "小伙伴们送了你4点体力";
		t.textAlign = "center";
		t.textColor = 0x8a5036;
		t.width = 627.79;
		t.x = 226;
		t.y = 963;
		return t;
	};
	return StageRankSendWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StageRankWindowSkin.exml'] = window.StageRankWindowSkin = (function (_super) {
	__extends(StageRankWindowSkin, _super);
	function StageRankWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","avatarImg_","maskImg_","nameLabel_","group_close","rankingList_","rankingScroller","targetMe_","_groupMe","group_list","viewStack","today_receive_label","play_to_get_star_label","_now_receive","group_share","btn_send_all","btn_goto_play","score_bar_","score_bar_1","level_","group_goto_play","group_all"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_all_i()];
	}
	var _proto = StageRankWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(4,4,16,11);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.bottom = 120;
		t.left = 0;
		t.right = 0;
		t.top = 120;
		t.touchEnabled = false;
		t.verticalCenter = -20;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image3_i(),this._Group3_i(),this.group_close_i(),this.viewStack_i(),this._Group4_i(),this._Image11_i(),this._Image12_i(),this._Group5_i(),this._Image14_i(),this.level__i(),this.group_goto_play_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.left = 47;
		t.right = 47;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.source = "bg_tanchuang_4_png";
		t.top = 231;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 59;
		t.left = 84;
		t.right = 84;
		t.top = 289;
		t.touchEnabled = false;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(62,49,32,32);
		t.source = "bg_tanchuang_6_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -0.5;
		t.source = "bg_yun_png";
		t.x = 95;
		t.y = -14;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image4_i(),this._Group2_i(),this.nameLabel__i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.left = 132;
		t.right = 480;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rank_bg_text_name_png";
		t.top = 137;
		t.y = 127.00000000000004;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 466;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.avatarImg__i(),this.maskImg__i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_touxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.avatarImg__i = function () {
		var t = new eui.Image();
		this.avatarImg_ = t;
		t.height = 128;
		t.horizontalCenter = 0;
		t.source = "touxiangmengban_png";
		t.verticalCenter = 0;
		t.width = 128;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.maskImg__i = function () {
		var t = new eui.Image();
		this.maskImg_ = t;
		t.height = 128;
		t.horizontalCenter = 0;
		t.source = "touxiangmengban_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 128;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.nameLabel__i = function () {
		var t = new eui.Label();
		this.nameLabel_ = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "---";
		t.textAlign = "center";
		t.textColor = 0x92553a;
		t.verticalAlign = "middle";
		t.width = 240;
		t.y = 153.5;
		return t;
	};
	_proto.group_close_i = function () {
		var t = new eui.Image();
		this.group_close = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 54;
		t.source = "icon_guanbi_1_png";
		t.top = -27;
		t.x = 1001.82;
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 290;
		t.top = 304;
		t.width = 884;
		t.x = 98;
		t.elementsContent = [this.group_list_i()];
		return t;
	};
	_proto.group_list_i = function () {
		var t = new eui.Group();
		this.group_list = t;
		t.name = "关卡排行";
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.rankingScroller_i(),this._groupMe_i()];
		return t;
	};
	_proto.rankingScroller_i = function () {
		var t = new eui.Scroller();
		this.rankingScroller = t;
		t.anchorOffsetY = 0;
		t.bottom = 12;
		t.percentWidth = 100;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.top = 0;
		t.touchEnabled = true;
		t.width = 884;
		t.x = 0;
		t.viewport = this.rankingList__i();
		return t;
	};
	_proto.rankingList__i = function () {
		var t = new eui.List();
		this.rankingList_ = t;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = StageRankListItemSkin;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = true;
		t.y = -30.3;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto._groupMe_i = function () {
		var t = new eui.Group();
		this._groupMe = t;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 884;
		t.x = 0;
		t.y = 1152;
		t.elementsContent = [this.targetMe__i()];
		return t;
	};
	_proto.targetMe__i = function () {
		var t = new StageRankListItemRender();
		this.targetMe_ = t;
		t.enabled = false;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 21;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.today_receive_label_i(),this.play_to_get_star_label_i(),this._now_receive_i(),this.group_share_i(),this.btn_send_all_i(),this.btn_goto_play_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "bg_bottom_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "rank_bg_text_png";
		t.x = 179;
		t.y = 32;
		return t;
	};
	_proto.today_receive_label_i = function () {
		var t = new eui.Label();
		this.today_receive_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = false;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.size = 34;
		t.text = "今日已领取好友体力:";
		t.textAlign = "center";
		t.textColor = 0xfcebb5;
		t.verticalAlign = "justify";
		t.x = 278.21;
		t.y = 44;
		return t;
	};
	_proto.play_to_get_star_label_i = function () {
		var t = new eui.Label();
		this.play_to_get_star_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = false;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.size = 34;
		t.text = "前往闯关获得更多星星";
		t.textAlign = "center";
		t.textColor = 0xfcebb5;
		t.verticalAlign = "justify";
		t.visible = false;
		t.x = 323;
		t.y = 44;
		return t;
	};
	_proto._now_receive_i = function () {
		var t = new eui.Label();
		this._now_receive = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = false;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.size = 34;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "justify";
		t.width = 137.33;
		t.x = 611.69;
		t.y = 44;
		return t;
	};
	_proto.group_share_i = function () {
		var t = new eui.Group();
		this.group_share = t;
		t.anchorOffsetX = 156.5;
		t.anchorOffsetY = 44;
		t.bottom = 33;
		t.height = 88;
		t.visible = false;
		t.width = 313;
		t.x = 286.5;
		t.elementsContent = [this._Image8_i(),this._Label1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.source = "btn_huangchang_1_png";
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "邀请更多好友";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "justify";
		t.x = 31;
		t.y = 23;
		return t;
	};
	_proto.btn_send_all_i = function () {
		var t = new eui.Group();
		this.btn_send_all = t;
		t.anchorOffsetX = 156.5;
		t.anchorOffsetY = 44;
		t.bottom = 33;
		t.height = 88;
		t.horizontalCenter = 0;
		t.width = 313;
		t.elementsContent = [this._Image9_i(),this._Label2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.source = "btn_huangchang_1_png";
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "一键赠送";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "justify";
		t.x = 73;
		t.y = 23;
		return t;
	};
	_proto.btn_goto_play_i = function () {
		var t = new eui.Group();
		this.btn_goto_play = t;
		t.anchorOffsetX = 156.5;
		t.anchorOffsetY = 44;
		t.bottom = 33;
		t.height = 88;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 313;
		t.elementsContent = [this._Image10_i(),this._Label3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.source = "btn_huangchang_1_png";
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.text = "前往闯关";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "justify";
		t.x = 73;
		t.y = 23;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 199;
		t.source = "rank_bg_huan_png";
		t.top = 196;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.right = 199;
		t.source = "rank_bg_huan_png";
		t.top = 196;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 34;
		t.horizontalCenter = 0;
		t.top = 129;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this._Image13_i(),this.score_bar__i(),this.score_bar_1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(19,4,29,26);
		t.source = "bg_jindutiao3_png";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.score_bar__i = function () {
		var t = new eui.Image();
		this.score_bar_ = t;
		t.scale9Grid = new egret.Rectangle(12,2,30,14);
		t.source = "bg_jindutiao4_png";
		t.width = 146;
		t.x = 47;
		t.y = 8;
		return t;
	};
	_proto.score_bar_1_i = function () {
		var t = new eui.Image();
		this.score_bar_1 = t;
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(12,2,30,14);
		t.scaleX = 0;
		t.source = "bg_white_png";
		t.width = 146;
		t.x = 47;
		t.y = 8;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -74;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "monthcard_icon_dengji_png";
		t.top = 112;
		t.visible = false;
		return t;
	};
	_proto.level__i = function () {
		var t = new eui.Group();
		this.level_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -74;
		t.scaleX = 0.56;
		t.scaleY = 0.56;
		t.top = 144;
		t.visible = false;
		return t;
	};
	_proto.group_goto_play_i = function () {
		var t = new eui.Group();
		this.group_goto_play = t;
		t.bottom = 300;
		t.visible = false;
		t.x = 131;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Label4_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "bg_xiaoji_png";
		t.x = 0;
		t.y = 368;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "bg_qipao_png";
		t.x = 191;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 114;
		t.size = 44;
		t.text = "快去玩游戏闯关领红包吧~";
		t.textAlign = "center";
		t.textColor = 0x84462a;
		t.width = 334;
		t.x = 369;
		t.y = 172;
		return t;
	};
	return StageRankWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StageSettingWindowSkin.exml'] = window.StageSettingWindowSkin = (function (_super) {
	__extends(StageSettingWindowSkin, _super);
	function StageSettingWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_btn_close","_avatarImg","_maskImg","_playerName","_btn_rank","_btn_pack","_btn_exit","_btn_question","_sound_effect_disable","_btn_sound_effect","_sound_bg_disable","_btn_sound_bg","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = StageSettingWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 819;
		t.horizontalCenter = 0;
		t.verticalCenter = -100;
		t.width = 992;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = -31.5;
		t.elementsContent = [this._Image1_i(),this._btn_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 819;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.source = "bg_tanchuang_4_png";
		t.touchEnabled = true;
		t.width = 992;
		t.x = 0;
		t.y = 31.5;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "icon_guanbi_1_png";
		t.x = 891;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 227;
		t.y = -31.5;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(79,0,23,125);
		t.source = "bg_titledi_png";
		t.width = 538;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.text = "设置";
		t.textColor = 0xffffff;
		t.x = 216;
		t.y = 31;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 119.7;
		t.anchorOffsetY = 118.18;
		t.horizontalCenter = 0;
		t.x = 170;
		t.y = 208.18;
		t.elementsContent = [this._avatarImg_i(),this._Image3_i(),this._maskImg_i()];
		return t;
	};
	_proto._avatarImg_i = function () {
		var t = new eui.Image();
		this._avatarImg = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.source = "bg_touxiang_1_png";
		t.verticalCenter = 0;
		t.width = 162;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_touxiangkuang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._maskImg_i = function () {
		var t = new eui.Image();
		this._maskImg = t;
		t.height = 162;
		t.horizontalCenter = 0;
		t.source = "touxiangmengban_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 162;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 219.7;
		t.anchorOffsetY = 45.45;
		t.horizontalCenter = 0;
		t.width = 434;
		t.y = 365.45;
		t.elementsContent = [this._Image4_i(),this._playerName_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(40,40,40,40);
		t.source = "bg_mingzidi_png";
		t.verticalCenter = 0;
		t.width = 434;
		t.y = 320;
		return t;
	};
	_proto._playerName_i = function () {
		var t = new eui.Label();
		this._playerName = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 3;
		t.strokeColor = 0xa7680e;
		t.text = "玩家名字";
		t.textAlign = "center";
		t.textColor = 0xfffdf8;
		t.verticalCenter = 0;
		t.width = 434;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 209;
		t.horizontalCenter = 0;
		t.width = 910;
		t.y = 410;
		t.elementsContent = [this._Image5_i(),this._btn_rank_i(),this._btn_pack_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 209;
		t.scale9Grid = new egret.Rectangle(50,50,50,50);
		t.source = "bg_tilidi_png";
		t.width = 910;
		return t;
	};
	_proto._btn_rank_i = function () {
		var t = new eui.Group();
		this._btn_rank = t;
		t.anchorOffsetX = 205;
		t.anchorOffsetY = 48;
		t.verticalCenter = 0.5;
		t.x = 236.06;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "btn_luse_png";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_paihang_png";
		t.x = 11;
		t.y = 9;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 46;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.text = "好友排行榜";
		t.verticalCenter = 0;
		return t;
	};
	_proto._btn_pack_i = function () {
		var t = new eui.Group();
		this._btn_pack = t;
		t.anchorOffsetX = 205;
		t.anchorOffsetY = 48;
		t.verticalCenter = 0.5;
		t.x = 675.58;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "btn_luse_png";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "icon_beibao_png";
		t.x = 22;
		t.y = 9;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 46;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.text = "背包";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 102;
		t.y = 636.36;
		t.elementsContent = [this._btn_exit_i(),this._btn_question_i(),this._btn_sound_effect_i(),this._btn_sound_bg_i()];
		return t;
	};
	_proto._btn_exit_i = function () {
		var t = new eui.Image();
		this._btn_exit = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "btn_tuichu_png";
		t.x = 76.06;
		t.y = 56.06;
		return t;
	};
	_proto._btn_question_i = function () {
		var t = new eui.Image();
		this._btn_question = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 59.09;
		t.source = "btn_wenhao_png";
		t.x = 397.58;
		t.y = 59.09;
		return t;
	};
	_proto._btn_sound_effect_i = function () {
		var t = new eui.Group();
		this._btn_sound_effect = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 57.58;
		t.x = 717.58;
		t.y = 57.58;
		t.elementsContent = [this._Image10_i(),this._sound_effect_disable_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "btn_yinxiao_png";
		return t;
	};
	_proto._sound_effect_disable_i = function () {
		var t = new eui.Image();
		this._sound_effect_disable = t;
		t.source = "btn_yinxiao_guan_png";
		t.visible = false;
		return t;
	};
	_proto._btn_sound_bg_i = function () {
		var t = new eui.Group();
		this._btn_sound_bg = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 54.55;
		t.x = 557.58;
		t.y = 54.55;
		t.elementsContent = [this._Image11_i(),this._sound_bg_disable_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "btn_yinyue_png";
		return t;
	};
	_proto._sound_bg_disable_i = function () {
		var t = new eui.Image();
		this._sound_bg_disable = t;
		t.source = "btn_yinyue_guan_png";
		t.visible = false;
		return t;
	};
	return StageSettingWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StageWindowSkin.exml'] = window.StageWindowSkin = (function (_super) {
	__extends(StageWindowSkin, _super);
	function StageWindowSkin() {
		_super.call(this);
		this.skinParts = ["group_bg","png_extend_","group_extend_","group_board","_btn_command","_text_input","_group_GM"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.group_bg_i(),this.group_extend__i(),this.group_board_i(),this._group_GM_i()];
	}
	var _proto = StageWindowSkin.prototype;

	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		return t;
	};
	_proto.group_extend__i = function () {
		var t = new eui.Group();
		this.group_extend_ = t;
		t.height = 300;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 1080;
		t.elementsContent = [this.png_extend__i()];
		return t;
	};
	_proto.png_extend__i = function () {
		var t = new eui.Image();
		this.png_extend_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_black_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.group_board_i = function () {
		var t = new eui.Group();
		this.group_board = t;
		t.anchorOffsetX = 531;
		t.anchorOffsetY = 558;
		t.horizontalCenter = 0;
		t.verticalCenter = -50;
		return t;
	};
	_proto._group_GM_i = function () {
		var t = new eui.Group();
		this._group_GM = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 776;
		t.x = 160;
		t.y = 136;
		t.elementsContent = [this._Image1_i(),this._btn_command_i(),this._text_input_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.94;
		t.source = "bg_di_1_png";
		t.width = 495.76;
		t.x = 33.27;
		t.y = 48;
		return t;
	};
	_proto._btn_command_i = function () {
		var t = new eui.Image();
		this._btn_command = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "btn_huangchang_1_png";
		t.width = 184.66;
		t.x = 568.67;
		t.y = 48;
		return t;
	};
	_proto._text_input_i = function () {
		var t = new eui.TextInput();
		this._text_input = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.width = 495.58;
		t.x = 32;
		t.y = 49;
		return t;
	};
	return StageWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TargetListItemSkin.exml'] = window.TargetListItemSkin = (function (_super) {
	__extends(TargetListItemSkin, _super);
	function TargetListItemSkin() {
		_super.call(this);
		this.skinParts = ["bg_mask_","bg_","nameLabel_","gatheredLabel_","targetImg_","avatarImg_","maskImg_","rankLabel_","listImg_","group_all"];
		
		this.height = 153;
		this.width = 800;
		this.elementsContent = [this.group_all_i()];
	}
	var _proto = TargetListItemSkin.prototype;

	_proto.group_all_i = function () {
		var t = new eui.Group();
		this.group_all = t;
		t.verticalCenter = 0;
		t.x = 0;
		t.elementsContent = [this.bg_mask__i(),this.bg__i(),this.nameLabel__i(),this.gatheredLabel__i(),this.targetImg__i(),this.avatarImg__i(),this.maskImg__i(),this.rankLabel__i(),this.listImg__i()];
		return t;
	};
	_proto.bg_mask__i = function () {
		var t = new eui.Image();
		this.bg_mask_ = t;
		t.height = 153;
		t.name = "bg_mask";
		t.source = "";
		t.verticalCenter = 0;
		t.width = 800;
		t.x = 0;
		return t;
	};
	_proto.bg__i = function () {
		var t = new eui.Image();
		this.bg_ = t;
		t.height = 140;
		t.name = "bg_xz";
		t.scale9Grid = new egret.Rectangle(17,15,30,27);
		t.source = "bg_paihangban1_png";
		t.width = 800;
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.nameLabel__i = function () {
		var t = new eui.Label();
		this.nameLabel_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 117;
		t.size = 34;
		t.text = "玩家名字";
		t.textAlign = "left";
		t.textColor = 0x8b6a4c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 291;
		t.x = 254.64;
		return t;
	};
	_proto.gatheredLabel__i = function () {
		var t = new eui.Label();
		this.gatheredLabel_ = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "50";
		t.textAlign = "left";
		t.textColor = 0x8B6A4C;
		t.verticalCenter = 0;
		t.width = 140;
		t.x = 666.98;
		return t;
	};
	_proto.targetImg__i = function () {
		var t = new eui.Image();
		this.targetImg_ = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "ele_orange_png";
		t.verticalCenter = 0;
		t.x = 569.3;
		return t;
	};
	_proto.avatarImg__i = function () {
		var t = new eui.Image();
		this.avatarImg_ = t;
		t.height = 104;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "touxiangmengban_png";
		t.verticalCenter = 0;
		t.width = 104;
		t.x = 133.05;
		return t;
	};
	_proto.maskImg__i = function () {
		var t = new eui.Image();
		this.maskImg_ = t;
		t.height = 104;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "touxiangmengban_png";
		t.verticalCenter = 0;
		t.width = 104;
		t.x = 133.05;
		return t;
	};
	_proto.rankLabel__i = function () {
		var t = new eui.Label();
		this.rankLabel_ = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "99";
		t.textAlign = "center";
		t.textColor = 0xa36216;
		t.width = 116;
		t.x = 20;
		t.y = 54;
		return t;
	};
	_proto.listImg__i = function () {
		var t = new eui.Image();
		this.listImg_ = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "icon_diyi_png";
		t.verticalCenter = 0;
		t.x = 44.05;
		return t;
	};
	return TargetListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/TaskGuideWindowSkin.exml'] = window.TaskGuideWindowSkin = (function (_super) {
	__extends(TaskGuideWindowSkin, _super);
	function TaskGuideWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","_closeBtn","_label1","_label2","_label3","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = TaskGuideWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._closeBtn_i(),this._Label1_i(),this._Image3_i(),this._Group4_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 465;
		t.left = 74;
		t.right = 74;
		t.scale9Grid = new egret.Rectangle(70,70,41,34);
		t.source = "bg_tanchuang_4_png";
		t.top = 446;
		t.touchEnabled = true;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(79,0,23,125);
		t.source = "bg_titledi_png";
		t.top = 403;
		t.width = 538;
		return t;
	};
	_proto._closeBtn_i = function () {
		var t = new eui.Image();
		this._closeBtn = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.source = "icon_guanbi_1_png";
		t.x = 984.06;
		t.y = 487.6;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.text = "怎么玩";
		t.top = 434;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 349;
		t.horizontalCenter = 0;
		t.source = "banner1_png";
		t.top = 547;
		t.width = 852;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 297.15;
		t.horizontalCenter = -16.5;
		t.top = 920;
		t.width = 817;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0;
		t.top = 27;
		t.width = 817;
		t.elementsContent = [this._Image4_i(),this._label1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 7;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "non_c_1_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._label1_i = function () {
		var t = new eui.Label();
		this._label1 = t;
		t.lineSpacing = 20;
		t.verticalCenter = 0.5;
		t.x = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0;
		t.top = 113;
		t.width = 817;
		t.elementsContent = [this._Image5_i(),this._label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 7;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "non_c_2_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._label2_i = function () {
		var t = new eui.Label();
		this._label2 = t;
		t.lineSpacing = 20;
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0;
		t.top = 223;
		t.width = 817;
		t.elementsContent = [this._Image6_i(),this._label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 7;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "non_c_3_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._label3_i = function () {
		var t = new eui.Label();
		this._label3 = t;
		t.lineSpacing = 20;
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 524;
		t.horizontalCenter = 0.5;
		t.source = "banner2_png";
		return t;
	};
	return TaskGuideWindowSkin;
})(eui.Skin);generateEUI.paths['resource/skins/WinGameWindowSkin.exml'] = window.WinGameWindowSkin = (function (_super) {
	__extends(WinGameWindowSkin, _super);
	function WinGameWindowSkin() {
		_super.call(this);
		this.skinParts = ["bg_exit_","rankingList_","rankingScroller","_rankPanel","bg_outer","goods_icon","goods_mask","group_icon","_banner1_textImg","_banner1_textBtn","_banner1_btnGroup","_banner1","_coinBar","_barLabel","_barGroup","_missionLabel1","_missionLabel2","_missionLabel3","_banner2_textBtn","_banner2_btnGroup","_banner2","_showGoodsPanel","fund_text1","fund_text2","fund_time","fund_text_amount","fund_text_time","_fundInfoPanel","_closeBtn","_title_left","_totalLevel","_annaMask","_coinHolder","show_coin_num_container","group_show_coin","_title_right","_nextBtnText","_nextBtn","_shareBtnBg","_rewardText","_shareBtn","_scoreHolder","_annaImg","_annaHolder","_pack_image","_pack_text","_redpackHolder","_star1","_star2","_star3","icon_liansheng","lianshengText_","lianshengNumber_","liansheng_scope","_bubble","_bubbleS","_label_desc","_packetInfo","_label_spin","_spin_tips","group_bg"];
		
		this.height = 1920;
		this.width = 1080;
		this.elementsContent = [this.bg_exit__i(),this.group_bg_i()];
	}
	var _proto = WinGameWindowSkin.prototype;

	_proto.bg_exit__i = function () {
		var t = new eui.Image();
		this.bg_exit_ = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,18,18);
		t.source = "bg_black_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.group_bg_i = function () {
		var t = new eui.Group();
		this.group_bg = t;
		t.height = 1920;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._rankPanel_i(),this._showGoodsPanel_i(),this._fundInfoPanel_i(),this._Image17_i(),this._Image18_i(),this._closeBtn_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._title_left_i(),this._totalLevel_i(),this._annaMask_i(),this._Image22_i(),this.group_show_coin_i(),this._Image25_i(),this._title_right_i(),this._nextBtn_i(),this._shareBtn_i(),this._scoreHolder_i(),this._annaHolder_i(),this._redpackHolder_i(),this._star1_i(),this._star2_i(),this._star3_i(),this.liansheng_scope_i(),this._packetInfo_i(),this._spin_tips_i()];
		return t;
	};
	_proto._rankPanel_i = function () {
		var t = new eui.Group();
		this._rankPanel = t;
		t.anchorOffsetY = 0;
		t.bottom = 187;
		t.height = 366.66;
		t.horizontalCenter = 0.5;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 351.36;
		t.scale9Grid = new egret.Rectangle(71,72,37,36);
		t.source = "bg_shouji_png";
		t.width = 1000;
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(60,60,10,10);
		t.source = "bg_paiming_png";
		t.verticalCenter = -7.3300000000000125;
		t.width = 940;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.width = 878.66;
		t.y = 56.66999999999999;
		t.elementsContent = [this.rankingScroller_i()];
		return t;
	};
	_proto.rankingScroller_i = function () {
		var t = new eui.Scroller();
		this.rankingScroller = t;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.touchEnabled = true;
		t.width = 890;
		t.y = 0;
		t.viewport = this.rankingList__i();
		return t;
	};
	_proto.rankingList__i = function () {
		var t = new eui.List();
		this.rankingList_ = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.itemRendererSkinName = RankListItemSkin;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = true;
		t.width = 890;
		t.y = -30.3;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 94.00000000000003;
		t.y = -64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._showGoodsPanel_i = function () {
		var t = new eui.Group();
		this._showGoodsPanel = t;
		t.anchorOffsetY = 0;
		t.bottom = 187;
		t.height = 366.66;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this.bg_outer_i(),this._Image5_i(),this._Image6_i(),this.group_icon_i(),this._banner1_i(),this._banner2_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto.bg_outer_i = function () {
		var t = new eui.Image();
		this.bg_outer = t;
		t.anchorOffsetY = 0;
		t.height = 351.36;
		t.scale9Grid = new egret.Rectangle(71,72,37,36);
		t.source = "bg_shouji_png";
		t.width = 1000;
		t.x = 1;
		t.y = 2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(53,56,24,18);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_png";
		t.verticalCenter = -8.330000000000013;
		t.width = 940;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 132;
		t.anchorOffsetY = 132;
		t.horizontalCenter = -320.5;
		t.scaleX = 1.12;
		t.scaleY = 1.12;
		t.source = "bg_shangpin_kuang_png";
		t.verticalCenter = -8.330000000000013;
		return t;
	};
	_proto.group_icon_i = function () {
		var t = new eui.Group();
		this.group_icon = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 116;
		t.height = 232;
		t.horizontalCenter = -320.5;
		t.verticalCenter = -8.330000000000013;
		t.width = 232;
		t.elementsContent = [this.goods_icon_i(),this.goods_mask_i()];
		return t;
	};
	_proto.goods_icon_i = function () {
		var t = new eui.Image();
		this.goods_icon = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 116;
		t.height = 232;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_shangpin_png";
		t.verticalCenter = 0;
		t.width = 232;
		return t;
	};
	_proto.goods_mask_i = function () {
		var t = new eui.Image();
		this.goods_mask = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 116;
		t.height = 232;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_shangpin_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 232;
		return t;
	};
	_proto._banner1_i = function () {
		var t = new eui.Group();
		this._banner1 = t;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -10.330000000000013;
		t.visible = false;
		t.width = 940;
		t.elementsContent = [this._banner1_textImg_i(),this._banner1_btnGroup_i()];
		return t;
	};
	_proto._banner1_textImg_i = function () {
		var t = new eui.Image();
		this._banner1_textImg = t;
		t.horizontalCenter = 48.5;
		t.source = "text1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner1_btnGroup_i = function () {
		var t = new eui.Group();
		this._banner1_btnGroup = t;
		t.height = 177;
		t.horizontalCenter = 375.5;
		t.verticalCenter = 0;
		t.width = 177;
		t.elementsContent = [this._Image7_i(),this._banner1_textBtn_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_anniu_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner1_textBtn_i = function () {
		var t = new eui.Image();
		this._banner1_textBtn = t;
		t.horizontalCenter = 0;
		t.source = "text_anniu_qiang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner2_i = function () {
		var t = new eui.Group();
		this._banner2 = t;
		t.height = 300.37;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -10.330000000000013;
		t.visible = false;
		t.width = 940;
		t.elementsContent = [this._barGroup_i(),this._Group2_i(),this._banner2_btnGroup_i()];
		return t;
	};
	_proto._barGroup_i = function () {
		var t = new eui.Group();
		this._barGroup = t;
		t.height = 75;
		t.horizontalCenter = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -72.685;
		t.width = 644;
		t.elementsContent = [this._Image8_i(),this._coinBar_i(),this._barLabel_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(38,0,31,75);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bar2_png";
		t.width = 644;
		return t;
	};
	_proto._coinBar_i = function () {
		var t = new eui.Image();
		this._coinBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 16;
		t.scale9Grid = new egret.Rectangle(23,0,28,45);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bar_png";
		t.top = 13;
		t.width = 610;
		return t;
	};
	_proto._barLabel_i = function () {
		var t = new eui.Label();
		this._barLabel = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = -3.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 94;
		t.width = 670;
		t.x = 270;
		t.y = 164;
		t.elementsContent = [this._Image9_i(),this._missionLabel1_i(),this._missionLabel2_i(),this._missionLabel3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_textdi2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._missionLabel1_i = function () {
		var t = new eui.Label();
		this._missionLabel1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.stroke = 3;
		t.strokeColor = 0xAE4A08;
		t.text = "";
		t.textColor = 0xFEFBEF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	_proto._missionLabel2_i = function () {
		var t = new eui.Label();
		this._missionLabel2 = t;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.stroke = 3;
		t.strokeColor = 0xAE4A08;
		t.text = "";
		t.textColor = 0xFFE139;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 405;
		return t;
	};
	_proto._missionLabel3_i = function () {
		var t = new eui.Label();
		this._missionLabel3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.stroke = 3;
		t.strokeColor = 0xAE4A08;
		t.text = "";
		t.textColor = 0xFEFBEF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 483;
		return t;
	};
	_proto._banner2_btnGroup_i = function () {
		var t = new eui.Group();
		this._banner2_btnGroup = t;
		t.height = 177;
		t.horizontalCenter = 387.5;
		t.verticalCenter = 62.315;
		t.visible = false;
		t.width = 177;
		t.elementsContent = [this._Image10_i(),this._banner2_textBtn_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_anniu_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._banner2_textBtn_i = function () {
		var t = new eui.Image();
		this._banner2_textBtn = t;
		t.horizontalCenter = 0;
		t.source = "text_anniu_xiadan_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 94.00000000000003;
		t.y = -64;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -203.33;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._fundInfoPanel_i = function () {
		var t = new eui.Group();
		this._fundInfoPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 213;
		t.height = 350;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.fund_text1_i(),this.fund_text2_i(),this.fund_time_i(),this.fund_text_amount_i(),this.fund_text_time_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 337;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(71,72,37,36);
		t.source = "bg_shouji_png";
		t.verticalCenter = 0;
		t.width = 1000;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -363.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -182;
		t.x = 126;
		t.y = -56;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 364.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_dakou_png";
		t.verticalCenter = -182;
		t.x = 834;
		t.y = -64;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_banner_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.fund_text1_i = function () {
		var t = new eui.Image();
		this.fund_text1 = t;
		t.horizontalCenter = 66.5;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_wenzi_5_png";
		t.verticalCenter = -67.5;
		return t;
	};
	_proto.fund_text2_i = function () {
		var t = new eui.Image();
		this.fund_text2 = t;
		t.horizontalCenter = 220;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_wenzi_4_png";
		t.verticalCenter = 4;
		return t;
	};
	_proto.fund_time_i = function () {
		var t = new eui.Image();
		this.fund_time = t;
		t.horizontalCenter = 52;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "fund_shijian_png";
		t.verticalCenter = 93;
		return t;
	};
	_proto.fund_text_amount_i = function () {
		var t = new eui.Label();
		this.fund_text_amount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 37.5;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -303;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 75;
		t.text = "￥15.55";
		t.textColor = 0xec2512;
		t.y = 162;
		return t;
	};
	_proto.fund_text_time_i = function () {
		var t = new eui.Label();
		this.fund_text_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "08:22:33后活动结束";
		t.textColor = 0xfaf0c8;
		t.verticalCenter = 93;
		t.x = 575;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 613;
		t.left = 32;
		t.right = 32;
		t.scale9Grid = new egret.Rectangle(119,71,22,41);
		t.source = "bg_kaishi_png";
		t.top = 287;
		t.touchEnabled = true;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(79,0,23,125);
		t.source = "bg_titledi_png";
		t.width = 538;
		t.y = 234.09;
		return t;
	};
	_proto._closeBtn_i = function () {
		var t = new eui.Image();
		this._closeBtn = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.source = "icon_guanbi_1_png";
		t.x = 1009.45;
		t.y = 306.99;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 100.5;
		t.rotation = -15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_big_star_2_png";
		t.x = 317;
		t.y = 512.67;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 100.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_big_star_2_png";
		t.x = 540;
		t.y = 472.67;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 100.5;
		t.rotation = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_big_star_2_png";
		t.x = 757;
		t.y = 506.67;
		return t;
	};
	_proto._title_left_i = function () {
		var t = new eui.Label();
		this._title_left = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 90;
		t.horizontalCenter = -126;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -666;
		return t;
	};
	_proto._totalLevel_i = function () {
		var t = new eui.Group();
		this._totalLevel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 1;
		t.verticalCenter = -663;
		t.width = 180;
		return t;
	};
	_proto._annaMask_i = function () {
		var t = new eui.Image();
		this._annaMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -32;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bg_inner_png";
		t.visible = false;
		t.width = 470.82;
		t.y = 686.98;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bg_inner_png";
		t.y = 696.07;
		return t;
	};
	_proto.group_show_coin_i = function () {
		var t = new eui.Group();
		this.group_show_coin = t;
		t.visible = false;
		t.x = 125;
		t.y = 700.28;
		t.elementsContent = [this._coinHolder_i(),this._Image23_i(),this._Image24_i(),this._Label1_i(),this.show_coin_num_container_i()];
		return t;
	};
	_proto._coinHolder_i = function () {
		var t = new eui.Group();
		this._coinHolder = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 420;
		t.y = 350;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "bg_guang_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi1_png";
		t.x = 282;
		t.y = 175;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.stroke = 3;
		t.strokeColor = 0xb74b40;
		t.text = "恭喜获得";
		t.x = 295;
		t.y = 85;
		return t;
	};
	_proto.show_coin_num_container_i = function () {
		var t = new eui.Group();
		this.show_coin_num_container = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 125;
		t.x = 540;
		t.y = 370;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.source = "bg_fenshu_png";
		t.y = 649.13;
		return t;
	};
	_proto._title_right_i = function () {
		var t = new eui.Label();
		this._title_right = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 91;
		t.horizontalCenter = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xbb4301;
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -665.5;
		return t;
	};
	_proto._nextBtn_i = function () {
		var t = new eui.Group();
		this._nextBtn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.horizontalCenter = -215.5;
		t.verticalCenter = 319.5;
		t.elementsContent = [this._Image26_i(),this._Image27_i(),this._nextBtnText_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_anniudi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "btn_luchang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._nextBtnText_i = function () {
		var t = new eui.Label();
		this._nextBtnText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.borderColor = 0x2e7d09;
		t.fontFamily = "Microsoft YaHei";
		t.height = 116;
		t.size = 54;
		t.stroke = 3;
		t.strokeColor = 0x2e7d09;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 380;
		t.x = 17;
		return t;
	};
	_proto._shareBtn_i = function () {
		var t = new eui.Group();
		this._shareBtn = t;
		t.anchorOffsetX = 207;
		t.anchorOffsetY = 75;
		t.horizontalCenter = 222;
		t.verticalCenter = 316.5;
		t.elementsContent = [this._Image28_i(),this._shareBtnBg_i(),this._rewardText_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bg_anniudi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._shareBtnBg_i = function () {
		var t = new eui.Image();
		this._shareBtnBg = t;
		t.anchorOffsetX = 212.12;
		t.anchorOffsetY = 72.73;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "btn_huangchang_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._rewardText_i = function () {
		var t = new eui.Label();
		this._rewardText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 116;
		t.horizontalCenter = 0;
		t.size = 52;
		t.stroke = 3;
		t.strokeColor = 0xc26807;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 380;
		return t;
	};
	_proto._scoreHolder_i = function () {
		var t = new eui.Group();
		this._scoreHolder = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83.64;
		t.width = 366.66;
		t.x = 357;
		t.y = 660.63;
		return t;
	};
	_proto._annaHolder_i = function () {
		var t = new eui.Group();
		this._annaHolder = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 412.12;
		t.width = 478.79;
		t.x = 301;
		t.y = 757.94;
		t.elementsContent = [this._annaImg_i()];
		return t;
	};
	_proto._annaImg_i = function () {
		var t = new eui.Image();
		this._annaImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 470;
		t.horizontalCenter = 30.10499999999999;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "girl2_png";
		t.visible = false;
		t.width = 313;
		t.x = -11;
		t.y = -35.87;
		return t;
	};
	_proto._redpackHolder_i = function () {
		var t = new eui.Group();
		this._redpackHolder = t;
		t.anchorOffsetX = 137;
		t.anchorOffsetY = 154;
		t.height = 308;
		t.visible = false;
		t.width = 274;
		t.x = 808;
		t.y = 990;
		t.elementsContent = [this._pack_image_i(),this._pack_text_i()];
		return t;
	};
	_proto._pack_image_i = function () {
		var t = new eui.Image();
		this._pack_image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 308;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "fund_hongbao_png";
		t.width = 274;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._pack_text_i = function () {
		var t = new eui.Label();
		this._pack_text = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 91;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 74;
		t.strokeColor = 0xBB4301;
		t.text = "¥1.37";
		t.textColor = 0xec2515;
		t.verticalAlign = "middle";
		t.visible = false;
		t.y = 36;
		return t;
	};
	_proto._star1_i = function () {
		var t = new eui.Image();
		this._star1 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 99;
		t.rotation = -15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 317;
		t.y = 513;
		return t;
	};
	_proto._star2_i = function () {
		var t = new eui.Image();
		this._star2 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 540;
		t.y = 473;
		return t;
	};
	_proto._star3_i = function () {
		var t = new eui.Image();
		this._star3 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 99;
		t.rotation = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_big_star_1_png";
		t.visible = false;
		t.x = 757;
		t.y = 507;
		return t;
	};
	_proto.liansheng_scope_i = function () {
		var t = new eui.Group();
		this.liansheng_scope = t;
		t.height = 40;
		t.width = 50;
		t.x = 44.5;
		t.y = 452.67;
		t.elementsContent = [this.icon_liansheng_i(),this.lianshengText__i(),this.lianshengNumber__i()];
		return t;
	};
	_proto.icon_liansheng_i = function () {
		var t = new eui.Image();
		this.icon_liansheng = t;
		t.height = 205;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_liansheng_png";
		t.visible = false;
		t.width = 168;
		t.x = -56.5;
		t.y = -69.67000000000002;
		return t;
	};
	_proto.lianshengText__i = function () {
		var t = new eui.Label();
		this.lianshengText_ = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x893720;
		t.textColor = 0xfffeda;
		t.visible = false;
		t.x = -12.5;
		t.y = 40.00000000000006;
		return t;
	};
	_proto.lianshengNumber__i = function () {
		var t = new eui.Label();
		this.lianshengNumber_ = t;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x893720;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0xfffeda;
		t.verticalAlign = "middle";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto._packetInfo_i = function () {
		var t = new eui.Group();
		this._packetInfo = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.visible = false;
		t.width = 516.81;
		t.x = 401.55;
		t.y = 752.61;
		t.elementsContent = [this._bubble_i(),this._bubbleS_i(),this._label_desc_i()];
		return t;
	};
	_proto._bubble_i = function () {
		var t = new eui.Image();
		this._bubble = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 75;
		t.scaleX = 2.3;
		t.scaleY = 2.4;
		t.source = "liansheng_qipaoda_png";
		t.x = 261.48;
		t.y = 175.86;
		return t;
	};
	_proto._bubbleS_i = function () {
		var t = new eui.Image();
		this._bubbleS = t;
		t.anchorOffsetX = 12.5;
		t.anchorOffsetY = 13.5;
		t.scaleX = 2.2;
		t.scaleY = 2.2;
		t.source = "liansheng_qipaoxiao_png";
		t.x = 5.01;
		t.y = 234.76;
		return t;
	};
	_proto._label_desc_i = function () {
		var t = new eui.Label();
		this._label_desc = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 100;
		t.bold = true;
		t.border = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 200;
		t.lineSpacing = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0263BD;
		t.verticalAlign = "middle";
		t.width = 400;
		t.x = 263.29;
		t.y = 181.25;
		return t;
	};
	_proto._spin_tips_i = function () {
		var t = new eui.Group();
		this._spin_tips = t;
		t.visible = false;
		t.x = 692;
		t.y = 1134;
		t.elementsContent = [this._Image29_i(),this._label_spin_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "spin_qipao_png";
		t.y = 0;
		return t;
	};
	_proto._label_spin_i = function () {
		var t = new eui.Label();
		this._label_spin = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "";
		t.textColor = 0x8a5036;
		t.y = 14.92;
		return t;
	};
	return WinGameWindowSkin;
})(eui.Skin);