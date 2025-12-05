{* Placeholder pwreset.tpl - restored to prevent blank file issues *}
<div class="pwreset-container">
  <h2>Reset Your Password</h2>
  {if $success}
    <div class="alert alert-success">Your password has been reset. Check your email for the new password.</div>
  {else}
    <form method="post" action="{$systemLink}">
      <input type="hidden" name="action" value="pwreset" />
      <div class="form-group">
        <label for="email">Email address</label>
        <input id="email" name="email" type="email" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Reset Password</button>
    </form>
  {/if}
</div>
