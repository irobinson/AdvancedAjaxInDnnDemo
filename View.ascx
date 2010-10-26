<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="AdvancedAjaxInDnnDemo.View" %>
<%@ Import Namespace="DotNetNuke.Services.Localization" %>

<script type="text/javascript">
    //this is a really simple example of a "current context info"
    //but its enough to get the idea. The user id is now easily available in the View.js file (remember JS is global)
    //think about alternate ways you could provide this context to your view and make it more flexible.
    var DemoViewContext = {
        UserId: <%= this.UserId %>
    };
</script>

<script type="text/javascript" src="<%= ResolveUrl("Scripts/ServiceProxy.js") %>"></script>
<script type="text/javascript" src="<%= ResolveUrl("Scripts/View.js") %>"></script>

<h3>Hello World</h3>
<input type="text" id="helloText" />
<input type="button" value="Hello" id="helloButton" />

<h3>Add Income</h3>
<div class="input-area">
    <div class="add-income form-row">
        <label for="IncomeCategoryList"><%= Localization.GetString("Income Category.Label", this.LocalResourceFile) %></label>
        <select id="IncomeCategoryList">
            <option value="-1"><%= Localization.GetString("IncomeListInitialItem.Text", this.LocalResourceFile) %></option>
            <option value="1"><%= Localization.GetString("Paycheck.Text", this.LocalResourceFile) %></option>
            <option value="2"><%= Localization.GetString("Gambling.Text", this.LocalResourceFile) %></option>
        </select>

        <label for="income-amount"><%= Localization.GetString("Income Amount.Label", this.LocalResourceFile) %></label>
        <input type="text" id="income-amount" class="required number" /><span><%= Localization.GetString("Income Amount.Label", this.LocalResourceFile) %></span>

        <input type="button" value="Add" id="income-add-button" class="add-button" />
    </div>

    <div class="your-income">
        <span><%= Localization.GetString("Your Income.Label", this.LocalResourceFile) %></span>
            <ul id="income-list" style="display:none;"></ul>
        <div><%= Localization.GetString("Expense Total.Label", this.LocalResourceFile) %> <span id="income-total" class="item-total"></span> <%= Localization.GetString("Per Month.Label", this.LocalResourceFile) %></div>
    </div>

    <div><input id="submit-items" type="submit" value="<%= Localization.GetString("SubmitButton.Text", this.LocalResourceFile) %>" /></div>
</div>