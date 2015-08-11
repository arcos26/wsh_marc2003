_.mixin({
	hacks : function () {
		this.disable = function () {
			this.enabled = false;
			UIHacks.FrameStyle = this.FrameStyle.Default;
			UIHacks.MainMenuState = this.MainMenuState.Show;
			UIHacks.StatusBarState = true;
			UIHacks.DisableSizing = false;
			UIHacks.BlockMaximize = false;
			UIHacks.MinSize = false;
			UIHacks.MaxSize = false;
		}
		
		this.enable = function () {
			this.enabled = true;
			UIHacks.FrameStyle = this.FrameStyle.NoBorder;
			UIHacks.MainMenuState = this.MainMenuState.Hide;
			UIHacks.StatusBarState = false;
			UIHacks.DisableSizing = true;
			UIHacks.BlockMaximize = true;
			UIHacks.MinSize = true;
			UIHacks.MaxSize = true;
		}
		
		this.set_caption = function (x, y, w, h) {
			if (this.enabled)
				UIHacks.SetPseudoCaption(x, y, w, h);
		}
		
		this.lock_size = function (w, h) {
			if (this.enabled) {
				UIHacks.MinSize.Width = w;
				UIHacks.MinSize.Height = h;
				UIHacks.MinSize = true;
				UIHacks.MaxSize.Width = w;
				UIHacks.MaxSize.Height = h;
				UIHacks.MaxSize = true;
			}
		}
		
		this.MainMenuState = { Show : 0, Hide : 1, Auto : 2 };
		this.FrameStyle = { Default : 0, SmallCaption : 1, NoCaption : 2, NoBorder : 3 };
		this.MoveStyle = { Default : 0, Middle : 1, Left : 2, Both : 3 };
		this.enabled = false;
		UIHacks = new ActiveXObject("UIHacks");
		UIHacks.MoveStyle = this.MoveStyle.Default;
	}
});
