const OLD_HOST = 'codex-playbook.chendahuang.top';
const NEW_BASE_PATH = '/playbook/codex';

export default {
  // 旧子域只做 301 跳转，并保留原路径与 query，统一到主域的 Playbook 路径。
  fetch(request: Request, env: Env): Response | Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === 'chendahuang.com' && url.pathname === NEW_BASE_PATH) {
      url.pathname = `${NEW_BASE_PATH}/`;

      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === OLD_HOST) {
      url.hostname = 'chendahuang.com';
      url.pathname = `${NEW_BASE_PATH}${url.pathname === '/' ? '/' : url.pathname}`;

      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  }
};
