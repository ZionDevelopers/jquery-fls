A fast and easy javascript live search that uses data fields and without the need of pre-initialization

```html
<select id="orderAlbums">
	<option value="all">All</option>
	<option value="0">My category</option>
	<option value="1">My category Two</option>
	<option value="2">My category Three</option>
</select>
<br />
<input type="text" name="search" placeholder="search for" id="searchAlbum" value="" />
<div data-fls-search-ipt="#searchAlbum" data-fls-category-ipt="#orderAlbums" data-fls-effects="show/hide" data-fls="1">
	<!-- Your Photos go here -->
	<div class="fls" data-category="0" data-title="Photo One">Photo</div>
	<div class="fls" data-category="1" data-title="Photo One">Photo</div>
	<div class="fls" data-category="2" data-title="Photo One">Photo</div>
</div>
```
